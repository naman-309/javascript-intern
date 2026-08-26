import { pool } from "../../config/db.js";

export const getProfile = async (req, res, next) => {
  try {
    const result = await pool.query(
      "SELECT id, name, email, balance FROM users WHERE id = $1",
      [req.user.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user: result.rows[0] });
  } catch (error) {
    next(error);
  }
};
