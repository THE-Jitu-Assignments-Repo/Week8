/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [id]
      ,[name]
      ,[email]
      ,[age]
  FROM [nodeDatabase].[dbo].[nodeT1]


  CREATE TABLE  USerTable (
  id INT IDENTITY,
  email VARCHAR(100) UNIQUE ,
  password VARCHAR(200)
  )


  DROP TABLE USerTable
  CREATE PROC insertUser(@email VARCHAR(100) ,@password VARCHAR(200))
  AS
  BEGIN
  INSERT INTO USerTable(email,password) VALUES(@email,@password)
  END

  CREATE PROC getEmail(@email VARCHAR(100))
  AS
  BEGIN
  SELECT * FROM USerTable WHERE email=@email
  END


  use E_Commerce
  GO

  CREATE TABLE products(
	product_id VARCHAR(255),
	name VARCHAR(255) NOT NULL,
	description VARCHAR(255),
	price INT NOT NULL,
	imageurl VARCHAR(255) NOT NULL,
	discount_rate INT,
	quantity int DEFAULT 1,
	incart int null DEFAULT 0,
	Deleted int null DEFAULT 0
  )


DROP TABLE products;


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




EXECUTE addUpdateProduct '743de51b-2ffc-426a-bcb1-9af5a0c89bf1','mike miller', 'for men and womens', 200, 'https://jfnjsd.com', 60; 

select * from products;

CREATE or ALTER PROC getproducts
AS
BEGIN
	SELECT * FROM products;
END

execute getproducts;


CREATE PROCEDURE getSingleProduct(@id AS VARCHAR(255))
AS
BEGIN

	SELECT * FROM dbo.products WHERE product_id=@id;
END

execute getSingleProduct '07160d2f-785d-40d7-ab4c-9527b27f0980';



CREATE OR ALTER PROC addOrRemoveToCart(@id varchar(255))
AS
BEGIN
IF EXISTS (select * from dbo.products where product_id=@id and incart=1)
	UPDATE dbo.products set incart= 0, quantity = 1 where product_id=@id;
ELSE
	UPDATE dbo.products set incart= 1 where product_id=@id;
END


execute addOrRemoveToCart '743de51b-2ffc-426a-bcb1-9af5a0c89bf1'


CREATE OR  ALTER PROC incQuantity(@id VARCHAR(255))
AS
BEGIN
	UPDATE dbo.products SET quantity= quantity + 1 WHERE product_id= @id;
END

execute incQuantity '743de51b-2ffc-426a-bcb1-9af5a0c89bf1'



CREATE OR  ALTER PROC decQuantity(@id VARCHAR(255))
AS
BEGIN
IF EXISTS(SELECT * FROM  dbo.products WHERE product_id = @id and quantity > 1)
	UPDATE dbo.products SET quantity= quantity - 1 WHERE product_id= @id;
END

execute decQuantity '743de51b-2ffc-426a-bcb1-9af5a0c89bf1'


CREATE OR ALTER PROC clearCart
AS
BEGIN
	UPDATE dbo.products SET incart=0;
END

execute clearCart


execute getproducts;


CREATE OR ALTER PROC getAllCart
AS
BEGIN
	SELECT * FROM dbo.products WHERE incart= 1;
END

execute getAllCart


CREATE TABLE usersTable(
	id VARCHAR(255),
	userName VARCHAR(255) NOT NULL,
	email VARCHAR(255) UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL,
	isSent INT DEFAULT 0
)

DROP TABLE usersTable

select * from usersTable;

CREATE OR ALTER PROCEDURE registerUser(
		@id AS VARCHAR(255),
		@name AS VARCHAR(255),
		@email AS VARCHAR(255),
		@password AS VARCHAR(255)
)
AS
BEGIN
	INSERT INTO dbo.usersTable(id, userName, email, password) VALUES(@id, @name, @email, @password);
END

execute registerUser 'vsvgsdyy7', 'kamal miller', 'mikeykamau222+test1@gmail.com', '12345'

CREATE OR ALTER PROC getUsers(@email AS VARCHAR(255))
AS
BEGIN
	SELECT * FROM dbo.usersTable WHERE email=@email;
END

execute getUsers 'millercamal@gmail.com'


CREATE OR ALTER PROC updateSent(@id VARCHAR(255))
AS
BEGIN
	UPDATE dbo.usersTable SET isSent=1 WHERE id = @id;
END


CREATE OR ALTER PROC getUsersToSentEmail
AS
BEGIN
	SELECT * FROM dbo.usersTable WHERE isSent = 0;
END

