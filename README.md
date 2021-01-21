# MMA-Backend

base url: not deployed yet

This is a rest API created with NodeJS/Express, and PostgreSQL

## Products


#### GET ALL PRODUCTS


**URL** : `/products`

**METHOD** : `GET`

### Sucess Response(200)

**Content examples**

User should receive a list of all the products in the database.

*Some product Images may have more than one source, if not, value is set to NULL*


```json 
[
    {
        "product_id": 1,
        "name": "Venum Elite Boxing Gloves - Khaki/Black",
        "price": "79.99",
        "type": "gloves",
        "product_for": "unisex",
        "description": "The triple density foam balances the shock, improving you as a fighter without the stress on your arms during impacts. The unique design and brand new colors are fit for all the fighters, no matter their level. The reinforced seams and mesh panels combined with their ergonomic shape will bring you a comfortable fit and feel as if you are truly one with the glove.",
        "brand": "venum",
        "image": "https://cdn.shopify.com/s/files/1/0264/2218/1937/products/BG_ELITE_KHAKI_BLACK_HD_01_800x.jpg?v=1599645180",
        "image_2": "https://cdn.shopify.com/s/files/1/0264/2218/1937/products/BG_ELITE_KHAKI_BLACK_HD_02_800x.jpg?v=1599645180",
        "image_3": null,
        "color": "#45421f"
    },
    {
        "product_id": 2,
        "name": "Venum Defender Hybrid Compression Short - Black/Green",
        "price": "49.99",
        "type": "shorts",
        "product_for": "women",
        "description": "The Venum Defender 2.0 Hybrid Compression Shorts are an innovative product, combining the elegance of smaller shorts and the comfort and support of compression. Large side slits allow freedom of movement, while the upper thighs are permanently covered by the compression design.",
        "brand": "venum",
        "image": "https://cdn.shopify.com/s/files/1/0264/2218/1937/products/8_252F0_252Fe_252F7_252F80e7f31ca7cdfb495c3c10255127d27f7e5938cc_HYBRID_COMPRESSION_SHORT_DEFENDER_BLACK_GREEN_SD_01__1_e0834bf7-179e-46a2-8259-5541eb659195_800x.jpg?v=1595601307",
        "image_2": "https://cdn.shopify.com/s/files/1/0264/2218/1937/products/b_252F6_252F9_252F8_252Fb6981dc26083de8a9adb7f8b4d8c53872bebe028_HYBRID_COMPRESSION_SHORT_DEFENDER_BLACK_GREEN_SD_04_800x.jpg?v=1595601283",
        "image_3": "https://cdn.shopify.com/s/files/1/0264/2218/1937/products/c_252Fd_252F4_252Fb_252Fcd4b6598f90e44b9a76ccc723c4539c0b8cc063f_HYBRID_COMPRESSION_SHORT_DEFENDER_BLACK_GREEN_SD_02_800x.jpg?v=1595601274",
        "color": "#065e5d"
    },
    {
        "product_id": 3,
        "name": "Venum Team Sweatshirt - Women",
        "price": "74.99",
        "type": "hoodie",
        "product_for": "women",
        "description": "A product developed for those looking for a classic style. A very casual design, the VENUM Team Sweatshirt is also ultra comfortable to wear thanks to the softness of its cotton. You will not want to go without it! You will also appreciate the intricate finishing touches: perfect screen printing and tightening string.",
        "brand": "venum",
        "image": "https:////cdn.shopify.com/s/files/1/0264/2218/1937/products/b_252Fa_252F9_252Ff_252Fba9f65e5833da17d667428200ec8665dc19a9eb2_HOODIES_VENUM_TEAM_BLACK_SD_01__2_800x.jpg?v=1595602427",
        "image_2": "https://cdn.shopify.com/s/files/1/0264/2218/1937/products/5_252Fe_252Fd_252Ff_252F5edf76e9616a4e750c26c5e8ddd2a4ef9de4e571_HOODIES_VENUM_TEAM_BLACK_SD_03__2_800x.jpg?v=1595602427",
        "image_3": "https://cdn.shopify.com/s/files/1/0264/2218/1937/products/f_252F4_252F0_252F5_252Ff405212d9191e7dcea871bff257449f48d8cdc1e_HOODIES_VENUM_TEAM_BLACK_SD_04__2_800x.jpg?v=1595602427",
        "color": "#000000"
    },
    {
        "product_id": 4,
        "name": "DIVIO PO HOOD",
        "price": "74.00",
        "type": "hoodie",
        "product_for": "men",
        "description": "Affliction’s Mens Divio Pullover Hoodie. Dark Military Green Crystal/ Black. 100% cotton.",
        "brand": "affliction",
        "image": "https://cdn.shopify.com/s/files/1/1268/8989/products/A23251_1_1200x.jpg?v=1599000227",
        "image_2": "https://cdn.shopify.com/s/files/1/1268/8989/products/A23251_B_1200x.jpg?v=1599000226",
        "image_3": "https://cdn.shopify.com/s/files/1/1268/8989/products/A23251_SP_1200x.jpg?v=1599000227",
        "color": "#4b5320"
    }


]
```

