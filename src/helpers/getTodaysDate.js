export default function getTodaysDate() {
  const date = new Date();
  const yyyy = `${date.getFullYear()}`;
  let mm = `${date.getMonth()}`;
  if (mm.length === 1) mm = "0" + mm;
  let dd = `${date.getDay()}`;
  if (dd.length === 1) dd = "0" + dd;

  return `${yyyy}-${mm}-${dd}`;
}
