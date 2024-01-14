# DevCart eCommerce Platform
### Live on (https://devcart.onrender.com/)
> eCommerce platform built with the MERN stack & Redux.

<p align="center">
  <img src="https://github.com/Ratnesh4193/devcart/assets/57043581/c655ccb0-449f-4dbc-9854-e55e653d075e" alt="Home Page" width="400" height="300">
  <img src="https://github.com/Ratnesh4193/devcart/assets/57043581/b0e3bd9c-334e-46e4-9ad7-98074e76e2ff" alt="Product Page" width="400" height="300">
</p>
## Features

- User Authentication: Secure user authentication for personalized shopping experiences.
- Product Search: Efficient product search functionality for a smoother user experience.
- Cart Management: Seamless cart management for a convenient shopping journey.
- Admin product management, user management, and Admin Order details page.
- Checkout process (shipping, payment method, etc)
- Scalability: Built with Docker and Kubernetes to scale effortlessly in a production environment.
- Database seeder (products & users)

## CI/CD Pipeline
The project incorporates a robust CI/CD pipeline with Jenkins, SonarQube, and Trivy for efficient code analysis, quality assurance, and security scans.

# CI/CD Pipeline for DevCart

A powerful CI/CD pipeline for DevCart, a MERN e-commerce app, designed for scalability.

### Pipeline Steps

1. ***Clean Workspace:*** Ensure a fresh start for each build.

2. ***Checkout from Git:*** Fetch the latest code from the 'docker' branch.

3. ***SonarQube Analysis:*** Perform code analysis for quality assurance.

4. ***Quality Gate:*** Ensure code quality meets defined standards.

5. ***Install Frontend/Backend Dependencies:*** Set up project dependencies.

6. ***OWASP & TRIVY Scans:*** Check for security vulnerabilities in dependencies.

7. ***Create .env File:*** Configure environment variables.

8. ***Docker Build & Push:*** Build Docker images, tag, and push to the registry.

9. ***TRIVY Image Scans:*** Scan Docker images for vulnerabilities.

10. ***Deploy to Containers:*** Deploy the application using Docker Compose.

### Usage

Clone the repository, follow the pipeline steps, and launch DevCart effortlessly.

Feel free to contribute and enhance the pipeline for continuous improvement.

<p align="center">
  <img src="https://github.com/Ratnesh4193/devcart/assets/57043581/deebedd9-b681-4321-8c2e-10517540fc63" alt="Pipeline" width="400" height="300">
  <img src="https://github.com/Ratnesh4193/devcart/assets/57043581/296ba0a7-584b-47c3-be7b-ffc6f59a135c" alt="Kubernetes Dashboard" width="400" height="300">
</p>

## YouTube Video

Check out the detailed walkthrough of DevCart on YouTube:

[![DevCart YouTube Walkthrough](https://img.youtube.com/vi/EtO5UIgH2Wk/0.jpg)](https://www.youtube.com/watch?v=EtO5UIgH2Wk)

## Getting Started

Follow these steps to get the project up and running on your local machine:

### Clone the repository:
```bash
   git clone https://github.com/Ratnesh4193/devcart.git
```

### Navigate to the project directory:
```bash
   cd devcart
```

### Install frontend and backend dependencies:

```bash
cd frontend && npm install
cd ../backend && npm install
```
### Create a .env file in the project root and configure your environment variables.
```bash
touch .env
```
### Run

```bash
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

### Build & Deploy

```bash
# Create frontend prod build
cd frontend
npm run build
```
### Build and run the Docker containers:
```bash
docker-compose up -d --build
```

Access the application at http://localhost:3000.

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```

## Contributing
Contributions are welcome! Fork the repository, create a branch, commit your changes, and open a pull request. Check out the Contributing Guidelines for more details.
