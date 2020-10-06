// write exports in non-ES6 import style so the mockBackend can use it

function formatDateInput(date = new Date()) {
  const yyyy = `${date.getFullYear()}`;

  // NB: Date's "getMonth" function is ZERO INDEXED
  let mm = `${date.getMonth() + 1}`;
  if (mm.length === 1) mm = "0" + mm;

  let dd = `${date.getDate()}`;
  if (dd.length === 1) dd = "0" + dd;

  return `${yyyy}-${mm}-${dd}`;
}

function getTodaysDate() {
  return formatDateInput();
}

module.exports = { formatDateInput, getTodaysDate };
