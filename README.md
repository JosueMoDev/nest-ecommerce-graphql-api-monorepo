# 🛒 E-commerce - Nest and GraphQL

This is a backend system for an e-commerce platform built as a monorepo using NestJS. The current setup includes an **Admin Module** with features such as:

- **Product Management**: Create, update, and delete products.
- **Image Upload**: Upload product images to AWS S3.

In the future, we plan to transition to a microservices architecture. The Admin Module will be part of this architecture, while additional microservices will handle sales and other functionalities:

- **Sales Microservice**: To be developed with Golang and Gin for managing sales and orders.
- **Message Broker**: RabbitMQ will be used for communication between microservices.

This setup ensures a scalable and maintainable system, with clear separation of concerns between different modules and services.

🛠️ Technologies

- **Backend:**
  - NestJS
  - GraphQL (Apollo Server)
  - TypeScript
  - PostgreSQL
  - Prisma ORM
  - Docker for containerization
  - Apollo Client for testing GraphQL API

## ⚙️ Setup

### 1. **Clone the repository:**

```bash
  git clone https://github.com/YourUsername/ecommerce-backend
  cd ecommerce-backend
```

Copiar código
### 1. **Install dependencies**
```bash
yarn install
```

### 2. Set up environment variables:
Rename the .env.template file to .env and configure the following variables:

env
```bash
DB_USER=
DB_NAME=
DB_PASSWORD=
DATABASE_URL=
PORT=
```

### 3. 🐋 Docker Setup:
To run the application using Docker:

```bash
  docker-compose up -d
```

### 4. Run Prisma migrations:
```bash
  npx prisma migrate dev
```

### 5. Generate Prisma Client:
```bash
  npx prisma generate
```
### 6. Run the development server:
```bash
  yarn start:dev
```

### 7. Access the API:

You can access the API at http://localhost:3000/graphql. Use a tool like Apollo Client or Postman to interact with the GraphQL API.
