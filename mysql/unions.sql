-- This is an example of full outer join in MySQL
SELECT
    *
FROM
    user
    LEFT JOIN credential ON user.credential_id = credential.id
UNION
SELECT
    *
FROM
    `user`
    RIGHT JOIN credential ON user.credential_id = credential.id;

-- Rules of union
-- Number of columns of two tables must be same
-- Data types of columns of two tables must be same
-- Column orders in two tables must be same