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
    {
      title: "How does Safe Home Property help me find the ideal property?",
      content:
        "At Safe Home Property Management, we take the time to understand your needs, budget, preferred location, and long-term goals. Whether you’re looking for a residential home, an investment property, or a commercial space, we leverage our network and market knowledge to identify suitable options, arrange viewings, and guide you through every step of the acquisition or leasing process. Our goal is to help you make a confident and informed decision.",
    },
    {
      title: "Can I get a free consultation for my specific situation?",
      content:
        "Yes. We offer a complimentary initial consultation to understand your unique property needs and provide professional guidance. Whether you’re a landlord seeking reliable property management, an investor exploring opportunities, or someone looking to buy or rent, our team will discuss your objectives and recommend the most suitable solutions—without any obligation.",
    },
    {
      title: "What services does Safe Home Property offer for investors?",
      content:
        "We provide comprehensive support for both local and diaspora property investors. Our services include property sourcing, investment advisory, tenant sourcing and screening, lease administration, rent collection, routine property inspections, maintenance coordination, financial reporting, and ongoing property management. We focus on protecting your investment, maximizing returns, and giving you peace of mind through transparent and professional management.",
    },
    {
      title: "Which regions of Abuja do you specialize in?",
      content:
        "We serve clients across the Federal Capital Territory, with particular expertise in Maitama, Asokoro, Wuse, Garki, Jabi, Gwarinpa, Guzape, Katampe, Wuye, Lokogoma, Lugbe, Kado, Life Camp, Apo, Durumi, Dawaki, and surrounding districts. If your property is located elsewhere within Abuja, please contact us—we are continually expanding our coverage and may still be able to assist.",
    },
    {
      title: "How much do your property management services cost?",
      content:
        "Our fees vary depending on the type of property and the level of service required. We offer competitive and transparent pricing with no hidden charges. Contact us for a personalized quotation based on your property’s needs.",
    },
    {
      title: "Do you manage properties for Nigerians living abroad?",
      content:
        "Yes. We specialize in managing properties for diaspora clients who need a trusted team on the ground. We provide regular inspections, tenant management, maintenance coordination, and detailed financial reports, allowing you to monitor your property from anywhere in the world.",
    },
    {
      title: "How often will I receive updates about my property?",
      content:
        "We believe in transparency. Depending on your management plan, you’ll receive regular financial statements, inspection reports, maintenance updates, and prompt notifications regarding any significant issues affecting your property.",
    },
    {
      title: "How do you screen prospective tenants?",
      content:
        "Our screening process includes identity verification, employment and income checks, reference verification, rental history assessment where available, and other due diligence measures to help secure responsible and reliable tenants.",
    },
    {
      title: "What happens if a tenant needs urgent repairs?",
      content:
        "Our team coordinates with trusted maintenance professionals to address urgent issues as quickly as possible. We keep property owners informed and seek approval for significant repairs where required, except in emergencies where immediate action is necessary to protect the property.",
    },
    {
      title: "Why should I choose Safe Home Property Management?",
      content:
        "At Safe Home Property Management, we combine professionalism, transparency, and proactive management to protect your investment. We treat every property as a valuable asset, providing structured systems, timely communication, detailed reporting, and dedicated support that give property owners confidence and peace of mind.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="md:px-20 my-10 rounded-lg shadow w-full">
      <p className="my-5 text-center font-bold text-lg md:text-2xl">
        Frequently Asked Questions
      </p>
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
