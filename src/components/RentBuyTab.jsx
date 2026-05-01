import React, { useState } from 'react';
import Rent from './Rent';
import Buy from './Buy';

const RentBuyTab = () => {
  const tabs = [
    { id: "rent", label: "Rent", content: Rent },
    { id: "buy", label: "Buy", content: Buy },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeTabData = tabs.find(tab => tab.id === activeTab);
  const ActiveComponent = activeTabData?.content;

  return (
    <div className=''>
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4">
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
};

export default RentBuyTab;