const {Model, DataTypes} = require('sequelize');
const sequelize =require('../config/connection')

class User extends Model {}

User.init(
    {
id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement: true,
},
username:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
},
Passsword:{
    type: DataTypes.STRING,
    allowNull: false,
    Validate:{
        len: [8],
    },
},
    },

{
hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
          },
          beforeUpdate: async (updatedUserData) => {
            updatedUserData.password = await bcrypt.hash(
              updatedUserData.password,
              10
            );
            return updatedUserData;
          },
        },

},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
},
);

module.exports = User; 