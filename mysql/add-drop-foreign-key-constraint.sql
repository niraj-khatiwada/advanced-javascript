DESCRIBE user;

ALTER TABLE
    user
ADD
    COLUMN credential_id_2 INT;

ALTER TABLE
    user
ADD
    CONSTRAINT `fk_credential_id_2` FOREIGN KEY(credential_id_2) REFERENCES credential(id);