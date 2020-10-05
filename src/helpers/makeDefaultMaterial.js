import getTodaysDate from "./getTodaysDate";

export default function makeDefaultMaterial() {
  return {
    name: "New Material",
    cost: 0,
    volume: 0,
    color: "#44d7b6",
    deliveryDate: getTodaysDate(),
  };
}
