## Building an ERD 

### Example of ERD box

+------------+
| TITLE HERE |
+------------+
|            |
|            |
|            |
|            |
|            |
|            |
+------------+

### Description of your relationship

Teacher (one) to Student (many)

### ERD describing the relationship

+------------+
| teacher    |
+------------+
|pk  id      |
| name       |
| subject    |
|            |
|            |
|            |
+------------+

+------------+
| student    |
+------------+
| PK id      |
| name       |
| grade      |
|fk:teacher_id|
|            |
|            |
+------------+