const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Post extends Model {}

Post.init(
    {
id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
},
title: {
    type:DataTypes.STRING,
    allowNull: false,
},
content:{
    type:DataTypes.STRING,
    allowNull: true
},
user_name:{
    type:DataTypes.STRING,
    allowNull: false,
    refrence:{
        model: 'User',
        Key: 'id', 
    },
},
date_created:{
    type: DataTypes.DATE, 
    allowNull: false,
    defaultValue:DataTypes.NOW
},
    },
);

module.exports= Post;