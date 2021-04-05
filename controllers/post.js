const router = require('express').router();
const Post = require('./models/post');

//this is where we will create routes for the post
router.post('/', async (req, res) => {
    try { 
      const postData = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_name: req.body.User_name,
    });
    // if the dish is successfully created, the new response will be returned as json
    res.status(200).json(dishData)
  } catch (err) {
    res.status(400).json(err);
  }
  });



  
  
  
  module.exports = router;