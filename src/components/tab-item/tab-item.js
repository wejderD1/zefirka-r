import "./tab-item.scss";

function TabItem({id, title, activeTab, setActiveTab}) {
  
  const onToggleTab = () => {
    setActiveTab(id);
    console.log("id = ", id);
  }
  
  return (
    <li 
    key={id}
    className={activeTab === title ? "tabs__item item_active" : "tabs__item"}
    onClick={onToggleTab}
  >{title}</li>
  );
}

export default TabItem;