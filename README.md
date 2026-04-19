# fyp-pwa-ecommerce
# fyp-pwa-ecommerce
# PWA E-commerce Web Application

## Overview

This project is a mobile e-commerce web application developed using Python and Flask, enhanced with Progressive Web App (PWA) technologies. The main aim of the project is to evaluate the impact of PWA features on performance, reliability, and offline usability in a mobile e-commerce context.

Two comparable versions of the application were used during the project:

- **Baseline version**: a traditional web application without PWA features
- **PWA version**: an enhanced version with a Service Worker, caching strategies, and a Web App Manifest

This comparison allowed the performance and behaviour of both implementations to be evaluated under similar conditions.

---

## Technologies Used

- Python
- Flask
- HTML
- CSS
- JavaScript
- Service Worker
- Web App Manifest
- Google Lighthouse
- Chrome DevTools
- Git and GitHub

---

## Project Structure

The project is organised into backend, frontend, and PWA-related components.

- `run.py`  
  Entry point used to run the Flask application.

- `app/`  
  Main application package containing the backend logic, templates, static files, and views.

- `app/views.py`  
  Contains the Flask routes and the main application behaviour.

- `app/templates/`  
  Contains the HTML templates used to render the user interface.

- `app/static/`  
  Contains static assets such as CSS, JavaScript, images, and PWA files.

- `app/static/sw.js`  
  Service Worker file used to support caching and offline functionality.

- `app/static/pwa/manifest.json`  
  Web App Manifest file used to define metadata for the installable application.

- `requirements.txt`  
  Python dependencies required to run the project.

- `README.md`  
  Project documentation.

---

## Main Features

- Product listing and browsing
- Product detail pages
- Responsive mobile-friendly interface
- Progressive Web App support
- Offline functionality using cached resources
- Performance comparison between baseline and PWA versions

---

## PWA Features

The PWA version includes the following features:

- **Service Worker**  
  Used to intercept requests, cache resources, and support offline access.

- **Web App Manifest**  
  Provides application metadata such as name, icon, and display mode.

- **Caching Strategy**  
  Used to improve reliability and reduce network dependency.

- **Offline Access**  
  Previously visited resources can still be loaded when the device is offline.

---

## How to Run the Application

### 1. Create and activate a virtual environment

```bash
python -m venv venv

Activate it on Windows PowerShell:

.\venv\Scripts\Activate
2. Install dependencies
pip install -r requirements.txt
3. Run the application
python run.py
4. Open in the browser
http://127.0.0.1:5000/products/
Testing and Evaluation

The application was evaluated using:

Google Lighthouse for performance metrics
Chrome DevTools for offline testing and Service Worker validation
Performance Metrics Used
First Contentful Paint (FCP)
Largest Contentful Paint (LCP)
Speed Index
Total Blocking Time (TBT)
Cumulative Layout Shift (CLS)
Evaluation Approach

The project compares:

a baseline version without PWA functionality
a PWA-enhanced version with caching and offline support

This made it possible to evaluate the practical impact of PWA technologies on web application behaviour.

Summary of Findings

The evaluation showed that:

the overall Lighthouse score remained similar between versions
the PWA version showed improvements in some loading metrics
the most important difference was offline functionality
the baseline version failed when offline
the PWA version remained functional by serving cached resources

This demonstrates that PWA technologies improve application reliability and usability, especially in environments with unstable connectivity.

Limitations
No real-user testing was conducted
The application is a simplified e-commerce prototype
Advanced features such as authentication and payments were not included
Future Work

Possible future improvements include:

adding user authentication
adding shopping cart and payment features
improving UI/UX design
refining caching strategies
conducting user-based usability testing
Author

Luis Alexander Yunga Mendoza

Academic Context

This project was developed as part of the COMP1682 Final Year Individual Project at the University of Greenwich.
