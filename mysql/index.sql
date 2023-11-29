CREATE INDEX first_name_idx ON user(first_name);

SHOW INDEX
FROM
    user;

ALTER TABLE
    user DROP INDEX first_name_idx;