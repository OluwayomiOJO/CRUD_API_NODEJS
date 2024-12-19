module.exports = (req, res, next) => {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }
    if (title.length > 50) {
      return res.status(400).json({ error: 'Title must not exceed 50 characters'});
    }
    next();
  };
  