import React from "react";
import Sidebar from "../src/layouts/Sidebar";
import PageHeader from "./layouts/PageHeader";
import CategoryPills from "./components/CategoryPills";
import { categories } from "./data/categories";

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>(categories[0]);

  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <Sidebar />
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 bg-white z-10 pb-4">
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
          <div className="grid gap-4"> </div>
        </div>
      </div>
    </div>
  );
};

export default App;
