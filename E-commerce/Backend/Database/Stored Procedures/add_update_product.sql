CREATE OR ALTER PROC add_Update_product(@productID INT=null, @name VARCHAR(255), @description VARCHAR(255),@price INT, @imageurl VARCHAR(255), @discount int, @function VARCHAR(255))
AS
BEGIN

IF @function = 'insert'
BEGIN
	insert into products(name,description,price,imageurl,discount_rate) 
	values(@name, @description,@price, @imageurl,@discount)
END

ELSE IF @function = 'update'
BEGIN
	update products
	set name=@name, description=@description,  imageurl=@imageurl, price=@price, discount_rate=@discount
	where product_id= @productID;
END

END

-- testing


EXECUTE add_Update_product '', 'cloths', 'for men and womens', 250, 'http://gjjsk.com', 20, 'insert'; 