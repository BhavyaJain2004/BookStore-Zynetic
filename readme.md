# Book Management API

This project is a RESTful API built using Node.js, Express, and MongoDB. It allows users to sign up, log in, and perform CRUD operations on books. The application uses JWT for authentication and bcrypt for password hashing.


Features - 

- User Registration and Login
- Password Hashing with Bcrypt
- Token-Based Authentication with JWT
- CRUD Operations on Books
- Filter Books by Author, Category, Title, and Rating



Project Setup


1) Clone the Repository

git clone https://github.com/BhavyaJain2004/BookStore-Zynetic

2) Install Dependencies

npm install

3) Create a .env file in the root directory with following details : 

PORT = 3000


4) Run the Server 

npm run dev



# API Endpoints

Method 	Endpoint	     Description <br>
POST	 /users/signup	Register a new user   <br>
POST	/users/login	Authenticate user and return token


Book Routes

Method    	Endpoint	        Description   <br>
GET	         /books	            Get all books (with optional filters)  <br>
POST	       /books	        Add a new book (auth required)  <br>
GET	        /books/:id	        Get book by ID  <br>
PUT	        /books/:id	        Update book (auth required)  <br>
DELETE	    /books/:id	    Delete book (auth required)  <br>


# Books Filter
You can filter books by Author , Category , Title and Rating

eg - GET /books?author=Rowling&rating=4


Assumptions-

1)Users must log in before adding/updating/deleting books.
2)Book ratings are numbers (e.g., 3.5, 4, etc.)
3)Data is stored on MongoDB Atlas.


# Screenshots - 

1) User Signup - 

![alt text](</screenshots/Screenshot from 2025-04-09 17-48-08.png>)


2) User Login - 

![alt text](</screenshots/Screenshot from 2025-04-09 17-48-48.png>)


3) Get Books - 

![alt text](</screenshots/Screenshot from 2025-04-09 17-52-39.png>)

4) Get Book by ID - 

![alt text](</screenshots/Screenshot from 2025-04-09 17-53-33.png>)

5) Updating Book Details - 

![alt text](</screenshots/Screenshot from 2025-04-09 17-54-25.png>)

Author - 

Bhavya Jain
(Made with love & learning)





