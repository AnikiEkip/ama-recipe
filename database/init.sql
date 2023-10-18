CREATE DATABASE IF NOT EXISTS ama_recipe;

USE ama_recipe;

CREATE TABLE IF NOT EXISTS recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    ingredients JSON,
    instructions TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO recipes (name, description, ingredients, instructions) VALUES
(
    '4x4 for 4',
    'A delicious meal for four people',
    '["Ingredient 1", "Ingredient 2", "Ingredient 3", "Ingredient 4"]',
    'Step 1: Do this. Step 2: Do that. Step 3: Serve hot.'
);