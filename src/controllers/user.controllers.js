const models = require("../models");

const signUp = async (req, res) => {
  try {
    const { email, password1, password2 } = req.body;
    console.log({ email, password1, password2 });

    if (!email || !password1 || !password2 || password1 !== password2) {
      res.json("Los datos no son correctos");
    }
    const file = req.file;
    console.log({ file });
    return res.sendStatus(200);
    const hash = await models.user.encrypt(password1);

    const user = {
      avatar: "avatar",
      email,
      password: hash,
    };

    const existUser = await models.user.findOne({ email });
    if (existUser) {
      return res.json("El usuario ya existe!!");
    }

    const data = await models.user.create(user);

    return res.status(201).json({ data });
  } catch (err) {
    return res.json({ err });
  }
};

const signIn = (req, res) => {
  return res.json("SignIn");
};

module.exports = {
  signUp,
  signIn,
};
