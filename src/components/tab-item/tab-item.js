import "./tab-item.scss";

function TabItem({id, title, activeTab, setActiveTab}) {
  
  const onToggleTab = () => {
    setActiveTab(id);
  }
  
  return (
    <li 
    key={id}
    className={`tabs__item ${activeTab === title ? " item_active" : ""}`}
    onClick={onToggleTab}
  >{title}</li>
  );
}

export default TabItem;