const getCurrentDate = require('../../lib/getCurrentDate');
const getNextSequence = require('../../lib/getNextSequence');
const Market = require('../../models/market');
const User = require('../../models/user');
const Comment = require('../../models/comment');

// 댓글 조회
exports.list = async (req, res) => {
  try {

    const comments = await Comment.find({ deletedDate: null })

    res.send({ message: 'success', comments });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};

// 댓글 작성
exports.write = async (req, res) => {
  const {
    userId,
    marketId,
    description,
  } = req.body;

  if (
    !userId ||
    !marketId ||
    !description
  )
    return res.status(404).send({ message: 'write fail' });

  try {
    const id = await getNextSequence('commentId');

    const comment = await Comment.create({
      id,
      userId,
      marketId,
      description
    });

    res.send({ message: 'write success', comment });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};

// 댓글 수정
exports.update = async (req, res) => {
  const {
    userId,
    marketId,
    description
  } = req.body;

  if (
    !userId ||
    !marketId ||
    !description
  )
    return res.status(404).send({ message: 'value is not found' });

  const { id } = req.params;

  try {
    const comment = await Comment.findOneAndUpdate(
      { id },
      {
        userId,
        marketId,
        description,
        updateDate: getCurrentDate(),
      },
      { new: true }
    );

    if (!comment) return res.status(404).send('userId is not found');

    res.send({ message: 'update success', comment });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};

// 댓글 삭제
exports.delete = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(404).send();

  try {
    const comment = await Comment.findOneAndUpdate(
      { id },
      {
        deletedDate: getCurrentDate(),
      },
      { new: true }
    );

    if (!comment) return res.status(404).send();

    res.send({ message: 'delete success', comment });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};