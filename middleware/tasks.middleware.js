export const createTaskMiddleware = (req, res, next) => {
  const { title, description, userId } = req.body;
  if (!title || !description || !userId) {
    return res.status(400).send("title, description or userId not found");
  }
  next();
};
