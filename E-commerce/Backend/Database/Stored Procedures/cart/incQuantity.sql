CREATE OR  ALTER PROC incQuantity(@id VARCHAR(255))
AS
BEGIN
	UPDATE dbo.products SET quantity= quantity + 1 WHERE product_id= @id;
END

execute incQuantity '743de51b-2ffc-426a-bcb1-9af5a0c89bf1'