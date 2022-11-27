CREATE PROCEDURE getSingleProduct(@id AS VARCHAR(255))
AS
BEGIN

	SELECT * FROM dbo.products WHERE product_id=@id;
END

execute getSingleProduct '07160d2f-785d-40d7-ab4c-9527b27f0980';