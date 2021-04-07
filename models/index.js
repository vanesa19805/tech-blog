const {   DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


const User = require('./user');
const Post = require('./post');
 


// associate the post to the user. this is for when the user creates a comment postill i need to use onDELETE??
Post.belongsTo(User, {
    foreignKey: 'user_name',
    onDelete: 'CASCADE',
});

// from the comment.js
//a user can have many post
User.hasMany(Post,{
    foreignKey: 'user_id',
});

// a post belongs to a user
Post.belongsTo(User,{
  foreignKey: 'post_id',  
});


module.exports= {Post,User}