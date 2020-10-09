/**
 * File that contains helpers for date inputs and date strings
 *
 * @version 1.0.0
 * @author [Thomsen Cummings](https://github.com/trcummings)
 */

/**
 * Generate a Date.now() date string in YYYY-mm-dd.
 *
 * @function
 * @param {Date} date
 * @returns {string}
 * @example
 * const todaysDate = formatDateInput(new Date());
 */
function formatDateInput(date = new Date()) {
  const yyyy = `${date.getFullYear()}`;

  // NB: Date's "getMonth" function is ZERO INDEXED. C'mon man!
  let mm = `${date.getMonth() + 1}`;
  if (mm.length === 1) mm = "0" + mm;

  let dd = `${date.getDate()}`;
  if (dd.length === 1) dd = "0" + dd;

  return `${yyyy}-${mm}-${dd}`;
}

/**
 * Generate a new Date() date string in YYYY-mm-dd.
 *
 * @function
 * @returns {string}
 * @example
 * const todaysDate = getTodaysDate();
 */
function getTodaysDate() {
  return formatDateInput();
}

/**
 * NB: write exports in non-ES6 import style so the mockBackend can use
 * it without runtime Babel transpilation
 */
module.exports = { formatDateInput, getTodaysDate };
