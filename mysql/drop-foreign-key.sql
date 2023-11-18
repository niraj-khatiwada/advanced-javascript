-- Before we drop foreign key column, we need to drop foreign key constraint
-- Look for fk_...
SHOW INDEX
FROM
    credential;

ALTER TABLE
    credential DROP CONSTRAINT fk_user_id;

ALTER TABLE
    credential DROP COLUMN user_id;