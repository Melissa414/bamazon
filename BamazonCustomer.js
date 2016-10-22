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
    start();
})
var start = function() {
    inquirer.prompt({
        name: "WhereTo",
        type: "checkbox",
        message: "What department do you need?",
        choices: ["Pets", "Electronics", "Mens", "Womens"]

    }).then(function(answer) {
        if (answer.WhereTo.toUpperCase() === "Pets") {
            postPets();
        }
        if (answer.WhereTo.toUpperCase() === "Electronics") {
            postElectronics();
        }
        if (answer.WhereTo.toUpperCase() === "Mens") {
            postMens();
        }
        if (answer.WhereTo.toUpperCase() === "Womens") {
            postWomens();
        } else {
            throw err;
        }
    }).then(function(answer) {
        connection.query("INSERT INTO auctions SET ?", {
            productName: answer.product,
            departmentName: answer.dept,
            price: answer.price,
            stockQuantity: answer.qty,
        }, function(err, res) {
            // console.log("Your auction was created successfully!");
            start();
        });
    })
}


var petProducts = function() {
    inquirer.prompt([{
        name: "items",
        type: "checkbox",
        message: "What would you like?",
        choices: function(value) {
            var choiceArray = [];
            for (var i = 0; i < res.length; i++) {
                choiceArray.push(res[i].products);
            }
            return choiceArray;
        },
        message: "How many?"
    }]).then(function(answer) {
        for (var i = 0; i < res.length; i++) {
            if (res[i].itemname == answer.choice) {
                var chosenItem = res[i];
                inquirer.prompt({
                    name: "sure",
                    type: "input",
                    message: "You want " + chosenItem + " ?",
                }).then(function(answer) {
                    if (chosenItem.pets < parseInt(answer.item)) {
                        connection.query("UPDATE auctions SET ? WHERE ?", [{
                            qty: answer.product
                        }, {
                            id: chosenItem.id
                        }], function(err, res) {
                            console.log("Your order was successfull!");
                            start();
                        });
                    } else {
                        console.log("We are currently out of stock on that item, sorry!");
                        start();
                    }
                })
            }
        }
    })
}