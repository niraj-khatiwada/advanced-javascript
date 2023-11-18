SET
    autocommit = 0;

START TRANSACTION;

SELECT
    *
FROM
    user
WHERE
    id = 1 FOR
UPDATE
;

UPDATE
    user
SET
    name = "Niraj"
WHERE
    id = 1;

COMMIT;

SET
    autocommit = 1;