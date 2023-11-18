ALTER TABLE
    credential
ADD
    COLUMN user_id INT;

ALTER TABLE
    credential
ADD
    CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES user(id);