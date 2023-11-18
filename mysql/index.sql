SHOW INDEX
FROM
    user;

-- Create Index
CREATE INDEX name_idx ON user(`name`);

SHOW INDEX
FROM
    user;

-- Drop Index
ALTER TABLE
    user DROP INDEX name_idx;