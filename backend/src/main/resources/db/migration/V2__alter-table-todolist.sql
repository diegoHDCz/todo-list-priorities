ALTER TABLE todo
ALTER COLUMN priority TYPE VARCHAR(50);

ALTER TABLE todo
ADD COLUMN active BOOLEAN;