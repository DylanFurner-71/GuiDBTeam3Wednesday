CREATE DATABASE db;

USE db;

-- Accounts
DROP TABLE IF EXISTS `Accounts`;
CREATE TABLE `Accounts` (
    `account_id` INT(10) NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(20) NOT NULL,
    `last_name` VARCHAR(20) NOT NULL, 
    `password` VARCHAR(20) NOT NULL,
    `account_type` VARCHAR(20) NOT NULL,
    `org_id` INT(10) DEFAULT NULL,
    `admin_code` VARCHAR(20) DEFAULT NULL,
    `email` VARCHAR(20) NOT NULL,
    PRIMARY KEY (`account_id`)
);

-- Restaurants 
DROP TABLE IF EXISTS `Restaurants`;
CREATE TABLE `Restaurants` (
    `restaurant_id` INT(10) NOT NULL AUTO_INCREMENT,
    `restaurant_name` VARCHAR(40) NOT NULL,
    `address_id` INT(10) NOT NULL,
    PRIMARY KEY (`restaurant_id`)
);

-- Addresses 
DROP TABLE IF EXISTS `Addresses`;
CREATE TABLE `Addresses` (
    `address_id` INT(10) NOT NULL AUTO_INCREMENT,
    `address_body` VARCHAR(20) NOT NULL,
    `city` VARCHAR(20) NOT NULL,
    `state` VARCHAR(20) NOT NULL,
    `zip` INT(10) NOT NULL,
    `country` VARCHAR(20) NOT NULL,
    `address_type` VARCHAR(20) NOT NULL,
    PRIMARY KEY (`address_id`)
);

-- Contact
DROP TABLE IF EXISTS `Contact`;
CREATE TABLE `Contact` (
    `contact_id` INT(10) NOT NULL AUTO_INCREMENT,
    `account_id` INT(10) NOT NULL,
    `phone` VARCHAR(10) NOT NULL,
    `email` VARCHAR(30) NOT NULL,
    `restaurant_id` INT(10) NOT NULL,
    PRIMARY KEY (`contact_id`)
);

-- Payment 
DROP TABLE IF EXISTS `Payment`;
CREATE TABLE `Payment` (
    `payment_id` INT(10),
    `account_id` INT(10),
    `first_name` VARCHAR(20),
    `last_name` VARCHAR(20),
    `billing_address` INT(10),
    `card_number` INT(16),
    `cvc` INT(3),
    PRIMARY KEY (`payment_id`)
);

-- Items
DROP TABLE IF EXISTS `Items`;
CREATE TABLE `Items` (
    `item_id` INT(10) AUTO_INCREMENT,
    `item_details` TEXT,
    `item_price` DOUBLE(5, 2),
    `menu_id` INT(10),
    PRIMARY KEY (`item_id`)
);

-- Menus
DROP TABLE IF EXISTS `Menus`;
CREATE TABLE `Menus` (
    `menu_id` INT(10),
    `menu_name` VARCHAR(30),
    `restaurant_id` INT(10),
    PRIMARY KEY (`menu_id`)
);

-- Reviews
DROP TABLE IF EXISTS `Reviews`;
CREATE TABLE `Reviews` (
    `review_id` INT(10),
    `restaurant_id` INT(10),
    `account_id` INT(10),
    `rating` DOUBLE(2, 1),
    `content` TEXT,
    PRIMARY KEY (`review_id`)
);

-- Orders
DROP TABLE IF EXISTS `Orders`;
CREATE TABLE `Orders` (
    `order_id` INT(10) NOT NULL AUTO_INCREMENT,
    `restaurant_id` INT(10),
    `account_id` INT(10),
    `address_id` INT(10),
    `status` VARCHAR(30),
    `total_price` DOUBLE(10),
    PRIMARY KEY (`order_id`)
);

-- OrderItems
DROP TABLE IF EXISTS `OrderItems`;
CREATE TABLE `OrderItems` (
    `order_item_id` INT(10) NOT NULL AUTO_INCREMENT,
    `order_id` INT(10),
    `name` VARCHAR(50),
    `price` DOUBLE(10),
    `quantity` INT(10),
    PRIMARY KEY (`order_item_id`)
);