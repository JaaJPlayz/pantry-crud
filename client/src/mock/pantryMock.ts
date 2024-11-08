import { IPantry } from "./types/pantry";

export const pantryMock: IPantry = {
  id: 1,
  items: [
    {
      id: 1,
      name: "apple",
      amount: 10,
    },
    {
      id: 2,
      name: "banana",
      amount: 5,
    },
    {
      id: 3,
      name: "orange",
      amount: 3,
    },
  ],
  owner: "John Doe",
};

export const pantryMock2: IPantry = {
  id: 2,
  items: [
    {
      id: 1,
      name: "apple",
      amount: 10,
    },
    {
      id: 2,
      name: "banana",
      amount: 5,
    },
    {
      id: 3,
      name: "orange",
      amount: 3,
    },
  ],
  owner: "Jane Doe",
};
