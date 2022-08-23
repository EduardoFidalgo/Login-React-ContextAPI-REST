const Sequelize = require('sequelize');
const sequelize = new Sequelize('produtodb', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});


sequelize.authenticate().then(function() {
    console.log("Connected into Database")
}).catch(function(error) {
    console.log("Connection failed, error: " + error);
})