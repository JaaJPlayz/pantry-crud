import { useEffect, useState } from "react";
import { pantryMock, pantryMock2 } from "../mock/pantryMock";
import { IPantry } from "../mock/types/pantry";

function Home() {
  const [allPantry, setAllPantry] = useState<IPantry[]>([]);

  useEffect(() => {
    // TODO: Make a route to fetch all pantries from the backend
    setAllPantry([pantryMock, pantryMock2]);
  }, []);
  return (
    <div className="max-w-md mx-auto p-4 mt-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <h2 className="text-2xl font-bold mb-4">Pantries</h2>
      {allPantry.map((pantry) => (
        <div
          key={pantry.id}
          className="bg-white shadow-md rounded px-4 py-4 mb-4"
        >
          <h3 className="text-xl font-bold mb-2">{pantry.owner}</h3>
          {pantry.items.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <p className="text-lg">{item.name}</p>
              <p className="text-lg">{item.amount}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Home;
