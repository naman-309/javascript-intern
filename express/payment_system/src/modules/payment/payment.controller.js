import { pool } from "../../config/db.js";

export const sendMoney = async (req, res, next) => {
  const client = await pool.connect();

  try {
    const senderId = req.user.id;
    const receiverId = Number(req.body.receiverId);
    const amount = Number(req.body.amount);

    if (senderId === receiverId) {
      return res.status(400).json({ message: "You cannot send money to yourself" });
    }

    await client.query("BEGIN");

    const senderResult = await client.query(
      "SELECT id, balance FROM users WHERE id = $1 FOR UPDATE",
      [senderId]
    );

    const receiverResult = await client.query(
      "SELECT id FROM users WHERE id = $1",
      [receiverId]
    );

    if (senderResult.rows.length === 0) {
      await client.query("ROLLBACK");
      return res.status(404).json({ message: "Sender not found" });
    }

    if (receiverResult.rows.length === 0) {
      await client.query("ROLLBACK");
      return res.status(404).json({ message: "Receiver not found" });
    }

    const senderBalance = Number(senderResult.rows[0].balance);

    if (senderBalance < amount) {
      await client.query("ROLLBACK");
      return res.status(400).json({ message: "Insufficient balance" });
    }

    const senderUpdate = await client.query(
      `UPDATE users
       SET balance = balance - $1
       WHERE id = $2
       RETURNING balance`,
      [amount, senderId]
    );

    await client.query(
      `UPDATE users
       SET balance = balance + $1
       WHERE id = $2`,
      [amount, receiverId]
    );

    await client.query("COMMIT");

    res.json({
      message: "Money sent successfully",
      remainingBalance: senderUpdate.rows[0].balance,
    });
  } catch (error) {
    await client.query("ROLLBACK");
    next(error);
  } finally {
    client.release();
  }
};