#### GET PRODUCT BY ID

**URL** : `/product/:id`

**METHOD** : `GET`

### Sucess Response(200)

**Content Example**

User should receive a product by passing the product id

```json 
{
   "product_id": 1,
        "name": "Venum Elite Boxing Gloves - Khaki/Black",
        "price": "79.99",
        "type": "gloves",
        "product_for": "unisex",
        "description": "The triple density foam balances the shock, improving you as a fighter without the stress on your arms during impacts. The unique design and brand new colors are fit for all the fighters, no matter their level. The reinforced seams and mesh panels combined with their ergonomic shape will bring you a comfortable fit and feel as if you are truly one with the glove.",
        "brand": "venum",
        "image": "https://cdn.shopify.com/s/files/1/0264/2218/1937/products/BG_ELITE_KHAKI_BLACK_HD_01_800x.jpg?v=1599645180",
        "image_2": "https://cdn.shopify.com/s/files/1/0264/2218/1937/products/BG_ELITE_KHAKI_BLACK_HD_02_800x.jpg?v=1599645180",
        "image_3": null,
        "color": "#45421f" 
}
```

#### POST PRODUCT

**URL** : `/products`

**METHOD**: `POST`

**REQUIRED FIELDS** : User must pass an object with the following properties and its corresponding data type

```json
{
    "name": "string",
    "price": "decimal",
    "type" : "string",
    "product_for": "string",
    "description": "string",
    "brand" : "string",
    "image" : "string",
    "image_2": "string(optional)",
    "image_3" : "string(optional)",
    "color": "string"
}
```
### Sucess Response(201)

**Conent Example**

User should receive the created product 

```json

{
    "product_id": 50,
    "name": "Tatami Black Jiu Jitsu Gi -Black",
    "prodct_for": "unisex",
    "descrption": "Tatami's BJJ products are the best in the nation. World Champions are known to wear our brand.",
    "brand": "Tatami",
    "image": "https://imageurl.com",
    "image_2": null,
    "image_3": null,
    "color": "#00000"
}
```


#### PUT PRODUCT 

**URL** : `products/:id`

**METHOD** : `PUT`

**REQUIRED FIELD(S)** : User must send the id of the product, and at least one field to be edited. 


```json
    { "image_2": "https://image2url.com", }
```

### Sucess Response(201)

**Content Example** 

User should receive the edited product with the change(s) made.

```json

{
    "product_id": 50,
    "name": "Tatami Black Jiu Jitsu Gi -Black",
    "prodct_for": "unisex",
    "descrption": "Tatami's BJJ products are the best in the nation. World Champions are known to wear our brand.",
    "brand": "Tatami",
    "image": "https://imageurl.com",
    "image_2": "https://image2url.com",
    "image_3": null,
    "color": "#00000"
}

```


#### DELETE PRODUCT 

**URL** : `products/:id`

**METHOD** : `DELETE`

**REQUIRED FIELD(S)** : User must pass the product id to remove product from the database

### SUCESS RESPONSE(201)

**CONTENT EXAMPLE**

User should receive a JSON message upon request. 

```json 
  { "message" : "product sucessfully deleted" }
```

## AUTHENTICATION

#### REGISTER A USER 

**URL** : `/auth/signup`

**MEHTOD** : `POST`

**REQUIRED FIELDS** : User must send an object with the following fields and their data types. 

```json
    {
       "firstname": "string",
       "lastname": "string",
       "email" : "string",
       "passoword": "string",
       "zip": "number",
       "city": "string",
       "state": "string",
       "adress": "string",
       "adress_2": "string(optional)"
    }
```

### SUCESS RESPONSE(201)

**CONTENT EXAMPLE**

User should receive the created user object with hashed passoword

```json
{
        "user_id": 5,
        "firstname": "Pedro",
        "lastname": "Stevenson",
        "username": "GoodMOrning0000",
        "email": "Pedro@johnathon.com",
        "password": "$2a$10$PTFCW8a8aZ9Tz75tQroyMusPgiJreffQeCW7Bd5EBVYMRwiTydSiG",
        "zip": 1077,
        "city": "Birmingham",
        "state": "Alabama",
        "adress": "1044 Bvld Ave ",
        "adress_2": null
}
```

#### LOGIN/TOKEN

**URL** : `/auth/login`

**METHOO** : `POST`

**REQUIRED FIELDS** : User must send an object with the username and password fields

```json
{
    "username": "John",
    "password": "abc12345"
}
```

### SUCESS RESPONSE(201)

**CONENT EXAMPLE**

User should receive a toke upon request

```json
{
    "token": "token"
}
```


## USERS 

#### GET ALL USERS 

**URL** : `/users`

**METHOD** : `GET`

### SUCESS RESPONSE(200)

**CONTENT EXAMPLE**

User should receive a list of all existing users

