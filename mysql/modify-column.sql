-- Modify data type of column
-- Remove or add not null constraint
ALTER TABLE
    user
MODIFY
    COLUMN credential_id INT;

ALTER TABLE
    user
MODIFY
    COLUMN credential_id INT NOT NULL;

ALTER TABLE
    user
MODIFY
    COLUMN credential_id INT UNIQUE;