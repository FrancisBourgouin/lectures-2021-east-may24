## Building an ERD 
Types of pets
### Example of ERD box

+------------+
|   Person   |
+------------+
|  ID (PK)   |
|   Name     |
|  Location  |
|NumberOfPet |
|            |
|            |
+------------+
+------------+
|    Pet     |
+------------+
| ID (PK)    |
|   Type     |
|            |
|            |
|            |
|            |
+------------+
+------------+
| Pets Owned |
+------------+
|  ID (PK)   |
|  Name      |
|  PersonId  |
|  PetId     |
|            |
|            |
+------------+

### Description of your relationship
Many people can own many pets


### ERD describing the relationship
Many to many relationship
Pet owned is the middle column
