import React from 'react';
import SidebarButton from './SidebarButton';

const Sidebar = ({ visible }) => {
  return (
    <div className={`sidebar ${visible ? 'visible' : 'hidden'}`}>
      <div className="sidebar-content">
        <SidebarButton label="Button 1" />
        <SidebarButton label="Button 2" />
        <SidebarButton label="Button 3" />
        <SidebarButton label="Button 4" />
      </div>
    </div>
  );
};

export default Sidebar;