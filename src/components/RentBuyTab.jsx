import React,{useState} from 'react'

const RentBuyTab = () => {
    const tabs = [
  { id: "rent", label: "Rent", content: "Rent content" },
  { id: "buy", label: "Buy", content: "Buy content" },
];

const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div>
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
  {tabs.map(
    (tab) =>
      activeTab === tab.id && <p key={tab.id}>{tab.content}</p>
  )}
</div>
    </div>
  )
}

export default RentBuyTab