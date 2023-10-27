-- column logic
SELECT
    *,
    (
        CASE
            WHEN (user.credential_id % 2) = 0 THEN "even"
            ELSE "odd"
        END
    ) AS `evenOrOdd`
FROM
    user;

-- where logic
SELECT
    *
FROM
    `user`
    LEFT JOIN credential ON user.credential_id = credential.id
WHERE
    (
        CASE
            WHEN user.credential_id IS NOT NULL THEN credential.id IS NOT NULL
            ELSE TRUE
        END
    );