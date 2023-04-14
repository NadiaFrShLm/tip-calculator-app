'use strict';

const billInput = document.querySelector('.tip__bill');
const peopleInput = document.querySelector('.tip__peoples');

const tips = document.querySelectorAll('.tip__percent');

const tipAmount = document.querySelector('.amount');
const total = document.querySelector('.total');

const resetBtn = document.querySelector('.tip__reset');

tips.forEach((tip) => {
  tip.addEventListener('click', tipPress);
});

function tipPress(e) {
  peopleInput.value ? console.log('several persons') : alert('chose');
  const percent = e.target.value;
  const tipPerPerson = (billInput.value * percent) / 100;
  tipAmount.innerHTML = tipPerPerson;
  const totalPerPerson = Number(billInput.value) + tipPerPerson;
  total.innerHTML = totalPerPerson;
}
