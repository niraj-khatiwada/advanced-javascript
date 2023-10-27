SELECT
    MIN(highest.credential_id)
FROM
    (
        SELECT
            credential_id
        FROM
            `user`
        ORDER BY
            credential_id DESC
        LIMIT
            2
    ) AS `highest`;