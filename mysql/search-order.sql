SELECT
    *
FROM
    `user`
WHERE
    user.name RLIKE "niraj|khatiwada"
ORDER BY
    FIELD(
        `id`,
        (
            SELECT
                id
            FROM
                user
            WHERE
                user.name LIKE "%niraj-khatiwada%"
        )
    ) DESC;