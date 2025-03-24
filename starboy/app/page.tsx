import React from "react";

const cards = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  title: `Card ${index + 1}`,
  description: "This is a description of the card. It gives more details about the content."
}));

const Page = () => {
  return (
      <div className="min-h-screen bg-white p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Cards Grid</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
              <div
                  key={card.id}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
              >
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
              </div>
          ))}
        </div>
      </div>
  );
};

export default Page;