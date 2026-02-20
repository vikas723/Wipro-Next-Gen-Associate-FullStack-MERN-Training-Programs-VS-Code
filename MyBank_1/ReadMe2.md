MyFin Bank Project Workflow : 


1) User Authentication

* User registers as Customer or Admin

* Password is securely hashed using bcrypt

* On login, a JWT token is generated

* Token is stored in localStorage



2) Authorization & Role-Based Access Control

* JWT middleware validates user identity

* Backend checks user role before granting access

* Admin-only routes are restricted

* Customers cannot access admin endpoints



3) Account Management

* Customer creates a bank account

* Initial balance is stored in database

* Backend verifies authenticated user before account creation

* Account details are fetched securely via protected API



4) Loan Application Process

* Customer selects loan type

* Enters loan amount, interest rate, and tenure

* EMI is calculated using backend API

* Validation checks:

  1. Minimum loan amount 

  2. Valid tenure range

  3. Customer submits application

  4. Loan status is set to Pending

  5. Loan details stored in database



5) EMI Calculation Logic

* EMI is calculated using:

    EMI = P×R×(1+R)^N​ / (1+R)^N−1

Where:

P = Principal Amount

R = Monthly Interest Rate

N = Number of Months

* The backend returns:

  1) Monthly EMI

  2) Total Interest

  3) Total Payable Amount



6) Admin Loan Approval Workflow

* Admin logs into admin dashboard

* Admin views all loan applications

* System evaluates:

  1) Customer account balance

  2) EMI affordability

* Admin can:

  1) Approve loan → Status = Approved

  2) Reject loan → Status = Rejected

  3) Loan status is updated in database

* Customer sees updated status in loan history



7) Loan History

* Customers can view:

  1) Loan ID

  2) Loan Type

  3) Amount

  4) Interest Rate

  5) EMI

* Status (Pending / Approved / Rejected)

* Applied Date


8) API Communication Flow

User Action
    ↓
React Frontend
    ↓ (Axios HTTP Request)
Express Backend
    ↓
MySQL Database
    ↓
JSON Response
    ↓
Frontend UI Update


* Frontend sends REST API requests using Axios

* Backend validates JWT

* Business logic executes

* Database is updated

* Response returned to frontend

* UI updates dynamically



9. Database Interaction

* MySQL stores:

Users

Accounts

Loan Applications

* Backend performs:

INSERT (create)

SELECT (read)

UPDATE (status change)

* Referential integrity maintained between user and loans



10) Error Handling & Validation

System ensures:

* Required field validation

* Minimum loan amount validation

* Tenure limit validation

* Insufficient balance rejection

* Proper error responses with HTTP status codes



11) Logout & Session Handling

* On logout:

1) JWT token removed from localStorage

2) User session cleared

3) Redirected to login page



12) Technology Stack

* Frontend: React + React Bootstrap

* Backend: Node.js + Express

* Database: MySQL

* Authentication: JWT + bcrypt

* API Communication: Axios
