CREATE OR ALTER PROC addOrRemoveToCart(@id varchar(255))
AS
BEGIN
IF EXISTS (select * from dbo.products where product_id=@id and incart=1)
	UPDATE dbo.products set incart= 0, quantity = 1 where product_id=@id;
ELSE
	UPDATE dbo.products set incart= 1 where product_id=@id;
END


execute addOrRemoveToCart '743de51b-2ffc-426a-bcb1-9af5a0c89bf1'