# FAQ Accordion Component

This project is a responsive FAQ accordion built with **React**. It was styled to closely match the provided design for both desktop and mobile layouts. The component features a collapsible accordion with plus/minus icons, a star icon header, and adaptive background patterns.

---

## 🚀 Features
- Fully responsive across **desktop**, **tablet**, and **mobile** devices.
- Accordion with **expand/collapse** functionality.
- Custom icons:
  - ⭐ Star icon in the header.
  - ➕ / ➖ icons for toggling questions.
- Different **background patterns** for desktop and mobile.
- Smooth and clean card layout with shadow and rounded corners.

---

## 🛠️ Tech Stack
- **React (Vite or CRA)**
- **CSS3** for styling and responsiveness
- Static assets served from React’s **public** folder

---

## 📂 Project Structure

faq-accordion/
├── public/
│ └── assets/
│ └── images/
│ ├── background-pattern-desktop.svg
│ ├── background-pattern-mobile.svg
│ ├── icon-star.svg
│ ├── icon-plus.svg
│ └── icon-minus.svg
├── src/
│ ├── App.js
│ ├── index.css
│ └── main.jsx
└── README.md


---

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/faq-accordion.git
   cd faq-accordion

   Install dependencies:

npm install


Run the app:

npm start


or (if using Vite)

npm run dev


Open your browser at:

http://localhost:3000


(or the Vite port shown in terminal)

🎨 Styling

Background images are served from /public/assets/images/

index.css includes mobile-first responsive design

Breakpoints:

≤ 480px → Mobile (uses mobile background, tighter spacing)

≥ 480px → Desktop and Tablet (uses desktop background)

🧑‍💻 Credits

Challenge inspired by Frontend Mentor.

Built by Barnabas Olayinka Affonshike.
