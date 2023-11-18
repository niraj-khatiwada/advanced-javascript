SET
    autocommit = 0;

START TRANSACTION;

DELETE FROM
    credential
WHERE
    id = 1;

SELECT
    *
FROM
    credential;

ROLLBACK;

COMMIT;

SET
    autocommit = 1;