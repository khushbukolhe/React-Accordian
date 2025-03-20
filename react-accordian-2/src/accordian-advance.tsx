import React, { useState, useEffect } from "react";

interface AccordianFieldTypes {
  id: string;
  title: string;
  body: string;
}

export const AdvancedAccordianComponent = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [accordianItems, setAccordianItems] = useState<AccordianFieldTypes[]>(
    []
  );
  const [toggleIds, setToggleIds] = useState<string[]>([]);

  const FetchDatafromAPI = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=3",
        {
          method: "GET",
          headers: {
            "Content-Type": "json/application",
          },
        }
      );

      if (!response.ok) {
        setErrorMessage("API couldn’t fetch data correctly");
        return;
      }

      const fetchData: AccordianFieldTypes[] = await response.json();

      const accordianData = fetchData.map((data) => ({
        id: data.id.toString(),
        title: `Accordian Data Title ${data.id}`,
        body: data.body,
      }));

      setAccordianItems(accordianData);
    } catch (err) {
      setErrorMessage((err as Error).message);
    }
  };

  useEffect(() => {
    FetchDatafromAPI();
  }, []);

  const toddleAccordian = (id: string) => {
    setToggleIds((prev) =>
      prev.includes(id)
        ? prev.filter((sectionId) => sectionId !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      {accordianItems.map((item) => {
        const isOpen = toggleIds.includes(item.id);
        return (
          <div key={item.id}>
            <button
              id={item.id}
              onClick={() => toddleAccordian(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              {item.title}
            </button>
            <div
              id={`accordion-content-${item.id}`}
              role="region"
              aria-labelledby={`accordion-button-${item.id}`}
            >
              {isOpen && <p>{item.body}</p>}
            </div>
          </div>
        );
      })}
    </>
  );
};
