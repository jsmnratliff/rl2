import React from 'react';

const SidebarButton = ({ label, onClick }) => {
  return (
    <button className="sidebar-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default SidebarButton;