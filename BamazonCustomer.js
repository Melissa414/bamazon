var mysql = require("mysql");
var inquirer = require("inquirer");

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
        type: "list",
        message: "What department do you need?",
        choices: ["Pets", "Electronics", "Mens", "Womens"]
    }).then(function(answer) {
        console.log(answer.WhereTo)
        switch (answer.WhereTo) {
            case "Pets":
                petProducts();
                break;

            case "Electronics":
                electronicProducts();
                break;

            case "Mens":
                menProducts();
                break;

            case "Womens":
                womenProducts();
                break;
        }
    })
};



var petProducts = function(res) {
    // var choiceArray = ["choice"];
    inquirer.prompt([{
        name: "items",
        type: "list",
        message: "What would you like?",
        choices: ["temptations treats: $3.99 ", "misc mic: $0.99", "leash: $9.49"]
    }]).then(function(){
    inquirer.prompt([{
        name: "qty",
        type: "input",
        message: "How many?",
    }]).then(function() {
            if (res[i].product == product) {
                var product = res[i];
                inquirer.prompt({
                    name: "confirm",
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
                        console.log("Insufficient quantity!");
                        start();
                    }
                })
            }
    });
});
}
var electronicProducts = function(res) {
    var choiceArray = ["choice"];
    inquirer.prompt([{
        name: "items",
        type: "list",
        message: "What would you like?",
        choices: ["macbook air: $999.99", "6in flatscreen: $1099.99"]
    }]).then(function(){
    inquirer.prompt([{
        name: "qty",
        type: "input",
        message: "How many?",
    }]).then(function() {
            if (res[i].product == answer.dept) {
                var product = res[i];
                inquirer.prompt({
                    name: "confirm",
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
                        console.log("Insufficient quantity!");
                        start();
                    }
                })
            }
    });
});
}
var menProducts = function(res) {
    var choiceArray = ["choice"];
    inquirer.prompt([{
        name: "items",
        type: "list",
        message: "What would you like?",
        choices: ["black t-shirt: $19.99", "wrangler jeans: $29.99", "classic plaid t-shirt: $36.94"]
    }]).then(function(){
    inquirer.prompt([{
        name: "qty",
        type: "input",
        message: "How many?",
    }]).then(function() {
            if (res[i].product == answer.dept) {
                var product = res[i];
                inquirer.prompt({
                    name: "confirm",
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
                        console.log("Insufficient quantity!");
                        start();
                    }
                })
            }
    });
});
}
var womenProducts = function(res) {
    var choiceArray = ["choice"];
    inquirer.prompt([{
        name: "items",
        type: "list",
        message: "What would you like?",
        choices: ["white v-neck t-shirt: $25.94", "army green skinny jeans: $40.99", "sweater dress: $37.94"]
    }]).then(function(){
    inquirer.prompt([{
        name: "qty",
        type: "input",
        message: "How many?",
    }]).then(function() {
        // for (var i = 0; i < res.length; i++) {
            if (res[i].product == answer.dept) {
                var product = res[i];
                inquirer.prompt({
                    name: "confirm",
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
                        console.log("Insufficient quantity!");
                        start();
                    }
                })
            }
    });
    start();
});
}