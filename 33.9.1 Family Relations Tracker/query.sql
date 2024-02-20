-- One to One 
-- DRAW.IO for database design 


CREATE TABLE student (
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT
);

CREATE TABLE contact_details (
  id INTEGER REFERENCES student(id) UNIQUE, 
  tel TEXT,
  address TEXT
);