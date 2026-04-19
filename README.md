# PWA E-commerce Web Application

## Overview

This project is a mobile e-commerce web application developed using Python and Flask, enhanced with Progressive Web App (PWA) technologies. The main aim of the project is to evaluate the impact of PWA features on performance, reliability, and offline usability in a mobile e-commerce context.

Two comparable versions of the application were used:

- **Baseline version**: a traditional web application without PWA features  
- **PWA version**: an enhanced version with Service Workers, caching, and offline support  

---

## Technologies Used

- Python  
- Flask  
- HTML, CSS, JavaScript  
- Service Workers  
- Web App Manifest  
- Google Lighthouse  
- Chrome DevTools  
- Git and GitHub  

---

## Project Structure

The project is organised as follows:
FINAL_PROJECT/
│
├── app/
│ ├── static/
│ │ ├── assets/
│ │ ├── products/
│ │ ├── pwa/
│ │ │ ├── manifest.json
│ │ │ └── register-sw.js
│ │ └── sw.js
│ │
│ ├── templates/
│ │ ├── ecommerce/
│ │ ├── includes/
│ │ ├── layouts/
│ │ ├── pages/
│ │ └── products/
│ │
│ ├── __init__.py
│ ├── config.py
│ ├── models.py
│ ├── util.py
│ └── views.py
│
├── run.py
├── requirements.txt
└── README.md


---

## Main Features

- Product browsing  
- Responsive design  
- PWA support  
- Offline functionality  
- Performance comparison (baseline vs PWA)  

---

## PWA Features

- Service Worker for caching and offline access  
- Web App Manifest for installability  
- Improved reliability and reduced network dependency  

---

## How to Run the Application

### 1. Create a virtual environment

```bash
python -m venv venv
```
### 2. Activate (Windows PowerShell)
```powershell
.\venv\Scripts\Activate
```
### 3. Install dependencies
```bash
pip install -r requirements.txt
```
### 4. Run the application
```bash
python run.py
```
### 5. Open in browser
http://127.0.0.1:5000/products/

### Testing and Evaluation

The application was evaluated using:

- Google Lighthouse for performance metrics
- Chrome DevTools for offline testing
- Performance Metrics Used
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Speed Index
- Total Blocking Time (TBT)
- Cumulative Layout Shift (CLS)
### Evaluation Approach

The project compares:

- a baseline version without PWA
- a PWA-enhanced version

This allowed evaluation of the impact of PWA technologies on performance and usability.

### Summary of Findings
Similar overall Lighthouse score
Improvements in FCP, LCP, and Speed Index
Significant improvement in offline functionality
PWA works offline, baseline does not
### Limitations
- No user testing
- Simplified e-commerce system
- No authentication or payment features
### Future Work
- Add user accounts
- Add shopping cart and payments
- Improve UI/UX
- Refine caching strategies
- Conduct user testing
### Author

Luis Alexander Yunga Mendoza

### Academic Context

This project was developed as part of the COMP1682 Final Year Project at the University of Greenwich.
