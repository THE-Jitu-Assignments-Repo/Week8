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
	update dbo.products
	set name=@name, description=@description,  imageurl=@imageurl, price=@price, discount_rate=@discount where product_id=@productID;
ELSE
	insert into [dbo].[products](product_id,name,description,price,imageurl,discount_rate) 
	values(@productID,@name, @description,@price, @imageurl,@discount)
END




EXECUTE addUpdateProduct '743de51b-2ffc-426a-bcb1-9af5a0c89bf1','john', 'for men and womens', 200, 'https://jfnjsd.com', 60; 

