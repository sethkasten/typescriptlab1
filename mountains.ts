import { Mountain } from "./src/models/Mountain";

const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

const findNameOfTallestMountain = (mountains: Mountain[]): string => {
  let tallestHeight: number = 0;
  let tallestMountain: string = "";
  mountains.forEach((mountain) => {
    if (mountain.height > tallestHeight) {
      tallestHeight = mountain.height;
      tallestMountain = mountain.name;
    }
  });
  return tallestMountain;
};
