CREATE TABLE world_food (
  	id SERIAL PRIMARY KEY,
  	country VARCHAR(45),
  	rice_production FLOAT,
	  wheat_production FLOAT
);

SELECT * FROM world_food;

-- selecting a column
SELECT <COLUMN> FROM <TABLE>;
SELECT country FROM world_food;

-- selecting multi column 
SELECT <COLUMN>, <COLUMN> FROM <TABLE>;
SELECT country, rice_production FROM world_food;

-- selecting with equals condition
SELECT <COLUMN>
FROM <TABLE>
WHERE <CONDITION>

SELECT rice_production
FROM world_food
WHERE country = 'United States';

SELECT country
FROM world_food
WHERE wheat_production > 20;

SELECT country
FROM world_food
WHERE country LIKE 'U' || '%';

SELECT country
FROM world_food
WHERE country LIKE '%a';