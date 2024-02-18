INSERT INTO <TABLE> (<COLUMN1>, <COLUMN2>) 
VALUES (<VALUE1>, <VALUE2>)


INSERT INTO world_food (<country>, <rice_production>, <wheat_production>)
VALUES (<Italy>, <1.46>, <7.3);

-- Note: No need to have <> when running query


-- TO DO:
-- 1. Create a new table using pgADmin called 'Countries'
-- 2. Import data from countries_csv
-- 3. Include a country_code CHAR(2)
-- 4. Include a country_name CHAR(100)

CREATE TABLE countries(
  	id SERIAL PRIMARY KEY,
  	country_code CHAR(2),
	country_name VARCHAR (100)
	);

  INSERT INTO world_food (country, rice_production, wheat_production)
  VALUES ('Italy', 1.46, 7.3);

  