import { data } from "@/app/data/data.js";

export default function DynamoLogos() {
  const items = data;
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-center justify-center">
      {items.map((item) => (
        <li key={item.id} className="flex gap-5 bg-sky-400 p-10">
          {item.id} = <span>{item.logo}</span>
        </li>
      ))}
    </div>
  );
}
