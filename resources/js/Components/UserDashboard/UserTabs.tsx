import React, { useState } from 'react';

const UserTabs = ({ activeTab, onTabClick }:any) => {
    const tabs = [
        { id: 0, label: 'My Listed Cars' },
        { id: 1, label: 'My Swapped Cars' },
        { id: 2, label: 'Pending Approval' },
        { id: 3, label: 'Approved Cars' },
    ];

    const handleTabClick = (tabId:any) => {
        onTabClick(tabId);
    };

    return (
        <div className="bg-black">
            <div className="grid grid-cols-2 md:grid-cols-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`${activeTab === tab.id ? 'bg-green-500' : 'bg-black'} text-white p-3 border border-gray-300`}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default UserTabs;
