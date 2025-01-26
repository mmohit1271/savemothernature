# Save Mother Nature - Web Application

## Overview
Save Mother Nature is a web application dedicated to raising awareness about climate change and promoting environmental sustainability. The application provides users with information on climate change, ways to get involved, resources for learning, and opportunities to take action, such as donating to environmental causes.

The project is built with:
- **Frontend**: React
- **Backend**: Spring Boot
- **Database**: PostgreSQL

## Features
- **Home Page**: Introduction to the cause.
- **About Page**: Information about the project and the importance of saving the environment.
- **Contact Page**: Contact form for inquiries and suggestions.
- **Get Involved Page**: Ways to contribute and take action.
- **Learn Page**: Resources for learning about climate change and sustainability.
- **Take Action Page**: Encouraging users to take actions for environmental impact.
- **Explore Resources Page**: Links to useful resources for saving nature.
- **Donate Page**: A page to donate to environmental causes.

## Technologies Used
- **Frontend**: 
  - React for building interactive user interfaces.
  - Axios for making HTTP requests to the backend.
  - React Router for routing between pages.

- **Backend**: 
  - Spring Boot for building a RESTful API.
  - Java 11 for backend development.
  - Spring Data JPA for database access.

- **Database**: PostgreSQL for data storage.

## Project Structure

savemothernature/
├── frontend/                  # React Frontend
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── About.js
│   │   │   ├── Contact.js
│   │   │   ├── GetInvolved.js
│   │   │   ├── Learn.js
│   │   │   ├── TakeAction.js
│   │   │   ├── ExploreResources.js
│   │   │   ├── Donate.js
│   │   ├── styles/
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.css
│   │   │   ├── Home.css
│   │   │   ├── About.css
│   │   │   ├── Contact.css
│   │   │   ├── GetInvolved.css
│   │   │   ├── Learn.css
│   │   │   ├── TakeAction.css
│   │   │   ├── ExploreResources.css
│   │   │   ├── Donate.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   ├── index.css
│   ├── package.json
│   ├── README.md
│   ├── .gitignore
│   ├── node_modules/
│   ├── build/
├── backend/                   # Spring Boot Backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── savemothernature/
│   │   │   │           ├── SaveMotherNatureApplication.java
│   │   │   │           ├── controller/
│   │   │   │           │   ├── DonationController.java
│   │   │   │           │   ├── ContactController.java
│   │   │   │           │   └── ResourceController.java
│   │   │   │           ├── model/
│   │   │   │           │   ├── Donation.java
│   │   │   │           │   ├── Contact.java
│   │   │   │           │   └── Resource.java
│   │   │   │           ├── repository/
│   │   │   │           │   ├── DonationRepository.java
│   │   │   │           │   ├── ContactRepository.java
│   │   │   │           │   └── ResourceRepository.java
│   │   │   │           ├── service/
│   │   │   │               ├── DonationService.java
│   │   │   │               ├── ContactService.java
│   │   │   │               └── ResourceService.java
│   │   ├── resources/
│   │       ├── application.properties
│   │       ├── data.sql
│   │       └── schema.sql
│   ├── pom.xml
│   ├── mvnw
│   ├── mvnw.cmd
│   ├── target/
├── database/                  # Database Configuration
│   ├── init.sql               # SQL Script for Initial Setup
│   ├── backup/                # Folder for Backups
│   │   ├── savemothernature_backup.sql
│   ├── README.md
├── README.md

## Setup Instructions

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (for running React)
- **Java 11** (for running Spring Boot)
- **PostgreSQL** (for the database)
- **Maven** (for building the Spring Boot project)

### Frontend Setup (React)

1. Navigate to the `frontend` directory.
2. Install dependencies by running:
   ```bash
   npm install

Start the React development server:
npm start

The React app will be running at http://localhost:3000.

Backend Setup (Spring Boot)
Navigate to the backend directory.
Ensure your PostgreSQL instance is running, and create a database (e.g., savemothernature).
Configure the application.properties file with your database connection details:

spring.datasource.url=jdbc:postgresql://localhost:5432/savemothernature
spring.datasource.username=yourusername
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
spring.datasource.driver-class-name=org.postgresql.Driver
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect

Run the Spring Boot application with Maven:
./mvnw spring-boot:run
The backend API will be running at http://localhost:8080.

Database Setup (PostgreSQL)
Create a database for the project. You can use the provided schema.sql and data.sql for setting up the database schema and initial data.
Ensure the PostgreSQL instance is running and accessible by the Spring Boot application.
Endpoints
The backend provides the following API endpoints:

POST /api/contacts: To create a new contact inquiry.
GET /api/contacts: To fetch all contact inquiries.
POST /api/resources: To add a new resource.
GET /api/resources: To fetch all resources.
Contributing
Feel free to fork the repository and submit pull requests. Please follow the coding guidelines and ensure that all contributions align with the project's goals.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Thank you to all contributors for their support and collaboration.
This project aims to raise awareness and take action against climate change


---

