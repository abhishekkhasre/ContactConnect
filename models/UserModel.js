const { DataTypes } = require("sequelize");
// const { sequelize } = require("../config/sequelized");

module.exports = (sequelize , DataTypes) => {
    const User = sequelize.define('user' ,{
        name : {
            type:DataTypes.STRING
        },
        number :{
            type: DataTypes.BIGINT,
            // allowNull: false,
        },
        email : {
            type : DataTypes.STRING
        },
        password : {
            type : DataTypes.INTEGER,
            defaultValue : 0
        },
        status : {
            type : DataTypes.BOOLEAN
        }
        
    })

    return User;
}