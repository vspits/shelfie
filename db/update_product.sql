update products
set product_name = $2
where product_id = $1;

update products
set product_price = $3
where product_id = $1;

update products
set image_url = $4
where product_id = $1;