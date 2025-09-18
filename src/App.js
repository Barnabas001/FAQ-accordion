import { useState } from "react";

const images = [
  {
    id: 1,
    src: "./assets/images/icon-star.svg",
    title: "star-icon",
  },
  {
    id: 2,
    src: "./assets/images/background-pattern-desktop.svg",
    title: "background-pattern-desktop",
  },
  {
    id: 3,
    src: "./assets/images/background-pattern-mobile.svg",
    title: "background-pattern-mobile",
  },
  {
    id: 4,
    src: "./assets/images/icon-minus.svg",
    title: "icon-minus",
  },
  {
    id: 5,
    src: "./assets/images/icon-plus.svg",
    title: "icon-plus",
  },
];

const faqs = [
  {
    title: "What is Frontend Mentor, and how will it help me?",
    text: `Frontend Mentor offers realistic coding challenges to help developers
          improve their frontend coding skills with projects in HTML, CSS, and
          JavaScript. It's suitable for all levels and ideal for portfolio
          building.`,
  },
  {
    title: "Is Frontend Mentor free?",
    text: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.`,
  },
  {
    title: "Can I use Frontend Mentor projects in my portfolio?",
    text: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!`,
  },
  {
    title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    text: `The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.`,
  },
];

export default function App() {
  return (
    <div>
      <Question data={faqs} image={images} />
    </div>
  );
}

function Question({ data, image }) {
  const [question, setQuestion] = useState(null);

  return (
    <div className="container">
      <div className="faq-header">
        <img src={image[0].src} alt={image[0].title} className="star-icon" />
        <h1>FAQs</h1>
      </div>
      {data.map((el, i) => (
        <QuestionAndAnswer
          open={question}
          onOpen={setQuestion}
          title={el.title}
          key={el.title}
          num={i}
        >
          {el.text}
        </QuestionAndAnswer>
      ))}
    </div>
  );
}

function QuestionAndAnswer({ open, onOpen, title, num, children }) {
  const isOpen = num === open;
  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <h3 className="title">{title}</h3>
      <img
        src={
          isOpen
            ? "/assets/images/icon-minus.svg"
            : "/assets/images/icon-plus.svg"
        }
        alt={isOpen ? "minus icon" : "plus icon"}
        className="icon"
      />
      {isOpen && <p className="content-box">{children}</p>}
    </div>
  );
}
