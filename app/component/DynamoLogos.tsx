import { data } from "@/app/data/data.js";
import { useState, useEffect } from "react";


interface LogoItem {
  id: number;
  logo: JSX.Element;
  category: string;
  name: string;
  color: string;
  size: string;
  random: boolean;
}

export default function DynamoLogos({ category, color, name, random } : { category?: string, color?: string, name?: string, size?: string, random?: boolean }) {
  const [filteredItems, setFilteredItems] = useState<LogoItem[]>([]); // State to store filtered items
  const [displayItem, setDisplayItem] = useState<LogoItem | null>(null); // State to store the item to display
  const items = data;

 // Function to filter items based on the optional props
 const filterItems = () => {
  let filtered = items;
  console.log("category:", category);
  console.log("color:", color);
  console.log("name:", name);
  console.log("random:", random);

  // Apply filters if props are provided
  if (category) {
    console.log("Filtering by category...");
    filtered = filtered.filter(item => item.category.toLowerCase() === category.toLowerCase());
    console.log("Filtered by category:", filtered); // <-- Check if filtering works correctly
  }

  // Find item by name if provided
  if (name) {
    const itemByName = filtered.find(item => item.name === name);
    setDisplayItem(itemByName || null); // Set item by name or null if not found
    return; // Exit here since name takes precedence
  }

  // Find item by color if provided and name is not
  if (color) {
    const itemByColor = filtered.find(item => item.color === color);
    setDisplayItem(itemByColor || null); // Set item by color or null if not found
    return; // Exit here since color takes precedence if name is not provided
  }

  // If random is true, select a random item from filtered results
  if (random || (!category && !color && !name)) {
    const randomIndex = Math.floor(Math.random() * filtered.length);
    setDisplayItem(filtered[randomIndex] || null);
    return;
  }

  setDisplayItem(null); // Set null if no matches and no random selection
};

// Run the filtering whenever the component mounts or props change
useEffect(() => {
  filterItems();
}, [category, color, name, random]);

// Render the item (random or by name/color/category)
  return (
    <div className="grid grid-cols-1 items-center justify-center">
      {displayItem ? (
        <li key={displayItem.id} className="flex gap-5 bg-sky-400 p-10">
          {displayItem.logo}
        </li>
      ) : (
        <p>No item found</p>
      )}
    </div>
  );
}