import { Button, Dropdown, Menu } from "antd";
import React from "react";

const ProfileDropdown = () => {
  const handleMenuClick = (e) => {
    if (e.key === "logout") {
      // Handle logout logic here
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="change_password">Change Password</Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Button type="text" style={{ color: "light" }}>
        Rasel Mondol <i className="anticon anticon-caret-down" />
      </Button>
    </Dropdown>
  );
};

export default ProfileDropdown;
