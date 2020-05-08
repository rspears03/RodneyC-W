DROP DATABASE IF EXISTS Food;

CREATE DATABASE Food;

USE Food;

CREATE TABLE Chicken(
    item_id INT(1) AUTO_INCREMENT PRIMARY KEY NOT NULL, 
    title VARCHAR(100),
    photo VARCHAR(255),
    descr VARCHAR(255)
);
-- CREATE TABLE Waffle(
--     item_id INT PRIMARY KEY IDENTITY,
--     description VARCHAR(200),
-- );

-- CREATE TABLE ChickenAndWaffle(
--     item_id INT PRIMARY KEY IDENTITY,
--     description VARCHAR(200),
-- );
