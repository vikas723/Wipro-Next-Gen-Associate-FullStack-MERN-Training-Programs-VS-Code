Project Setup Instructions:

1) Ihave deleted Node modules for both frontend and backend

2) Unzip my project folder and install the node modules for both frontend and backend

3) Create a folder for backend and create react app in the name of frontend

4) Create proper structure for both the frontend and backend

5) Install the required libraries needed for both frontend and backend

6) Create schemas for course and enrollment

7) In .env file i have given Backend port 5000 and MONGO_URI

Backend run Instructions:

1) Install  Express

2) Install npm init -y for pckage.json

3) Install npm install express mongoose dotenv cors express-validator

4) In package.sjon file add "scripts": {"test":  "mocha tests --exit"} as i have installed mocha chai for testing

5) In thunder client post this api  http://localhost:5000/api/courses and in JSON body add the course name, id, price , category of the course 

6) The courses will be created and similary follow for enrollment api/enroll

7) In MongoDB the colections will be created and all the course details will be fetched

8) After clicking enroll button, in mongodb enrollment collection will be updated

9) Referech the mongodb databse to see the results

10) To test the enrollemnt give the command npm test and all the test cases will be passed

Frontend run instructions: 

1) Create react app named frontend

2) Install bootstrap, axios, react-tostify as i have included these libraries

3) In frontend folder give npm start

4) In Services/api file i have connected the backend connection

5) Now run in the local host 3000 to view both the frontend and backend part

API Endpoints:

POST - /api/courses to post all the courses

GET - /api/courses to fetch the course details

POST - /api/enroll to enroll in the course and it displays the success message 