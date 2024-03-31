import React, { useState } from 'react';
import NAvbar from '../component/NAvbar';
import Sidebar from '../component/Sidebar';
import RegistrationPage from './registration';
import Assessment from '../component/Assesment';
import AddUserModule from '../component/AddUserModule';


const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any action with the searchQuery, such as sending it to an API or updating state
    console.log('Search query:', searchQuery);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
    <NAvbar Grid item xs={8}></NAvbar>
    <RegistrationPage></RegistrationPage>
    {/* <Sidebar></Sidebar> */}
    <Assessment></Assessment>
    <AddUserModule></AddUserModule>
    </div>
  );
};

export default Dashboard;
