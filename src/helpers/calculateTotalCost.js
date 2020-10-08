// returns String
export default function calculateTotalCost(materials = {}) {
  // calculate the total
  const total = Object.keys(materials).reduce(
    (acc, id) => acc + materials[id].cost * materials[id].volume,
    0
  );

  // format it so there are only ever two decimal places
  return Number.parseFloat(total).toFixed(2);
}
