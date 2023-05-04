DROP TABLE IF EXISTS post;

CREATE TABLE post (
    post_id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR (100) NOT NULL,
    entry_date DATE NOT NULL,
    content VARCHAR (500) NOT NULL,
    PRIMARY KEY (post_id)
);

INSERT INTO post
    (title,entry_date,content)
VALUES
    ('Test', '1995-07-30','Welcome to your first diary entry'),
    ('Test','2001-03-15', 'Filler post 1'),
    ('Test', '2023-01-20','Filler post 2');
