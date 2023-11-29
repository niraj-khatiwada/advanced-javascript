WITH a AS (
    SELECT
        *
    FROM
        user
    ORDER BY
        id DESC
    LIMIT
        2
)
SELECT
    *
FROM
    a
ORDER BY
    id ASC
LIMIT
    1;