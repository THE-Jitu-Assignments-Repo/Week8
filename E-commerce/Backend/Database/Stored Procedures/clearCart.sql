CREATE OR ALTER PROC clearCart
AS
BEGIN
	UPDATE dbo.products SET incart=0;
END

execute clearCart
