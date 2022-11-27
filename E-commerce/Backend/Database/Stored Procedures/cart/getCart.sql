CREATE OR ALTER PROC getAllCart
AS
BEGIN
	SELECT * FROM dbo.products WHERE incart= 1;
END

execute getAllCart