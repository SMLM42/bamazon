-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS bamazon;
-- Create a database called bamazon --
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products
(
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100),
  department_name VARCHAR(100),
  price INTEGER(11),
  stock_quantity INTEGER(11),
  PRIMARY KEY
  (id)
);

INSERT INTO products
  (product_name, department_name, price, stock_quantity)
VALUES
  ("pen", "office_supplies", 5, 5000);

INSERT INTO products
  (product_name, department_name, price,stock_quantity)
VALUES
  ("pencil", "office_supplies", 3, 5000);

INSERT INTO products
  (product_name, department_name, price,stock_quantity)
VALUES
  ("paper clips", "office_supplies", 4, 10000);

INSERT INTO products
  (product_name, department_name, price,stock_quantity)
VALUES
  ("Ork Boys", "Warhammer 40k", 35, 50);

INSERT INTO products
  (product_name, department_name, price,stock_quantity)
VALUES
  ("Chaos Space Marines", "Warhammer 40k", 59, 50);

INSERT INTO products
  (product_name, department_name, price,stock_quantity)
VALUES
  ("Corsair M65 Pro Gaming Mouse", "Computer Supplies", 29, 100);

INSERT INTO products
  (product_name, department_name, price,stock_quantity)
VALUES
  ("Corsair K95 Platinum Gaming Keyboard", "Computer Supplies", 109, 120);

INSERT INTO products
  (product_name, department_name, price,stock_quantity)
VALUES
  ("Lenovo POS Laptop", "Computer Supplies", 1, 10000);

INSERT INTO products
  (product_name, department_name, price,stock_quantity)
VALUES
  ("Kiehl's Amino Acid Shampoo", "Hair Care", 38, 777);

INSERT INTO products
  (product_name, department_name, price,stock_quantity)
VALUES
  ("Fallout 76", "Gaming", 20, 100000);
