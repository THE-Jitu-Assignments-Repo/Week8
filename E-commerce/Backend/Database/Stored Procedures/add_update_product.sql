CREATE OR ALTER PROCEDURE addUpdateProduct(
		@productID AS VARCHAR(255), 
		@name AS VARCHAR(255),
		@description AS VARCHAR(255),
		@price AS INT,
		@imageurl AS VARCHAR(255),
		@discount AS int)
AS
BEGIN
IF EXISTS(select * from dbo.products where product_id = @productID)
--BEGIN
	update dbo.products
	set name=@name, description=@description,  imageurl=@imageurl, price=@price, discount_rate=@discount where product_id=@productID;
--END
ELSE
--BEGIN

	insert into [dbo].[products](product_id,name,description,price,imageurl,discount_rate) 
	values(@productID,@name, @description,@price, @imageurl,@discount)
--END
END

