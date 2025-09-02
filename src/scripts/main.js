'use strict';

const valuesNumbers = document.querySelectorAll('.population');

function Calcs(values) {
  const results = [];

  let totalCalc = 0;

  let averageCalc = 0;

  let validCount = 0;

  for (const value of values) {
    let text = value.innerText;

    text = text.replaceAll(',', '');

    const number = +text;

    if (!Number.isNaN(number)) {
      totalCalc = totalCalc + number;

      validCount++;
    }
  }

  averageCalc = Math.trunc(totalCalc / validCount);

  function toStringCommas(value) {
    let result = value.toString();

    let separateNumbers = result.split('');

    separateNumbers = separateNumbers.reverse();

    let numberCount = 0;

    const withCommas = [];

    for (let i = 0; i < separateNumbers.length; i++) {
      withCommas.push(separateNumbers[i]);

      numberCount++;

      if (numberCount === 3 && i !== separateNumbers.length - 1) {
        withCommas.push(',');

        numberCount = 0;
      }
    }

    separateNumbers = withCommas.reverse().join('');

    result = separateNumbers;

    return result;
  }

  totalCalc = toStringCommas(totalCalc);

  averageCalc = toStringCommas(averageCalc);

  results.push(totalCalc, averageCalc);

  return results;
}

const calcedValues = Calcs(valuesNumbers);

const [sum, average] = calcedValues;

const totalItem = document.querySelector('.total-population');

const everageItem = document.querySelector('.average-population');

totalItem.innerText = sum;

everageItem.innerText = average;
