CREATE PROC getproducts
AS
BEGIN
	SELECT * FROM products;
END

execute getproducts;