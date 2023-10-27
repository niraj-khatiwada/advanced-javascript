-- conditional join
-- Do left join and apply case statement for condition
-- Example includes notification
-- Join to user table only when notification_type = 1 otherwise don't join.
SELECT
    *
FROM
    `notification`
    LEFT JOIN user ON notification.user_id = user.id
WHERE
    (
        CASE
            WHEN notification.type = 1 THEN user.id IS NOT NULL
            ELSE TRUE
        END
    );