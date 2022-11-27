CREATE OR ALTER PROCEDURE registerUser(
		@id AS VARCHAR(255),
		@name AS VARCHAR(255),
		@email AS VARCHAR(255),
		@password AS VARCHAR(255)
)
AS
BEGIN
	INSERT INTO dbo.usersTable(id, userName, email, password) VALUES(@id, @name, @email, @password);
END