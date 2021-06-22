## Building an ERD 

### Example of ERD box

+------------+
|  Car_brand  |
+------------+
| PK | id    |
|    | name  |
|    |       |
|            |
|            |
|            |
+------------+

+------------+
|  Car_model |
+------------+
| PK | id    |
|    | name  |
|  FK| brand_name |
|            |
|            |
|            |
+------------+


### Description of your relationship

One car brand can have many models,
one car model has 1 car brand

### ERD describing the relationship

