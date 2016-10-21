var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "bamazon"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // start();
})
var start = function(){
    inquirer.prompt({
          name: "WhereTo",
          type: "rawlist",
          message: "What department do you need?",
          choices: ["Pets", "Electronics", "Mens", "Womens"]

    }).then(function(answer){
          if(answer.WhereTo.toUpperCase() === "Pets"){
            postPets();
          }
          if(answer == "Electronics"){
            postElectronics();
          }
          if(answer == "Mens"){
            postMens();
          }
          if(answer == "Womens"){
            postWomens();
          } else {
            console.log("Please pick a department.")
          }
    })
}