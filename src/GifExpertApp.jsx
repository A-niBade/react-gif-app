import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [category, setCategory] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    const cases = category.some(
      (cat) => cat.toLowerCase() === newCategory.toLowerCase()
    );
    if (cases) return;
    setCategory([newCategory, ...category]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {category.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
