CREATE DATABASE IF NOT EXISTS TechNovaDB;
USE TechNovaDB;

/* =======================
   TABLE CREATION
======================= */

CREATE TABLE Department (
    DeptID INT PRIMARY KEY,
    DeptName VARCHAR(50) UNIQUE,
    Location VARCHAR(50)
);

CREATE TABLE Employee (
    EmpID INT PRIMARY KEY,
    EmpName VARCHAR(50),
    Gender CHAR(1),
    DOB DATE,
    HireDate DATE,perfume  
    DeptID INT,
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

CREATE TABLE Project (
    ProjectID INT PRIMARY KEY,
    ProjectName VARCHAR(50),
    DeptID INT,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

CREATE TABLE Performance (
    EmpID INT,
    ProjectID INT,
    Rating INT CHECK (Rating BETWEEN 1 AND 5),
    ReviewDate DATE,
    PRIMARY KEY (EmpID, ProjectID),
    FOREIGN KEY (EmpID) REFERENCES Employee(EmpID),
    FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)
);

CREATE TABLE Reward (
    EmpID INT,
    RewardMonth DATE,
    RewardAmount DECIMAL(10,2),
    FOREIGN KEY (EmpID) REFERENCES Employee(EmpID)
);

/* =======================
   INSERT DATA
======================= */

INSERT INTO Department VALUES
(101, 'IT', 'Bangalore'),
(102, 'HR', 'Delhi'),
(103, 'Finance', 'Mumbai'),
(104, 'Marketing', 'Pune'),
(105, 'Support', 'Chennai');

INSERT INTO Employee VALUES
(1, 'Asha', 'F', '1990-07-12', '2018-06-10', 101),
(2, 'Raj', 'M', '1988-04-09', '2020-03-22', 102),
(3, 'Neha', 'F', '1995-01-15', '2021-08-05', 101),
(4, 'Kunal', 'M', '1992-11-20', '2019-09-12', 103),
(5, 'Priya', 'F', '1997-03-18', '2022-01-10', 104);

INSERT INTO Project VALUES
(201, 'ERP System', 101, '2020-01-01', '2021-12-31'),
(202, 'HR Portal', 102, '2021-02-01', '2022-06-30'),
(203, 'Accounting App', 103, '2019-05-01', '2020-11-30'),
(204, 'Ad Campaign', 104, '2022-03-01', '2022-12-31'),
(205, 'Helpdesk Tool', 105, '2021-07-01', '2023-01-31');

INSERT INTO Performance VALUES
(1, 201, 4, '2021-06-15'),
(2, 202, 5, '2022-04-20'),
(3, 201, 3, '2022-09-10'),
(4, 203, 4, '2020-10-05'),
(5, 204, 5, '2022-12-01');

INSERT INTO Reward VALUES
(1, '2023-01-01', 2500),
(2, '2023-02-01', 1800),
(3, '2023-03-01', 900),
(4, '2023-01-01', 3000),
(5, '2023-04-01', 2200);

/* DELETE LOW REWARDS */
DELETE FROM Reward WHERE RewardAmount < 1000;

/* =======================
   EXPLAIN BEFORE INDEX
======================= */

EXPLAIN
SELECT e.EmpName, d.DeptName, p.Rating
FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID
JOIN Performance p ON e.EmpID = p.EmpID;

/* =======================
   CREATE INDEXES
======================= */

CREATE INDEX idx_empname ON Employee(EmpName);
CREATE INDEX idx_deptid ON Employee(DeptID);

/* =======================
   EXPLAIN AFTER INDEX
======================= */

EXPLAIN
SELECT e.EmpName, d.DeptName, p.Rating
FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID
JOIN Performance p ON e.EmpID = p.EmpID;

/* =======================
   AGGREGATE QUERY
======================= */

SELECT d.DeptName, AVG(p.Rating) AS AvgRating
FROM Department d
JOIN Employee e ON d.DeptID = e.DeptID
JOIN Performance p ON e.EmpID = p.EmpID
GROUP BY d.DeptName;

/* =======================
   DATE FUNCTION QUERY
======================= */

SELECT SUM(RewardAmount) AS TotalRewards
FROM Reward
WHERE YEAR(RewardMonth) = YEAR(CURDATE());

/* =======================
   JOIN QUERY
======================= */

SELECT e.EmpName, d.DeptName, pr.ProjectName, pf.Rating
FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID
JOIN Performance pf ON e.EmpID = pf.EmpID
JOIN Project pr ON pf.ProjectID = pr.ProjectID;
