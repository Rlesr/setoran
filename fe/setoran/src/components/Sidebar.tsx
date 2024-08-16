import {
  BarChart,
  ChevronDown,
  ChevronUp,
  LayoutDashboard,
  Package,
  ShoppingCart,
} from "lucide-react";
import { Children, ElementType, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import useSidebarStore from "../stores/useSidebarStore";

const Sidebar = () => {
  const { isLargeOpen, isSmallOpen, close } = useSidebarStore();

  return (
    <>
      <aside
        className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 ${
          isLargeOpen ? "lg:hidden" : "lg:flex"
        }`}
      >
        <SmallSidebarItem Icon={LayoutDashboard} title="Dashboard" url="/admin" />
        <SmallSidebarItem Icon={ShoppingCart} title="Sales" url="/admin/sales" />
        <SmallSidebarItem Icon={Package} title="Purchase" url="/admin/purchase" />
        <SmallSidebarItem Icon={BarChart} title="Report" url="/admin/report" />
      </aside>
      {isSmallOpen && (
        <div
          onClick={close}
          className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50"
        />
      )}
      <aside
        className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 ${
          isLargeOpen ? "lg:flex" : "lg:hidden"
        } ${isSmallOpen ? "flex z-[999] bg-white dark:bg-black max-h-screen" : "hidden"}`}
      >
        <div className="lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-background-light dark:bg-background-dark"></div>
        <LargeSidebarSection>
          <LargeSidebarItem isActive IconOrImgUrl={LayoutDashboard} title="Home" url="/" />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="Explore">
          <LargeSidebarItem IconOrImgUrl={ShoppingCart} title="Sales" url="/admin/sales" />
        </LargeSidebarSection>
      </aside>
    </>
  );
};

type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

const SmallSidebarItem: React.FC<SmallSidebarItemProps> = ({ Icon, title, url }) => (
  <a
    href={url}
    className={twMerge(
      "py-4 px-1 flex flex-col items-center rounded-lg gap-1",
      "btn-ghost" 
    )}
  >
    <Icon className="w-6 h-6" />
    <div className="text-sm">{title}</div>
  </a>
);

type LargeSidebarSectionProps = {
  children: ReactNode;
  title?: string;
  visibleItemCount?: number;
};

const LargeSidebarSection: React.FC<LargeSidebarSectionProps> = ({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = Children.toArray(children).flat();
  const showExpandButton = childrenArray.length > visibleItemCount;
  const visibleChildren = isExpanded ? childrenArray : childrenArray.slice(0, visibleItemCount);
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;

  return (
    <div>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded(prev => !prev)}
          variant="ghost"
          className="w-full flex items-center rounded-lg gap-4 p-3"
        >
          <ButtonIcon className="w-6 h-6" />
          <div>{isExpanded ? "Show Less" : "Show More"}</div>
        </Button>
      )}
    </div>
  );
};

type LargeSidebarItemProps = {
  IconOrImgUrl: ElementType | string;
  title: string;
  url: string;
  isActive?: boolean;
};

const LargeSidebarItem: React.FC<LargeSidebarItemProps> = ({
  IconOrImgUrl,
  title,
  url,
  isActive = false,
}) => (
  <a
    href={url}
    className={twMerge(
      "w-full flex items-center rounded-lg gap-4 p-3",
      "btn-ghost", 
      isActive ? "font-bold hover:bg-secondary" : undefined
    )}
  >
    {typeof IconOrImgUrl === "string" ? (
      <img src={IconOrImgUrl} className="w-6 h-6 rounded-full" />
    ) : (
      <IconOrImgUrl className="w-6 h-6" />
    )}
    <div className="whitespace-nowrap overflow-hidden text-ellipsis">{title}</div>
  </a>
);

export default Sidebar;
