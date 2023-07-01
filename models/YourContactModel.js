const { DataTypes } = require("sequelize");
// const { sequelize } = require("../config/sequelized");

module.exports = (sequelize , DataTypes) => {
    const YourContact = sequelize.define('YourContact' ,{
        id :{
            type:DataTypes.INTEGER,
            primaryKey: true
        },
        userId : {
            type:DataTypes.INTEGER
        },
        contactListId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        
    })

    return YourContact;
}