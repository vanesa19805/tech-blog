const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Post = require('./post');

class Comment extends Model{}

Comment.init(
    {
id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:false,
        autoIncrement: true,
},
date_created:{
    type: DataTypes.DATE, 
    allowNull: false,
    defaultValue:DataTypes.NOW
},
// this will show refrence to the user 
user_id:{
    type: DataTypes.INTEGER,
    allowNull:false,
    refrence:{
        model:'User',
        key:'id'
    },
},
// this will show the post and associated w/ the user
post_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    refrence:{
        model:'Post',
        key:'id',
    },
},
},

{
sequelize,
freezeTableName: true,
underscored: true,
modelName: 'Comment',
},
);

module.exports= Comment;