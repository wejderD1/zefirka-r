import "./tab-content.scss";

function TabContent({ id, activeTab, children }) {
  return activeTab === id ? (
    <div className="tab__content">{children}</div>
  ) : null;
}

export default TabContent;
