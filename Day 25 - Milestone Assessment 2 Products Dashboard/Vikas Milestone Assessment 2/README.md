In my Product Dashboard Project the frontend part is named as frontend and Backend part is named as Backend

Execution steps:

Step 1: I have deleted node modules files for both client and server so do npm install epress and npm install to install the node modules for both frontend and backend  

Step 2: Start the Client

Step 3: Then open a new Terminal and then start the Server

Step 4: Client will run on port 3000 http://localhost:3000

Step 5 : Server will run on port http://localhost:5000/products

Step 6 : To fetch the products give http://localhost:5000/products/1

Step 7 : The user can enter add the products and for this form validation has been implemented 

User Story 1:

In user stoy 1 i have implemented ProductCard as functional Components and ProductList as class components. Applied bootstrap and also used props

User Story 2:

In this story i have implement the express js as backend to fetch the product details while the user adds product in the frontend then in backend product details will be fetched. and also implemented route transitions between pages and handled error using try catch inside use effect

User Story 3:

In this story i have implemented fomrik and yup for controlled form and validation for these fields Fields: name, price, category, description. and also implemented context api for the global product list update