export const registrUserMiddleware = (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password ) {
    return res.status(400).send("name,age, email or password not found");
  }
  if (name.length < 3) {
    return res.status(400).send("name minimum length 3");
  }
  if (password.length < 3) {
    return res.status(400).send("password minimum length 3");
  }

  next();
};
