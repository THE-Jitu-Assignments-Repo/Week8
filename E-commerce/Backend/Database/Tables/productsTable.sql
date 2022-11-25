  CREATE TABLE products(
	product_id INT IDENTITY,
	name VARCHAR(255) NOT NULL,
	description VARCHAR(255),
	price INT NOT NULL,
	imageurl VARCHAR(255) NOT NULL,
	discount_rate INT
  )


DROP TABLE products;

SELECT * FROM products;