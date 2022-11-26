CREATE OR  ALTER PROC decQuantity(@id VARCHAR(255))
AS
BEGIN
IF EXISTS(SELECT * FROM  dbo.products WHERE product_id = @id and quantity > 1)
	UPDATE dbo.products SET quantity= quantity - 1 WHERE product_id= @id;
END

execute decQuantity '743de51b-2ffc-426a-bcb1-9af5a0c89bf1'