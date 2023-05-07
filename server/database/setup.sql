DROP TABLE IF EXISTS post;

CREATE TABLE post (
    post_id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR (100) NOT NULL,
    entry_date VARCHAR (100) NOT NULL,
    content VARCHAR (500) NOT NULL,
    PRIMARY KEY (post_id)
);

INSERT INTO post
    (title,entry_date,content)
VALUES
    ('A Productive Day', '2023-05-04','Today was a great day. I woke up early and hit the gym for an hour-long workout, followed by a healthy breakfast. Then, I spent the morning tackling some work tasks and checking off a few items from my to-do list.'),
    ('A Special Moment','2023-02-15', 'I spent the afternoon lounging in the sun and talking about our plans for the future. It was such a simple but meaningful gesture that made me feel so loved.' );

