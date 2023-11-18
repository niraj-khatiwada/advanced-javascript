-- Add
ALTER TABLE
    credential
ADD
    CONSTRAINT email UNIQUE(email);

-- DROP
ALTER TABLE
    credential DROP CONSTRAINT email;

-- To find the constraint name while dropping do this step.
SHOW INDEX
FROM
    credential;

-- And see for column_name = "email" and Non_unique = 0;