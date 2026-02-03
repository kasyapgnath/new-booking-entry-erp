# New Booking Entry – Logistics ERP

This project implements a **New Booking Entry screen** for a Logistics ERP system.  
It is designed for **office administrators** to quickly and accurately enter shipment details with proper validation and immediate feedback.

The UI follows **ERP principles**: simple, clean, data-focused, and efficient.

---

##  Tech Stack

- **React** (with TypeScript)
- **Vite**
- **Tailwind CSS**
- **React Hook Form**

---

##  Features

- ERP-style data entry form
- Sender, Receiver, and Package detail sections
- Auto-calculation of total shipping cost
- Inline field-level validation
- Submit button disabled until form is valid
- Success notification on submission
- Form resets after successful submission
- Responsive layout (desktop & mobile)
- Reusable and type-safe components

---

##  Form Sections

### 1. Sender Details
- Full Name (required)
- Mobile Number (required, 10 digits)
- Email (optional, valid format)

### 2. Receiver Details
- Full Name (required)
- Full Address (required)

### 3. Package Details
- Weight (kg) (required, > 0)
- Rate per kg (INR) (required)
- Total Shipping Cost (auto-calculated, read-only)

---

##  Responsive Behavior

- **Desktop**: Sender and Receiver sections appear side-by-side
- **Mobile**: All sections stack vertically for better readability

---

##  Submission Behavior

- On submit:
  - Final form data is logged to the console
  - A “Booking Successful” notification is shown
  - The form is cleared for the next entry
- No backend integration (as per requirements)

---

## ⚙️ Installation & Running Locally

```bash
npm install
npm run dev```




