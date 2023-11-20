SELECT
    (
        CASE
            WHEN id % 2 = 0 THEN "EVEN"
            ELSE "ODD"
        END
    ) AS `even_odd`
FROM
    user
WHERE
    id > 3
GROUP BY
    `even_odd`
HAVING