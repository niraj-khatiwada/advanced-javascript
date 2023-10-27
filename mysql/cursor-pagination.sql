-- cursor is id and created_at
SELECT
    *
FROM
    `user`
WHERE
    `created_at` <= "2023-10-26 13:16:15"
    AND (
        `created_at` < "2023-10-26 13:16:15"
        OR `id` < 2
    )
ORDER BY
    `created_at` DESC,
    `id` DESC
LIMIT
    1;