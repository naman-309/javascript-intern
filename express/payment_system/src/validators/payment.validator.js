export const validatePayment = (req, res, next) => {
  const { receiverId, amount } = req.body;

  if (!receiverId || amount === undefined) {
    return res.status(400).json({ message: "receiverId and amount are required" });
  }

  if (!Number.isInteger(Number(receiverId)) || Number(receiverId) <= 0) {
    return res.status(400).json({ message: "receiverId must be a valid user id" });
  }

  const paymentAmount = Number(amount);

  if (!Number.isFinite(paymentAmount) || paymentAmount <= 0) {
    return res.status(400).json({ message: "Amount must be a valid number greater than 0" });
  }

  next();
};
