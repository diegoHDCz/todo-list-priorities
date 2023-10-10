CREATE TABLE todo(
   id SERIAL PRIMARY KEY,
      title VARCHAR(100),
      description TEXT,
      assignee VARCHAR(100),
      priority INT,
      deadline DATE
)