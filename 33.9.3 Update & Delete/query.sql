ALTER TABLE contact_detail 
ADD email TEXT


CREATE TABLE example (
  a integer,
  b integer,
  c integer,
  UNIQUE (a, c)
);

-- Answer
ALTER TABLE visited_countries
ADD UNIQUE(user_id, country_code)


-- Making another insert 
INSERT INTO visited_countries (user_id, country_code)
VALUES (1, 'FR')


-- Drop Table
DROP TABLE <NAME OF TABLE> 

UPDATE <TABLE TO UPDATE>
SET <COLUMN TO UPDATE> = value, .. 
WHERE <SOME CONDITION>; 

-- Example Answer
UPDATE users 
  SET name = 'Angelina'
  WHERE id = 1


-- Order By
SELECT * 
FROM <SOME TABLE>
ORDER BY <SOME CONDITION>;

-- Example
SELECT *
FROM users
ORDER BY id ASC; -- can do DESC 


DELETE FROM <TABLE TO DELETE>
WHERE <SOME CONDITION>;

DELETE FROM visited_countries
WHERE id = 4
