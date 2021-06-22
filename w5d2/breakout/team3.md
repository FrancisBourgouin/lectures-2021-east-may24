## Building an ERD 

### Example of ERD box

+------------+       
| Person     |
+------------+
| PK|   id   |-------      
|   |   Name |       |
|   |        |       |
|   |        |       |
|   |        |       |
|   |        |       |
+------------+       |
                     |
                     |
+------------ +      |
| Account     |      |
+------------ +      |
|PK | id       | \   |
|FK | person_id| -----
|   |   type   | /
|   |        |
|   |          |
|   |          |
+------------ +

### Description of your relationship

One - to - many 

### ERD describing the relationship
Example of one person having several bank accounts.
hello
Hi!