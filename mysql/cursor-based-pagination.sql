SELECT
    *
FROM
    `user`
WHERE
    createdAt <= "2023-10-11 04:34:47.312"
    AND (
        createdAt < "2023-10-11 04:34:47.312"
        OR id < 11
    )
ORDER BY
    createdAt DESC,
    id DESC
LIMIT
    2;