/**
 * Calculates the accumulated capital with monthly contributions and continuous compounding.
 *
 * @param {number} monthlyContribution - The amount of the monthly payment (€)
 * @param {number} annualRate - The annual interest rate (e.g. 0.05 for 5%)
 * @param {number} years - Number of years the savings plan lasts
 * @return {number} The accumulated capital with continuous compounding
 * @customfunction
 */
function CAPITALE_CONTINUO(monthlyContribution, annualRate, years) {
  if (typeof monthlyContribution !== "number" || typeof annualRate !== "number" || typeof years !== "number") {
    return "Error: Please enter numbers only";
  }
  if (monthlyContribution <= 0 || annualRate < 0 || years <= 0) {
    return "Invalid parameters";
  }

  let total = 0;
  const totalMonths = Math.round(years * 12);

  for (let i = 1; i <= totalMonths; i++) {
    const t = (totalMonths - i + 1) / 12;  // remaining time in years
    const value = monthlyContribution * Math.exp(annualRate * t);
    total += value;
  }

  return Number(total.toFixed(2));
}
