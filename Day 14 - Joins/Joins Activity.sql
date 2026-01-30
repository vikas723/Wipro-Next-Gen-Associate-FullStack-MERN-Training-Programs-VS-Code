


### Employees

```text
emp_id | emp_name | dept_id | manager_id
1      | Amit     | 10      | NULL
2      | Riya     | 20      | 1
3      | Karan    | 10      | 1
4      | Sneha    | 30      | 2
5      | Rahul    | NULL    | 2
```

### Departments

```text
dept_id | dept_name
10      | IT
20      | HR
40      | Finance
```

Common column  `dept_id`

---

### Activity: Display employees who belong to a department



Show **only employees whose `dept_id` exists in Departments**


```sql
SELECT e.emp_name, d.dept_name
FROM Employees e
INNER JOIN Departments d
ON e.dept_id = d.dept_id;
```


```text
Amit   | IT
Riya   | HR
Karan  | IT
```

 Sneha (dept_id = 30 not found)

 Rahul (dept_id = NULL)

---

# LEFT JOIN (Left Outer Join)

### Activity: Display all employees even if they don’t belong to any department



All employees
Department shown only if it exists


```sql
SELECT e.emp_name, d.dept_name
FROM Employees e
LEFT JOIN Departments d
ON e.dept_id = d.dept_id;
```

### Result

```text
Amit   | IT
Riya   | HR
Karan  | IT
Sneha | NULL
Rahul | NULL
```

✔ All employees shown
✔ Missing departments → `NULL`

---

# RIGHT JOIN (Right Outer Join)

### Activity: Display all departments even if no employee works in them


All departments
Employee shown only if exists


```sql
SELECT e.emp_name, d.dept_name
FROM Employees e
RIGHT JOIN Departments d
ON e.dept_id = d.dept_id;
```

### Result

```text
Amit   | IT
Karan  | IT
Riya   | HR
NULL   | Finance
```

✔ Finance shown even though no employee works there


# FULL JOIN (Full Outer Join)

### Activity: Display all employees and all departments, matched or not

### Important

 **MySQL does NOT support FULL JOIN directly**

###  Correct MySQL Solution (Using UNION)

```sql
SELECT e.emp_name, d.dept_name
FROM Employees e
LEFT JOIN Departments d
ON e.dept_id = d.dept_id

UNION

SELECT e.emp_name, d.dept_name
FROM Employees e
RIGHT JOIN Departments d
ON e.dept_id = d.dept_id;
```

### Result Includes

* All employees
* All departments
* Matched + unmatched rows


# SELF JOIN

### Activity: Display employees and their managers

Table joins **with itself**

### Query

```sql
SELECT 
    e.emp_name AS Employee,
    m.emp_name AS Manager
FROM Employees e
LEFT JOIN Employees m
ON e.manager_id = m.emp_id;
```

### Result

```text
Amit   | NULL
Riya   | Amit
Karan  | Amit
Sneha | Riya
Rahul | Riya
```

✔ Shows reporting structure
✔ Amit has no manager

---

# CROSS JOIN

### Activity: Generate all possible employee–department combinations

Every employee paired with every department

```sql
SELECT e.emp_name, d.dept_name
FROM Employees e
CROSS JOIN Departments d;
```

### Result

* 5 employees × 3 departments = **15 rows**
* Used rarely (testing, combinations)





