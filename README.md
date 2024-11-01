## Project Overview
This project implements a full-stack microservices application with user authentication features deployed on Kubernetes using Minikube. The system includes user registration, login, and password reset functionality.

## Architecture
- **Frontend Service**: React-based UI for user interactions
- **Backend Service**: Express.js API for handling requests
- **Database Service**: MongoDB for data storage
- **Authentication Service**: JWT-based user authentication

## Technology Stack
- Frontend: React.js
- Backend: Node.js with Express
- Database: MongoDB
- Containerization: Docker
- Orchestration: Kubernetes (Minikube)
- Authentication: JSON Web Tokens (JWT)

## Features
1. User Authentication:
   - User Registration
   - User Login
   - Password Reset Functionality

2. Microservices Architecture:
   - Separate services for frontend, backend, and database
   - Independent scaling and deployment
   - Service communication via REST APIs

3. Kubernetes Deployment:
   - 3 replicas for each service
   - Pod management and orchestration
   - Service discovery and load balancing

## Prerequisites
- Docker Desktop
- Minikube v1.34.0 or later
- kubectl CLI tool
- Node.js v16 or later

## Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/AsimSharif1367/MLOPS_A2.git
cd MLOPS_A2
```

2. Start Minikube:
```bash
minikube start --driver=docker
```

3. Build Docker images:
```bash
docker-compose build
```

4. Load images into Minikube:
```bash
minikube image load mlops-auth-app-frontend:latest
minikube image load mlops-auth-app-backend:latest
```

5. Deploy to Kubernetes:
```bash
kubectl apply -f k8s/mongodb-deployment.yaml
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml
```

## Project Structure
```
mlops-auth-app/
├── frontend/               # React frontend application
│   ├── src/               # Source code
│   ├── public/            # Public assets
│   └── Dockerfile         # Frontend container configuration
├── backend/               # Express.js backend service
│   ├── src/              # Source code
│   └── Dockerfile        # Backend container configuration
├── k8s/                  # Kubernetes configuration files
│   ├── frontend/         # Frontend deployment configs
│   ├── backend/          # Backend deployment configs
│   └── mongodb/          # Database deployment configs
└── docker-compose.yml    # Docker compose configuration
```

## Usage Instructions

1. Access the application:
```bash
minikube service frontend-service
```

2. Testing the Authentication:
   - Create a new account using the signup page
   - Login with your credentials
   - Test the password reset functionality

3. Monitor the deployment:
```bash
kubectl get pods
kubectl get services
```

## Troubleshooting

1. Check pod status:
```bash
kubectl get pods
kubectl describe pod 
```

2. View logs:
```bash
kubectl logs -f deployment/frontend
kubectl logs -f deployment/backend
```

## Assignment Requirements Met
1. ✓ Microservices Architecture
2. ✓ User Authentication Implementation
3. ✓ Docker Containerization
4. ✓ Kubernetes Deployment
5. ✓ Service Replication (3 replicas)
6. ✓ Documentation

## References
- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [Docker Documentation](https://docs.docker.com/)
- [React Documentation](https://reactjs.org/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
