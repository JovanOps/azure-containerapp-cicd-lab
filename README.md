# 🚀 Azure Container App CI/CD Pipeline

## 📌 Overview

This project demonstrates a complete **CI/CD pipeline** using **GitHub Actions**, **Docker**, and **Microsoft Azure Container Apps**.

The application is automatically built, pushed to Azure Container Registry (ACR), and deployed to Azure Container Apps on every push to the `main` branch.

---

## 🧱 Architecture

* **GitHub Actions** – CI/CD automation
* **Docker** – containerization
* **Azure Container Registry (ACR)** – image storage
* **Azure Container Apps** – hosting and deployment
* **Azure Service Principal** – authentication & authorization

---

## ⚙️ CI/CD Workflow

On every push to `main`:

1. Checkout repository
2. Authenticate to Azure using Service Principal
3. Login to Azure Container Registry
4. Build Docker image
5. Push image to ACR
6. Update Azure Container App with new image

---

## 🔐 Authentication & Security

Authentication is handled using an **Azure Service Principal** stored securely in GitHub Secrets:

* `clientId`
* `clientSecret`
* `subscriptionId`
* `tenantId`

---

## 🧠 Key Challenge & Solution

### ❌ Problem

Deployment initially failed due to:

Authorization error:
Microsoft.App/containerApps/read

### ✅ Solution

Resolved by assigning proper RBAC role:

* Assigned **Contributor role** to Service Principal
* Scope: **Resource Group (`rg-containerapp-lab`)**

This allowed the pipeline to successfully interact with Azure Container Apps.

---

## 📂 Project Structure

```
azure-containerapp-cicd-lab/
│
├── .github/workflows/
│   └── deploy.yml
│
├── app/
│   ├── Dockerfile
│   └── (application code)
│
└── README.md
```

---

## 🐳 Docker Build

Docker image is built using:

```
docker build -f ./app/Dockerfile -t <ACR_NAME>.azurecr.io/demo-app:<tag> ./app
```

---

## 🌐 Deployment

The application is deployed to Azure Container Apps using:

```
az containerapp update \
  --name demo-app-container \
  --resource-group rg-containerapp-lab \
  --image <ACR_NAME>.azurecr.io/demo-app:<tag>
```

---

## 🔄 Continuous Deployment

Every new commit automatically:

* Builds a new Docker image
* Pushes it to ACR
* Deploys it to Azure

No manual steps required.

---

## 📸 Live Demo

👉 (https://demo-app-container.proudforest-2c949ca2.westeurope.azurecontainerapps.io/)

---

## 💼 Skills Demonstrated

* CI/CD pipeline design
* Docker containerization
* Azure Container Apps deployment
* Azure RBAC (IAM) troubleshooting
* GitHub Actions automation
* Debugging real-world cloud issues

---

## 🚀 Future Improvements

* Add staging environment
* Implement environment variables & secrets
* Add health checks & monitoring
* Infrastructure as Code (Terraform)

---

## 👨‍💻 Author

**Jovan Ljusic**

---

## ⚡ Final Note

This project reflects a real-world DevOps workflow, including debugging Azure RBAC permission issues and implementing a fully automated deployment pipeline.

---
