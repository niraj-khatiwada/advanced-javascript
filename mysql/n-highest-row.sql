-- Insert n in place of 3 below
WITH limits AS (
    SELECT
        *
    FROM
        `user`
    ORDER BY
        id DESC
    LIMIT
        3
)
SELECT
    *
FROM
    limits
ORDER BY
    id ASC
LIMIT
    1;