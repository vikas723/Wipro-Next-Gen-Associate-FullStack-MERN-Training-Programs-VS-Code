/* Correlated Query and Sub-Query */ 

mysql> create database query;
Query OK, 1 row affected (0.01 sec)

mysql> use query;
Database changed
mysql> create table employees(emp_id int, emp_name varchar(20), dept_id int, salary int);
Query OK, 0 rows affected (0.02 sec)

mysql> select * from employees;
Empty set (0.00 sec)

mysql> desc employees;
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| emp_id   | int         | YES  |     | NULL    |       |
| emp_name | varchar(20) | YES  |     | NULL    |       |
| dept_id  | int         | YES  |     | NULL    |       |
| salary   | int         | YES  |     | NULL    |       |
+----------+-------------+------+-----+---------+-------+
4 rows in set (0.00 sec)

mysql> insert into employees values(1, "Amit", 10, 50000);
Query OK, 1 row affected (0.03 sec)

mysql> insert into employees values(2, "Diya", 20, 60000);
Query OK, 1 row affected (0.00 sec)

mysql> insert into employees values(3, "Haran", 20, 70000);
Query OK, 1 row affected (0.00 sec)

mysql> insert into employees values(4, "Meha", 40, 80000);
Query OK, 1 row affected (0.00 sec)

mysql> select * from employees;
+--------+----------+---------+--------+
| emp_id | emp_name | dept_id | salary |
+--------+----------+---------+--------+
|      1 | Amit     |      10 |  50000 |
|      2 | Diya     |      20 |  60000 |
|      3 | Haran    |      20 |  70000 |
|      4 | Meha     |      40 |  80000 |
+--------+----------+---------+--------+
4 rows in set (0.00 sec)

/* Find employees whose salary is greater than the average salary of all employees. - Sub Query */
mysql> select emp_name, salary from employees where salary > (select avg(salary) from employees);
+----------+--------+
| emp_name | salary |
+----------+--------+
| Haran    |  70000 |
| Meha     |  80000 |
+----------+--------+
2 rows in set (0.00 sec)


🧠 How it works

Inner query runs once

SELECT AVG(salary) FROM Employees;


Result (say 58750) is passed to the outer query

Outer query filters employees

✔ Independent
✔ Runs one time

/* Find employees whose salary is greater than the average salary of their own department. */

mysql> select emp_name, salary, dept_id from employees e where salary > (select avg(salary) from employees where dept_id = e.dept_id);
+----------+--------+---------+
| emp_name | salary | dept_id |
+----------+--------+---------+
| Haran    |  70000 |      20 |
+----------+--------+---------+
1 row in set (0.00 sec)

mysql>🧠 How it works

For each employee:

Takes employee’s dept_id

Calculates average salary of that department

Compares employee salary

✔ Depends on outer query
✔ Runs multiple times



[12:03, 28/01/2026] Vikas Jaya Kumar: Subquery and Correlated Subquery

Subquery (Non-Correlated)
A standard subquery is independent. It executes once before the outer query runs, and its result is then passed to the outer query. 
Execution: Runs once, independently.
Dependency: The outer query depends on the inner query's result.
Example: Finding all employees in a specific department name.
sql
SELECT * FROM Employees 
WHERE DepartmentID = (SELECT DepartmentID FROM Departments WHERE Name = 'Sales');
Use code with caution.
 
Correlated Subquery
A correlated subquery is dependent on the outer query. It references one or more columns from the outer query, meaning it must be re-evaluated for every row processed by the outer query. 
Execution: Runs once for each row of the outer query.
Dependency: The inner query depends on values from the outer query.
Performance: Generally slower than non-correlated subqueries because of the repeated execution.
Example: Finding employees who earn more than the average salary of their own department.
sql
SELECT Name, Salary 
FROM Employees e1 
WHERE Salary > (SELECT AVG(Salary) FROM Employees e2 WHERE e1.DeptID = e2.DeptID);
[12:23, 28/01/2026] Vikas Jaya Kumar: Correlated Query and Sub Query

create table employees(emp_id int, fname varchar(40) , lname varchar(30) ,salary int , dept_id int);
 create table departments(dept_id int ,dept_name varchar(50));
 
insert into employees values(101,"Jiya" ,"D", 60000 , 10),(102,"Shubham", "S" , 50000 , 20),(103,"Rohit" , "K" , 67700,30),(104,"Richa" ,"K" , 40000 , 10);
insert into departments values(10,"HR") ,(20,"IT") , (30,"Sales"),(40,"Engineering"), (50,"Marketing");
 
Scalar Subquery : It returns exactly one column and one row --  single value -- like average

select fname , lname from employees where salary>(select avg(salary) from employees);

Multi Row  -- where it will return single column with multiple rows (like a list)  that we can achieve using
 IN, NOTIN, ANY ,ALL

For eg :  select fname, lname from employees where dept_id in (select deptid from departments where dept_name in ('Sales' , 'Engineering'));

select all from departments where no employees are assigned to them.


select count(*) from employees group by dept_id;
select avg(salary) from employees group by dept_id;
select day(current_date());
select extract(day from'2026-01-28');
select extract(month from'2026-01-28');
select extract(month from'2026-01-28');