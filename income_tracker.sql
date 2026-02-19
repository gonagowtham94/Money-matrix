CREATE DATABASE income_tracker;
USE income_tracker;
CREATE TABLE incomes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(50) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    date DATE NOT NULL
);
INSERT INTO incomes (type, amount, date) VALUES ('daily', 100.00, '2025-01-18');
INSERT INTO incomes (type, amount, date) VALUES ('weekly', 500.00, '2025-01-12');



