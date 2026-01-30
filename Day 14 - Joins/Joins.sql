
mysql> create database joins;
Query OK, 1 row affected (0.01 sec)

mysql> use joins;
Database changed
mysql> create table spotify(s_id int primary_key, s_name varchar(100));
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'primary_key, s_name varchar(100))' at line 1
mysql> create table spotify(s_id int primary key, s_name varchar(100));
Query OK, 0 rows affected (0.03 sec)

mysql> create table album(a_id int primary key, name varchar(100), s_id int, foreign key (s_id) references spotify(s_id));
Query OK, 0 rows affected (0.02 sec)

mysql> desc album
    -> ;
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| a_id  | int          | NO   | PRI | NULL    |       |
| name  | varchar(100) | YES  |     | NULL    |       |
| s_id  | int          | YES  | MUL | NULL    |       |
+-------+--------------+------+-----+---------+-------+
3 rows in set (0.00 sec)

mysql> desc spotify;
+--------+--------------+------+-----+---------+-------+
| Field  | Type         | Null | Key | Default | Extra |
+--------+--------------+------+-----+---------+-------+
| s_id   | int          | NO   | PRI | NULL    |       |
| s_name | varchar(100) | YES  |     | NULL    |       |
+--------+--------------+------+-----+---------+-------+
2 rows in set (0.00 sec)

mysql> insert into spotify values(1, "Vaarayo Vaarayo"), (2, "Minnale"), (3, "Amuli Thumuli");
Query OK, 3 rows affected (0.01 sec)
Records: 3  Duplicates: 0  Warnings: 0

mysql> select * from spotfiy;
ERROR 1146 (42S02): Table 'joins.spotfiy' doesn't exist
mysql> select * from spotify;
+------+-----------------+
| s_id | s_name          |
+------+-----------------+
|    1 | Vaarayo Vaarayo |
|    2 | Minnale         |
|    3 | Amuli Thumuli   |
+------+-----------------+
3 rows in set (0.00 sec)

mysql> insert into album values(101, "Harris Jayaraj", 1), (102, "Madhavan hits", 2), (103, "KO", 3);
Query OK, 3 rows affected (0.00 sec)
Records: 3  Duplicates: 0  Warnings: 0

mysql> select * from album;
+------+----------------+------+
| a_id | name           | s_id |
+------+----------------+------+
|  101 | Harris Jayaraj |    1 |
|  102 | Madhavan hits  |    2 |
|  103 | KO             |    3 |
+------+----------------+------+
3 rows in set (0.00 sec)


mysql> insert into spotify values(4, "Aaliyile"), (5, "Manjal Veyil");
Query OK, 2 rows affected (0.00 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql> select * from spotify;
+------+-----------------+
| s_id | s_name          |
+------+-----------------+
|    1 | Vaarayo Vaarayo |
|    2 | Minnale         |
|    3 | Amuli Thumuli   |
|    4 | Aaliyile        |
|    5 | Manjal Veyil    |
+------+-----------------+
5 rows in set (0.00 sec)

Inner Join:

mysql> select a.name, s.s_name from album a inner join spotify s on a.s_id = s.s_id
    -> ;
+----------------+-----------------+
| name           | s_name          |
+----------------+-----------------+
| Harris Jayaraj | Vaarayo Vaarayo |
| Madhavan hits  | Minnale         |
| KO             | Amuli Thumuli   |
+----------------+-----------------+
3 rows in set (0.00 sec)

Left Join:

mysql> select a.name, s.s_name from album a left join spotify s on a.s_id = s.s_id';
    '> ;
    '> ^C
mysql> select a.name, s.s_name from album a left join spotify s on a.s_id = s.s_id;
+----------------+-----------------+
| name           | s_name          |
+----------------+-----------------+
| Harris Jayaraj | Vaarayo Vaarayo |
| Madhavan hits  | Minnale         |
| KO             | Amuli Thumuli   |
+----------------+-----------------+
3 rows in set (0.00 sec)

Right Join:

mysql> select a.name, s.s_name from album a right join spotify s on a.s_id = s.s_id;
+----------------+-----------------+
| name           | s_name          |
+----------------+-----------------+
| Harris Jayaraj | Vaarayo Vaarayo |
| Madhavan hits  | Minnale         |
| KO             | Amuli Thumuli   |
| NULL           | Aaliyile        |
| NULL           | Manjal Veyil    |
+----------------+-----------------+
5 rows in set (0.00 sec)

Full Join:

mysql> select a.name, s.s_name from album a left join spotify s on a.s_id = s.s_id union select a.name, s.s_name from album a right join spotify s on a.s_id = s.s_id;
+----------------+-----------------+
| name           | s_name          |
+----------------+-----------------+
| Harris Jayaraj | Vaarayo Vaarayo |
| Madhavan hits  | Minnale         |
| KO             | Amuli Thumuli   |
| NULL           | Aaliyile        |
| NULL           | Manjal Veyil    |
+----------------+-----------------+
5 rows in set (0.00 sec)

Cross Join:
mysql> select a.name, s.s_name from album a cross join spotify s;
+----------------+-----------------+
| name           | s_name          |
+----------------+-----------------+
| KO             | Vaarayo Vaarayo |
| Madhavan hits  | Vaarayo Vaarayo |
| Harris Jayaraj | Vaarayo Vaarayo |
| KO             | Minnale         |
| Madhavan hits  | Minnale         |
| Harris Jayaraj | Minnale         |
| KO             | Amuli Thumuli   |
| Madhavan hits  | Amuli Thumuli   |
| Harris Jayaraj | Amuli Thumuli   |
| KO             | Aaliyile        |
| Madhavan hits  | Aaliyile        |
| Harris Jayaraj | Aaliyile        |
| KO             | Manjal Veyil    |
| Madhavan hits  | Manjal Veyil    |
| Harris Jayaraj | Manjal Veyil    |
+----------------+-----------------+
15 rows in set (0.00 sec)

mysql> select s.s_name, a.name from spotify s cross join album a;
+-----------------+----------------+
| s_name          | name           |
+-----------------+----------------+
| Vaarayo Vaarayo | KO             |
| Vaarayo Vaarayo | Madhavan hits  |
| Vaarayo Vaarayo | Harris Jayaraj |
| Minnale         | KO             |
| Minnale         | Madhavan hits  |
| Minnale         | Harris Jayaraj |
| Amuli Thumuli   | KO             |
| Amuli Thumuli   | Madhavan hits  |
| Amuli Thumuli   | Harris Jayaraj |
| Aaliyile        | KO             |
| Aaliyile        | Madhavan hits  |
| Aaliyile        | Harris Jayaraj |
| Manjal Veyil    | KO             |
| Manjal Veyil    | Madhavan hits  |
| Manjal Veyil    | Harris Jayaraj |
+-----------------+----------------+
15 rows in set (0.00 sec)

Self Join:




