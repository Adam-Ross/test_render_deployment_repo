DROP TABLE IF EXISTS tasks;

CREATE TABLE todos (
  id SERIAL,
  description TEXT
);

INSERT INTO todos(description) VALUES('Call mom');
INSERT INTO todos(description) VALUES('Make dinner');
INSERT INTO todos(description) VALUES('Wash dishes');
INSERT INTO todos(description) VALUES('Read a book');
INSERT INTO todos(description) VALUES('Go to sleep');