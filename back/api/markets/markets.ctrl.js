const getCurrentDate = require('../../lib/getCurrentDate');
const getNextSequence = require('../../lib/getNextSequence');
const Market = require('../../models/market');
const User = require('../../models/user');
const Like = require('../../models/like');

// 게시물 리스트 조회
exports.list = async (req, res) => {
  try {
    const { rollingCnt } = req.query;

    const marketsCnt = await Market.find({ deletedDate: null }).countDocuments();
    const markets = await Market.find({ deletedDate: null })
      .skip(9 * rollingCnt)
      .sort({ _id: -1 })
      .limit(9);

    res.send({ message: 'list success', markets, marketsCnt });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};

// 게시물 검색
exports.search = async (req, res) => {
  const { marketName } = req.params;
  const { rollingCnt } = req.query;

  try {
    const marketsCnt = await Market.find({ deletedDate: null, marketName: { $regex: marketName, $options: 'i' } }).countDocuments();
    const markets = await Market.find({ deletedDate: null, marketName: { $regex: marketName, $options: 'i' } })
      .skip(9 * rollingCnt)
      .sort({ _id: -1 })
      .limit(9);

    res.send({ message: 'list success', markets, marketsCnt });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};

// 게시물 등록
exports.write = async (req, res) => {
  const {
    userId,
    imgPath,
    marketName,
    description,
    district,
    category,
    address,
  } = req.body;

  if (
    !userId ||
    !imgPath ||
    !marketName ||
    !description ||
    !district ||
    !category ||
    !address
  )
    return res.status(404).send();

  try {
    const id = await getNextSequence('marketId');

    const market = await Market.create({
      id,
      userId,
      imgPath,
      marketName,
      description,
      district,
      category,
      address,
    });

    res.send({ message: 'write success', market });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};

// 게시물 수정
exports.update = async (req, res) => {
  const {
    userId,
    imgPath,
    marketName,
    description,
    district,
    category,
    address,
  } = req.body;

  if (
    !userId ||
    !imgPath ||
    !marketName ||
    !description ||
    !district ||
    !category ||
    !address
  )
    return res.status(404).send();
  const { id } = req.params;

  try {
    const market = await Market.findOneAndUpdate(
      { id },
      {
        userId,
        imgPath,
        marketName,
        description,
        district,
        category,
        address,
        updateDate: getCurrentDate(),
      },
      { new: true }
    );

    if (!market) return res.status(404).send();

    res.send({ message: 'update success', market });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};

// 게시물 삭제
exports.delete = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(404).send();

  try {
    const market = await Market.findOneAndUpdate(
      { id },
      {
        deletedDate: getCurrentDate(),
      },
      { new: true }
    );

    if (!market) return res.status(404).send();

    res.send({ message: 'delete success', market });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};

// 관심 숫자 증가
exports.like = async (req, res) => {
  const {
    userId,
    marketId
  } = req.body;

  if (
    !userId ||
    !marketId
  ) return res.status(404).send();

  try {
    const result = await Like.create({
      userId,
      marketId
    });

    res.send({ message: 'like success', result });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};

// 게시물 삭제
exports.unlike = async (req, res) => {
  const {
    userId,
    marketId
  } = req.body;

  if (
    !userId ||
    !marketId
  ) return res.status(404).send();

  try {
    const result = await Like.remove(
      {
        'userId': userId,
        'marketId': marketId

      }
    );

    res.send({ message: 'delete success' });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};

// 특정 게시물 확인
exports.find = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(404).send();

  try {
    const market = await Market.findOne({ id: +id, deletedDate: null });

    if (!market) return res.status(404).send();

    res.send({ message: 'find success', market });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};

// 이미지 업로드
exports.upload = async (req, res) => {
  if (!req.file) {
    return res.json({ url: '' });
  }
  res.json({ url: `${req.file.filename}` });
};

// 카테고리에 따른 market list 조회
exports.listByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const { rollingCnt } = req.query;

    const marketsCnt = await Market.find({ deletedDate: null, category: { $in: category.split(' ') } }).countDocuments();
    const markets = await Market.find({ deletedDate: null, category: { $in: category.split(' ') } })
      .skip(9 * rollingCnt)
      .sort({ _id: -1 })
      .limit(9);

    res.send({ message: 'list success', markets, marketsCnt });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};