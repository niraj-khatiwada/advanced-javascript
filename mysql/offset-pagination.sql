-- N = 1
-- Page = 1
-- Offset formula = (page - 1) * N
SELECT
    *
FROM
    `user`
ORDER BY
    `created_at` DESC,
    `id` DESC
LIMIT
    1 OFFSET 3;