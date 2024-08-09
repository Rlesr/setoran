import React from "react";
import logoPT from "../assets/koperasiLogo.png";
import { Menu } from "lucide-react";
import Button from "../components/Button";

const PageHeader: React.FC = () => {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img src={logoPT} className="h-6" />
        </a>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};
export default PageHeader;
