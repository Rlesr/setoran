import React from "react";
import Button from "./Button";

// type CategoryListProps = {

// };

const CategoryList: React.FC = () => {
  return (
    <div className="overflow-x-hidden relative">
      <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
        <Button className="py-1 px-3 rounded-lg whitespace-nowrap"> All </Button>
      </div>
    </div>
  );
};
export default CategoryList;
