CREATE OR ALTER PROC getUsersToSentEmail
AS
BEGIN
	SELECT * FROM dbo.usersTable WHERE isSent = 0;
END