import { data } from "@/app/data/data.js";
import { useState, useEffect, useMemo } from "react";

interface LogoItem {
  id: number;
  logo: JSX.Element;
  category: string;
  name: string;
  color: string;
  size: string;
  random: boolean;
}

export default function DynamoLogos({
  category,
  color,
  name,
  random,
}: {
  category?: string;
  color?: string;
  name?: string;
  size?: string;
  random?: boolean;
}) {
  const items = data;
  const [displayItem, setDisplayItem] = useState<LogoItem | null>();

  const filteredItems = useMemo(() => {
    let filtered = items;

    if (category) {
      filtered = filtered.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (name) {
      filtered = filtered.filter((item) => item.name === name);
    }

    if (color) {
      filtered = filtered.filter((item) => item.color === color);
    }

    return filtered;
  }, [category, color, name, items]);

  useEffect(() => {
    const selectRandomItem = (items: LogoItem[]) => {
      const randomIndex = Math.floor(Math.random() * items.length);
      return items[randomIndex] || null;
    };

    if (random || (!category && !color && !name)) {
      setDisplayItem(selectRandomItem(items));
    } else {
      setDisplayItem(
        filteredItems.length ? selectRandomItem(filteredItems) : null
      );
    }
  }, [filteredItems, random, category, color, name, items]);

  return (
    <div className="grid grid-cols-1 items-center justify-center">
      {displayItem && <>{displayItem.logo}</>}
    </div>
  );
}
