import { useState } from "react";

interface AccordianItem {
  id: number;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordianItem[];
}

export const Accordian: React.FC<AccordionProps> = ({ items }) => {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSections = (id: number) => {
    setOpenSections((prev) =>
      prev.includes(id)
        ? prev.filter((sectionId) => sectionId !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      {items.map((item) => (
        <div>
          <button onClick={() => toggleSections(item.id)}>
            {item.title}
            <span>’Click the button’</span>
          </button>
          {openSections.includes(item.id) && <p>{item.content}</p>}
        </div>
      ))}
    </>
  );
};
