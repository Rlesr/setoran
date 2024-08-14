import React from "react";
import logoPT from "../assets/Pavicon/koperasiLogo.png";
import { Bell, Menu, Moon, User } from "lucide-react";
import Button from "../components/Button";
import useSidebarStore from "../stores/useSidebarStore";

const PageHeader: React.FC = () => {
  const { toggle } = useSidebarStore(); 

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button onClick={toggle} variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img src={logoPT} className="h-6" />
        </a>
      </div>
      <div></div>
      <div className="flex flex-shrink-0 md:gap-2">
        <Button size="icon" variant="ghost">
          <Moon />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
