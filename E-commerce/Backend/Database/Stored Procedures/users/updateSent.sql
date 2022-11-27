CREATE OR ALTER PROC updateSent(@id VARCHAR(255))
AS
BEGIN
	UPDATE dbo.usersTable SET isSent=1 WHERE id = @id;
END