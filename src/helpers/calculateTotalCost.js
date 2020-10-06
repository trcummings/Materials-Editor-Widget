export default function calculateTotalCost(materials = {}) {
  return Object.keys(materials).reduce(
    (acc, id) => acc + materials[id].cost * materials[id].volume,
    0
  );
}
