# 🚍 SwiftBus Egypt

> A complete intercity trip booking system for Egypt  
> [🌐 Visit Live Project](https://swiftbusegypt.com)

SwiftBus is a full-stack web application that allows users to search, book, and pay for bus tickets between Egyptian cities, with real-time seat availability, secure online payments, and a dynamic admin dashboard.

---

## 🎯 Project Overview

**Client Website Features:**
- Search for trips between cities
- Select available seats in real-time
- Seats are temporarily locked for 10 minutes
- Secure online payment using Paymob
- Download e-ticket after payment
- Apply discount vouchers
- Receive email confirmations via SendGrid

**Admin Dashboard Features:**
- Create, edit, and delete trips
- Dashboard with booking and revenue statistics
- Manage employees and monitor their performance
- Generate trip reports with payment status
- Manage customers and their tickets
- Create and manage discount vouchers
- Control frontend content of the public website

---

## 🌐 Live Site

🔗 [https://swiftbusegypt.com](https://swiftbusegypt.com)

---

## ⚙️ Tech Stack

| Layer        | Tech Used                                                   |
|--------------|-------------------------------------------------------------|
| Backend      | Node.js (Express), Bun, TypeScript                          |
| Frontend     | EJS templating                                              |
| Validation   | Zod                                                         |
| ORM & DB     | Prisma ORM, MySQL                                           |
| Payment      | Paymob                                                      |
| Emails       | SendGrid                                                    |
| Scheduling   | RRule                                                       |
| Tools        | ESLint, Husky, Docker, Postman, Swagger                     |

---

## 📸 Client Website Screenshots

### Homepage
![Homepage](./screenshots/homepage.png)

### Search Form
![Search Form](./screenshots/search-form.png)

### Trips Selection
![Trips Selection](./screenshots/trips_selection.jpeg)

### Seat Selection
![Seat Selection](./screenshots/seat-selection.png)

### Payment
![Payment](./screenshots/payment.png)

### Success Ticket
![Success Ticket](./screenshots/success-ticket.png)

### Ticket Preview
![Ticket Preview](./screenshots/ticket-preview.png)

---

## 🛠 Admin Dashboard Screenshots

### Dashboard Home
![Dashboard Home](./screenshots/dashboard_home.png)

### Dashboard Booking
![Dashboard Booking](./screenshots/dashboard_booking.png)

### Dashboard Reservation
![Dashboard Reservation](./screenshots/dashboard_reservation.png)

### Dashboard Tickets
![Dashboard Tickets](./screenshots/dashboard_tickets.png)

### Dashboard AddTrip
![Dashboard AddTrip](./screenshots/dashboard_addTrip.png)

### Dashboard EditTrip
![Dashboard EditTrip](./screenshots/dashboard_editTrip.png)

### Dashboard ViewTrips
![Dashboard ViewTrips](./screenshots/dashboard_viewTrips.png)

### Dashboard AddCity
![Dashboard AddCity](./screenshots/dashboard_addCity.png)

### Dashboard ViewCites
![Dashboard ViewCites](./screenshots/dashboard_viewCites.png)

### Dashboard AddStation
![Dashboard AddStation](./screenshots/dashboard_addStation.png)

### Dashboard ViewStations
![Dashboard ViewStations](./screenshots/dashboard_viewStations.png)

### Dashboard AddEmployee
![Dashboard AddEmployee](./screenshots/dashboard_addEmployee.png)

### Dashboard ViewEmployees
![Dashboard ViewEmployees](./screenshots/dashboard_viewEmployees.png)

### Dashboard AddVoucher
![Dashboard AddVoucher](./screenshots/dashboard_addVoucher.png)

### Dashboard ViewVouchers
![Dashboard ViewVouchers](./screenshots/dashboard_viewVouchers.png)

### Dashboard ViewCustomer
![Dashboard ViewCustomer](./screenshots/dashboard_viewCoustmer.png)

### Dashboard EditFrontSections
![Dashboard EditFrontSections](./screenshots/dashboard_editFrontSections.png)

### Dashboard EditFrontFooter
![Dashboard EditFrontFooter](./screenshots/dashboard_editFrontFooter.png)


---

## 🧠 What I Learned

- How to build and structure a scalable full-stack application using modern tools.
- Managing data validation and error handling with **Zod**.
- Building a real-time seat locking mechanism with timers to avoid double booking.
- Secure integration of **Paymob** payment gateway.
- Automating emails with **SendGrid** and dynamic templates.
- Creating admin-level tools and dashboards with role-based access.
- Using **Bun** for faster runtime performance over traditional Node.js setups.
- Writing clean code and enforcing consistency using **ESLint** and **Husky** pre-commit hooks.

---

## 📬 Contact

Want to collaborate, hire, or ask questions?

- GitHub: [@BasselSallam2](https://github.com/BasselSallam2)
- LinkedIn: [Bassel Sallam](https://www.linkedin.com/in/basselsallam)

