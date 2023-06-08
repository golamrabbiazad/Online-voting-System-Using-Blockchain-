-- Create the database
CREATE DATABASE IF NOT EXISTS razib_db;

-- Use the database
USE razib_db;

-- Drop the table if it exists
DROP TABLE IF EXISTS registration, nid_info, registered_users;

CREATE TABLE registration(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
    email_address VARCHAR(255) NOT NULL UNIQUE,
    gender varchar(50), 
    password VARCHAR(255) NOT NULL,
    confirm_password VARCHAR(255) NOT NULL
);

-- Create an index on the email_address column
create index idx_email_address ON registration (email_address);

create table nid_info(
    id => int primary key
    name => varchar
    nid_card_number => varchar
    email_address => varchar+ unique
    phone_number => varchar
    gender => varchar
    date_of_birth => timestamp/ varchar
    is_registered => varchar
)

create table registered_users(
    account_address => varchar
    nidno => varchar
)
