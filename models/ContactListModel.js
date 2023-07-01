const { DataTypes } = require("sequelize");
// const { sequelize } = require("../config/sequelized");

module.exports = (sequelize , DataTypes) => {
    const ContactListNew = sequelize.define('ContactListNew' ,{
        name : {
            type:DataTypes.STRING
        },
        number :{
            type : DataTypes.BIGINT,
            allowNull : false
        },
        email : {
            type : DataTypes.STRING
        },
        spam : {
            type : DataTypes.INTEGER,
            defaultValue : 0
        },
        status : {
            type : DataTypes.BOOLEAN,
            defaultValue : false
        },
        ContactList :{
            type : DataTypes.INTEGER

        }
        
    })

    return ContactListNew;
}