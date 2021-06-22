## Building an ERD 

### Example of ERD box

+------------+
| Books      |
+------------+
| ID SERIAL PRIMARY KEY NOT NULL       |
| name           |  
| publish_date           |
| FK: Author_id |
|            |
|            |
+------------+

+------------+
| Authors     |
+------------+
| ID SERIAL PRIMARY KEY NOT NULL       |
| name       |
|            |
|            |
|            |
|            |
+------------+

### Description of your relationship

Books to Author

### ERD describing the relationship

one author can have many books
one author to many books