# E-Commerce
## A Seamless Shopping Experience Powered by the MERN Stack, Redux Toolkit, and Material UI

**MERN E-commerce:** is a full-stack application designed to transform your online shopping experience. Built with the MERN stack (MongoDB, Express.js, React, Node.js), it leverages Redux Toolkit for efficient state management and Material UI for a sleek, user-friendly interface. This project offers a robust platform for both users and admins, packed with essential features for a seamless experience.

![ecommerce-homepage](https://github.com/luminarakash/E-Commerce/blob/main/frontend/src/assest/ss1.png)

![ecommerce](https://github.com/luminarakash/E-Commerce/blob/main/frontend/src/assest/ss2.png)


# **Features**

### **User:**
- **Product Reviews:**
  - Write, edit, and delete reviews.
  - Instant updates on ratings and star percentages.
  
- **Wishlist:**
  - Add, remove, and annotate products with personalized notes.
  
- **Order Management:**
  - Create new orders and view order history.
  
- **Profile Management:**
  - Manage email, username, and multiple addresses.
  
- **Shopping Cart:**
  - Add products, adjust quantities, and view subtotals.

### **Admin:**
- **Product Management:**
  - Add, edit, delete, and soft-delete products.
  - Manage product attributes like name and stock.
  
- **Order Management:**
  - View and update order details and status.

### **Security & User Experience:**
- **Secure Authentication:**
  - Login, signup, OTP verification, password reset, and logout.

- **Intuitive Interface:**
  - Powered by Material UI for a visually appealing and user-friendly experience.

### **Scalability:**
- **Built for Growth:**
  - Scalable architecture to handle increasing user demands.


# **Project Setup**

### Install dependencies for frontend and backend separately
**Tip:** To efficiently install dependencies for both frontend and backend simultaneously, use split terminals.

Install frontend dependencies
```bash
cd frontend
npm install
npm start
```

Install backend dependencies

```bash
cd backend
npm install
npm run dev
```


### Environment Variables
**Backend**
- Create a `.env` file in the `backend` directory.
- Add the following variables with appropriate values
```bash
# Database connection string
MONGO_URI="mongodb://....................../your-database-name"

# Frontend URL (adjust if needed)
ORIGIN="http://localhost:3000"


# Token and cookie expiration settings
LOGIN_TOKEN_EXPIRATION="8h"  

# Secret key for jwt security
SECRET_KEY="your-secret-key"

**Frontend**
- Create a `.env` file in the `frontend` directory
- Add the following variable:
```bash
# Backend URL (adjust if needed)
REACT_APP_BASE_URL="http://localhost:8080" 
```

**Important**
- Replace all placeholders (e.g., your_database_name) with your actual values.
- Exclude the `.env` file from version control to protect sensitive information.

### Login with demo account (Optional)
- After successfully seeding the database, you can now explore the application's functionalities using pre-populated sample data.
- here are the `login credentials`
```bash
  email: demo@gmail.com
  pass: helloWorld@123
```
### Accessing the Application
Once both servers are running, you can access them at the following URL's:
- Backend: http://localhost:8080
- Frontend: http://localhost:3000

## **Bonus**
Don't forget to star the repository and share your feedback!✨

## Authors
- [@luminarakash](https://github.com/luminarakash) <span className="text-red-500">&hearts;</span> : Akash Patel
