const User = require('../../models/user');

// 특정 유저 응답
exports.find = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(404).send();

  try {
    const user = await User.findOne({ id });

    if (!user) return res.send({ message: 'find fail', error: 'null of user' });

    res.send({ message: 'find success', user });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};

// 유저 등록
exports.write = async (req, res) => {
  const { id, email } = req.body;

  if (!id || !email) return res.status(404).send();

  try {
    let user = await User.findOne({ id });

    if (user) return res.status(404).send();

    user = await User.create({
      id,
      email,
    });

    res.send({ message: 'write success', user });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};