const dbconfig = require("../config/dbconfig");

const {Sequelize , DataTypes} = require("sequelize");


const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.User,
    dbconfig.Password,
    {
        host : dbconfig.Host,
        dialect : dbconfig.dialect,
        operatorsAliases : false,

        pool : {
            max : dbconfig.pool.max,
            min : dbconfig.pool.min
        }
    }
)


sequelize.authenticate()
.then(()=>{
    console.log('connected...')
})
.catch((err)=>{
    console.log("Error" , err);
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.ContactListNew = require("./ContactListModel.js")(sequelize , DataTypes);
db.User = require("./UserModel.js")(sequelize ,DataTypes);
db.YourContact = require("./YourContactModel")(sequelize ,DataTypes);



db.sequelize.sync({force : false})
.then(()=>{
    console.log("Yes re-sync is Done");
})
.catch((err) => {
    console.log("Error ",err);
})

module.exports = db;