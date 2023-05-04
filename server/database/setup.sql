DROP TABLE IF EXISTS post;

CREATE TABLE post (
    post_id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR (100) NOT NULL,
    entry_date DATE DEFAULT CURRENT_DATE NOT NULL,
    content VARCHAR (500) NOT NULL,
    PRIMARY KEY (post_id)
);

INSERT INTO post
    (title,content)
VALUES
    ('Test', 'Welcome to your first diary entry'),
    ('Test', 'Filler post 1'),
    ('Test', 'Filler post 2');
