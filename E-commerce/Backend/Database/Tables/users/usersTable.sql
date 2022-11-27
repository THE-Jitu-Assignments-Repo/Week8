CREATE TABLE usersTable(
	id VARCHAR(255),
	userName VARCHAR(255),
	email VARCHAR(255) UNIQUE,
	password VARCHAR(255),
	isSent INT DEFAULT 0
)