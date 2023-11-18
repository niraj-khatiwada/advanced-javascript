-- Computed column
SELECT
    *,
    (
        CASE
            WHEN notification.id % 2 = 0 THEN "EVEN"
            ELSE "ODD"
        END
    ) AS `even_odd`
FROM
    notification;

-- Conditional Inner Join
SELECT
    *
FROM
    notification
    LEFT JOIN user ON notification.user_id = user.id
    LEFT JOIN post ON notification.post_id = post.id
WHERE
    type IN (1, 5)
    AND (
        CASE
            WHEN notification.type = 1 THEN (
                post.id IS NOT NUll
                AND user.id IS NOT NUll
            )
            WHEN notification.type = 5 THEN (user.id IS NOT NULL)
            ELSE TRUE
        END
    );