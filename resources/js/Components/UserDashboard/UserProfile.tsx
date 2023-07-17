import React, { useState } from 'react';
import UserIcon from '@/Assets/user-icon.jpg';
import UserTabs from './UserTabs';
import PendingAprroval from './PendingAprroval';
import ApprovedCar from './ApprovedCar';
import MySwapedCar from './MySwapedCar';
import MyListedCar from './MyListedCar';
import { Link } from '@inertiajs/react';

const UserProfile = ({ auth,cars }: any) =>  {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="p-4">
          {/* User Profile */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 mb-4">
            <div className="flex flex-col items-center mb-4">
              <img src={auth&&auth.user&&auth.user.image?'/storage/'+auth.user.image:UserIcon} alt="Profile" className="w-44 h-44 " />
              <h2 className="text-lg text-gray-900 font-medium mt-2">
                {auth&&auth.user?auth.user.first_name+' '+auth.user.last_name:'N/A'}
              </h2>
              <p className="text-gray-900 mt-1">
                <b>Email:</b> {auth&&auth.user?auth.user.email:'N/A'}
              </p>
              <p className="text-gray-900 mt-1">
                <b>Contact:</b> {auth&&auth.user?auth.user.phone_no:'N/A'}
              </p>
            </div>
            <div className="flex flex-col">
              <Link href={route('user.editProfile')} className="underline hover: text-dark font-medium mb-2 text-center">Edit Profile</Link>
              <Link href={route('wishlist')} className="underline hover: text-dark font-medium mb-2 text-center">Liked Ads</Link>

              {/* <button className="underline hover: text-dark font-medium mb-2">Inbox</button> */}
            </div>
          </div>
        </div>
        <div className="md:w-2/3 p-4">
          {/* User Table */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-md">
            <UserTabs activeTab={activeTab} onTabClick={handleTabClick} />
            {activeTab === 0 && <MyListedCar cars={cars}/>}
            {activeTab === 1 && <MySwapedCar />}
            {activeTab === 2 && <PendingAprroval />}
            {activeTab === 3 && <ApprovedCar />}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
