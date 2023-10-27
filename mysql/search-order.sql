-- search term is "niraj nj".
-- row with "niraj nj" must be sorted first and then the closest match should be sorted after that
-- Use sub-query inside ORDER BY FIELD to get that.
SELECT
    *
FROM
    `user`
WHERE
    user.first_name RLIKE "niraj|nj"
ORDER BY
    FIELD(
        `id`,
        (
            SELECT
                id
            FROM
                `user`
            WHERE
                user.first_name LIKE "%niraj nj%"
        )
    ) DESC;