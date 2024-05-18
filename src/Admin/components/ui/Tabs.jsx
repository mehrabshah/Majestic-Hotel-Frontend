import { createContext, useContext, useState } from 'react';

const TabsContext = createContext();

export default function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
}

function TabList({ children }) {
  return <div className="flex mb-3">{children}</div>;
}

function Tab({ children, index }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  return (
    <button
      className={` py-2 px-2 border-b-2 border-transparent   font-extrabold  bg-brand-600 text-brand-50 text-sm    ${
        activeTab === index ? 'border-blue-500' : 'text-gray-500'
      }`}
      onClick={() => setActiveTab(index)}
    >
      {children}
    </button>
  );
}

function TabPanels({ children }) {
  return <div>{children}</div>;
}

function TabPanel({ children, index }) {
  const { activeTab } = useContext(TabsContext);

  return activeTab === index ? children : null;
}

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.TabPanels = TabPanels;
Tabs.TabPanel = TabPanel;
