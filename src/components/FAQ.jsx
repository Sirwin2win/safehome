import { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="bg-gray-100 mb-2 rounded-lg overflow-hidden md:px-20">
        
      <button
        onClick={onClick}
        className="w-full text-left flex justify-between items-center py-4 px-4 focus:outline-none"
      >
        <span className="font-medium">{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="pb-4 px-4 text-gray-600">{content}</div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    { title: "How does SafeHomes Property help me find the ideal property?",
         content: "How does SafeHomes Property help me find the ideal property?" },
    { title: "Can i get a free consultation for my specific situation?",
         content: "Can i get a free consultation for my specific situation?" },
    { title: "What services does SafeHomes Property offer for investors?",
         content: "What services does SafeHomes Property offer for investors?" },
    { title: "Which Regions of Abuja do you specialize in?",
         content: "Which Regions of Abuja do you specialize in?" },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="md:px-20 my-10 rounded-lg shadow w-full">
        <p className="my-5 text-center font-bold md:text-2xl">Frequently Asked Questions</p>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === index}
          onClick={() => handleClick(index)}
          className=""
        />
      ))}
    </div>
  );
}