```json 
[
    {
        "user_id": 3,
        "firstname": "Geroge",
        "lastname": "Stevenson",
        "username": "Georgey",
        "email": "George@johnathon.com",
        "password": "$2a$10$ekis8iZItyQTyG4xJCcJP.x1V40ClHB9NT5VVOaK3qNTUcOHnoovy",
        "zip": 1077,
        "city": "Birmingham",
        "state": "Alabama",
        "adress": "4444 Steve Drive Ave",
        "adress_2": null
    },
    {
        "user_id": 4,
        "firstname": "Yhomas",
        "lastname": "Stevenson",
        "username": "Yummi",
        "email": "Yomase@johnathon.com",
        "password": "$2a$10$xhggLueEbQcEHUPPjZaW5eOWv3kmObcKIdvfP6Of/RglXekRx4NHG",
        "zip": 1077,
        "city": "Birmingham",
        "state": "Alabama",
        "adress": "4444 Steve Drive Ave",
        "adress_2": null
    },
    {
        "user_id": 5,
        "firstname": "Pedro",
        "lastname": "Stevenson",
        "username": "GoodMOrning0000",
        "email": "Pedro@johnathon.com",
        "password": "$2a$10$PTFCW8a8aZ9Tz75tQroyMusPgiJreffQeCW7Bd5EBVYMRwiTydSiG",
        "zip": 1077,
        "city": "Birmingham",
        "state": "Alabama",
        "adress": "1044 Bvld Ave ",
        "adress_2": null
    }
]
```
#### GET USER BY ID

**URL** : `/users/:id`

**METHOD** : `GET`

**REQUIRED FIELD** : User must pass the user id to obtain user information.

### SUCESS RESPONSE(200)

**CONTENT EXAMPLE**

User will receive the user data by passing the user id

```json
    {
        "user_id": 3,
        "firstname": "Geroge",
        "lastname": "Stevenson",
        "username": "Georgey",
        "email": "George@johnathon.com",
        "password": "$2a$10$ekis8iZItyQTyG4xJCcJP.x1V40ClHB9NT5VVOaK3qNTUcOHnoovy",
        "zip": 1077,
        "city": "Birmingham",
        "state": "Alabama",
        "adress": "4444 Steve Drive Ave",
        "adress_2": null
    }
```

#### PUT USER

**URL** : `/users/user/:id`

**METHOD** : `PUT`

**REQUIRED FIELDS** : User id must be passed through the query params, and at least one field to be edited.

```json
{ "adress_2": "1044 Charleston Ave" }
```
### Sucess Response (201)

**CONTENT EXAMPLE** 

```json 
 {
        "user_id": 3,
        "firstname": "Geroge",
        "lastname": "Stevenson",
        "username": "Georgey",
        "email": "George@johnathon.com",
        "password": "$2a$10$ekis8iZItyQTyG4xJCcJP.x1V40ClHB9NT5VVOaK3qNTUcOHnoovy",
        "zip": 1077,
        "city": "Birmingham",
        "state": "Alabama",
        "adress": "4444 Steve Drive Ave",
        "adress_2": "1044 Charleston Ave"
 }
```

#### DELTE USER 

**URL** : `/users/user/:id`

**METHOD** : `DELETE`

**REQUIRED FIELD** : User must pass the user id to remove user.

### SUCCESS RESPONSE(201)

**CONTENT EXAMPLE**

User will receive a JSON message upon request.

```json 
    { "message": "user sucessfully removed" }
```

## Orders

#### PLACE AN ORDER

**URL** `/orders/order`

**MEHTOD** : `POST`

**REQUIRED FIELDS**: User must send an object that contains the order_user_id(user_id), and total fields

```json
{
    "order_user_id": 3,
    "total": 40.00
}
```

## SUCESS RESPONSE(201)  

**CONTENT EXAMPLE** : user should receive an order_id and username field in JSON object.

```json
{
    "order_id": 8,
    "username" : "Georgey"
}
```

#### RECORD ORDER DETAIL

**URL** : `/orders/order/order_detail`

**METHOD** : `POST`

**REQUIRED FIELDS**: User must pass the following fields: order_details_order_id(order_id), order_details_product_id(product_id), qty, price, and size

```json
{
    "order_details_order_id": 8,
    "order_details_product_id": 6,
    "price": 19.99,
    "size": "Large",
    "qty": 1
}
```

### SUCCESS RESPONSE(201)

**CONTENT EXAMPLE** 

User should receive the order_id, name of the product, price, qty, and size inside of a JSON object.

```json
{       
        "order_id": 8,
        "name": "WORLD CHAMPS TEE BLACK",
        "price": "19.99",
        "qty": 1,
        "size": "Large"   
}
```

### GET ALL ORDERS FOR USER BY USER ID

**URL**: `/orders/order/user/:id`

**MEHTOD** : `GET`

**REQUIRED FIELDS**: User id must be passed to obtain all orders from the user. 

### SUCESS RESPONSE(200)

**CONTENT EXAMPLE**

User should receive a JSON object with an order field, which contains an array of all orders

```json
{
    "orders": [
        
        {       
            "name": "WORLD CHAMPS TEE BLACK",
            "price": "19.99",
            "qty": 1,
            "size": "Large"   
        },
        {       
            "name": "WORLD CHAMPS TEE BLACK",
            "price": "19.99",
            "qty": 1,
            "size": "Medium"   
        }
    ]
}
```
