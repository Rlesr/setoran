import React from "react";
import { Outlet } from "react-router-dom";
// import NavBar from "../components/NavBar"; // You can create a NavBar component for users

const UserLayout: React.FC = () => {
  return (
    <div>
      {/* <NavBar /> */}
        
            <h1>User Layout</h1>
      <main>
        {/* Child routes will render here */}
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
