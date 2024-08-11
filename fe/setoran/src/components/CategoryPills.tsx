import React from "react";
import Button from "./Button";

type CategoryPillProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

const CategoryPills: React.FC<CategoryPillProps> = ({
  categories,
  selectedCategory,
  onSelect,
}) => {
  return (
    <div className="flex overflow-x-auto gap-2 p-2">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => onSelect(category)}
          variant={selectedCategory === category ? "dark" : "default"}
          className="py-1 px-3 sm:py-1.5 sm:px-3 md:py-2 md:px-4 rounded-lg whitespace-nowrap "
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryPills;
