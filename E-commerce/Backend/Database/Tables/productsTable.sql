 CREATE TABLE products(
	product_id VARCHAR(255),
	name VARCHAR(255) NOT NULL,
	description VARCHAR(255),
	price INT NOT NULL,
	imageurl VARCHAR(255) NOT NULL,
	discount_rate INT,
	Deleted int null DEFAULT 0
  )


DROP TABLE products;
SELECT * FROM products;