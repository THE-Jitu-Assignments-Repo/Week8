CREATE OR ALTER PROC getUsers(@email AS VARCHAR(255))
AS
BEGIN
	SELECT * FROM dbo.usersTable WHERE email=@email;
END

execute getUsers 'millercamal@gmail.com'