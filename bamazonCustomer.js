var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "havoc1353",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    customerInitialize();
});

function customerInitialize() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("Product Name: " + res[i].product_name + "\n" + "Product ID: " + res[i].id + "\n" + "Department: " + res[i].department_name + "\n" + "Price: $" + res[i].price + "\n" + "Stock Quantity: " + res[i].stock_quantity + "\n" + "____________" + "\n");
        }
        customerInterface()
    });
}


// function multiSearch() {
//     var query = "SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1";
//     connection.query(query, function (err, res) {
//         for (var i = 0; i < res.length; i++) {
//             console.log(res[i].artist);
//         }
//         runSearch();
//     });
// }

function customerInterface() {
    inquirer
        .prompt([
            {
                name: "id",
                type: "input",
                message: "What product ID would you like to purchase?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
        ])
        .then(function (answer) {
            var query = "SELECT product_name, department_name, price, stock_quantity FROM products WHERE ?";
            connection.query(query, { id: answer.id }, function (err, res) {
                if (err) throw err;
                var selected_product = res
                var id = answer.id
                console.log(selected_product)
                inquirer
                    .prompt([
                        {
                            name: "amount",
                            type: "input",
                            message: "How many would you like to purchase?",
                            validate: function (value) {
                                if (isNaN(value) === false) {
                                    return true;
                                }
                                return false;
                            }
                        },
                    ])
                    .then(function (answer) {
                        if (res[0].stock_quantity > answer.amount) {
                            var total_price = (parseInt(res[0].price) * parseInt(answer.amount))
                            console.log("$" + total_price + ".00")
                            var query = connection.query(
                                "UPDATE products SET ? WHERE ?",
                                [
                                    {
                                        stock_quantity: (parseInt(res[0].stock_quantity) - parseInt(answer.amount))
                                    },
                                    {
                                        id: id
                                    }
                                ],
                                function (err, res) {
                                    console.log(res.affectedRows + " products updated!\n");

                                }
                            );
                        }
                        else (
                            console.log("Stock Insufficient for Order Size")
                        )
                        customerReciept(total_price)
                    });
            });
        })
}
function customerReciept(total_price) {
    console.log("You spent a total of $" + total_price + ".00")
    inquirer
        .prompt([
            {
                type: "confirm",
                message: "Would you like to continue shopping?",
                name: "confirm",
            }
        ]).then(function (inquirerResponse) {
            if (inquirerResponse.confirm) { customerInitialize() }
            else {
                console.log("Thank You for shopping on Bamazon!!!")
                process.exit(0)
            }
        })
}