# Airbnb Clone

A fully-featured Airbnb-like web application, designed to simplify the booking of properties and accommodations. This project includes a robust backend and a responsive frontend to provide a seamless user experience.

## Features
### Frontend:
- **Landing Page**: Engaging homepage with highlights of the platform's offerings.
- **User Authentication**: Login and registration functionality.
- **Property Listings**: Display detailed property information and photos.
- **Booking System**: Interactive booking interface with real-time availability.
- **User Dashboard**: View and manage bookings and account details.
- **Responsive Design**: Optimized for mobile and desktop using Tailwind CSS.

### Backend:
- **User Management**: Secure user authentication and management.
- **Property Management**: Models for properties, bookings, and user data.
- **API Integration**: RESTful APIs to handle data communication between the frontend and backend.
- **Database Support**: MongoDB for reliable and scalable data storage.

## Technologies Used
- **Frontend**:
  - React.js: Component-based UI design.
  - Tailwind CSS: For modern, responsive styling.
  - Axios: Simplified API requests.
  - Vite: A fast development environment.

- **Backend**:
  - Node.js: Server-side runtime.
  - Express.js: Backend framework.
  - MongoDB: Database to store user, booking, and property information.

## File Structure
- **/api**: Backend application files (Node.js, Express, and MongoDB models).
- **/client**: Frontend application files (React, Tailwind, and custom components).

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/airbnb-clone.git
   ```
2. Navigate to the backend folder and install dependencies:
   ```bash
   cd airbnb-clone/api
   npm install
   ```
   Start the backend server:
   ```bash
   npm start
   ```
3. Navigate to the frontend folder and install dependencies:
   ```bash
   cd ../client
   npm install
   ```
   Start the frontend development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser to access the app.
