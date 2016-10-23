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
});

var start = function() {
    inquirer.prompt({
        name: "WhereTo",
        type: "checkbox",
        message: "What department do you need?",
        choices: ["Pets", "Electronics", "Mens", "Womens"]
            // }).then(function(answer) {
            //     connection.query("SELECT * FROM products WHERE pets=?", {
            //         productName: answer.products,
            //         departmentName: answer.dept,
            //         price: answer.price,
            //         stockQuantity: answer.qty,
            // }, 
            // 
           }) .then(function(answer) {
                    switch (answer) {
                        case 'Pets':
                            petProducts();
                            break;

                        case 'Electronics':
                            electronicProducts();
                            break;

                        case 'Mens':
                            menProducts();
                            break;

                        case 'Womens':
                            womenProducts();
                            break;
                    }
                }).then (function (err, res) {
                    console.log("Loading...");
                    console.log("----------------------------------------------------------------");
                    // start();
                });
    };



var petProducts = function() {
    inquirer.prompt([{
        name: "items",
        type: "checkbox",
        message: "What would you like?",
        choices: function(value) {
            var choiceArray = [];
            for (var i = 0; i < res.length; i++) {
                choiceArray.push(res[i].pets);
            }
            return choiceArray;
        },
        message: "How many?"
    }]).then(function(answer) {
        for (var i = 0; i < res.length; i++) {
            if (res[i].product == answer.dept) {
                var product = res[i];
                inquirer.prompt({
                    name: "sure",
                    type: "input",
                    message: "You want " + product + " ?",
                }).then(function(answer) {
                    if (answer.product < parseInt(answer.product)) {
                        connection.query("UPDATE auctions SET ? WHERE ?", [{
                            qty: answer.product
                        }, {
                            id: product.id
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