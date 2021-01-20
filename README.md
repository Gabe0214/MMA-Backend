# MMA-Backend

base url: https://heroku-mma-backend.com

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




