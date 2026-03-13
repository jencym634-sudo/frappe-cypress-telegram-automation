# Frappe Automation Testing with Cypress & Telegram Alerts

## Project Overview
This project demonstrates **end-to-end automation testing** of a Frappe application using **Cypress**.  
The automated test logs into the system, creates a new **Grocery Item**, validates the creation, and sends a **Telegram notification** with the test result.

This simulates a **real automation pipeline used in modern QA workflows**.

---

## Tech Stack
- **Frappe Framework** – Backend web application framework  
- **Cypress** – End-to-end testing framework  
- **Node.js** – Script execution environment  
- **Telegram Bot API** – Real-time notification service  

---

## Features
✔ Automated login testing  
✔ Automated record creation in Frappe  
✔ UI validation using Cypress assertions  
✔ Telegram alerts after test execution  
✔ Headless test execution via CLI  

---

## Project Structure
frappe-cypress-test
│
├── cypress/
│ └── e2e/
│ └── grocery.cy.js
│
├── sendTelegram.js
├── cypress.config.js
├── package.json
└── README.md
---

## Test Workflow
Run Cypress Test
↓
Automated Login
↓
Create Grocery Item
↓
Verify Item Creation
↓
Send Telegram Notification

---

##  How to Run the Project

### 1️ Install dependencies


npm install


### 2️ Run Cypress Test


npm test


This will:

1. Run the Cypress test  
2. Create a Grocery Item in the Frappe app  
3. Send a Telegram notification with the result  

---

## Telegram Notification Example


✅ Cypress Test Passed for Frappe Grocery App


---

## Learning Outcome
This project demonstrates how **automation testing can be integrated with real-time alerts**, similar to CI/CD pipelines used in modern software development.

---




