
function checkCashRegister(price, cash, cid) {
  // Answer object
  const answer = {
    status: '',
    change: []
  }

  let changeToGive = (cash - price) * 100;

  // Object of denominators
  const denoms = {
    "ONE HUNDRED": 10000,
    "TWENTY": 2000,
    "TEN": 1000,
    "FIVE": 500,
    "ONE": 100,
    "QUARTER": 25,
    "DIME": 10,
    "NICKEL": 5,
    "PENNY": 1
  }

  // Re-organize array and mutiply by 100 to get accurate numbers due to float bugs
  const register = cid.reverse().map(el => [el[0], Math.round(el[1] * 100)]);
  const moneyInRegister = register.map(el => el[1]).reduce((sum, el) => sum + el);

  if ( changeToGive < moneyInRegister ) answer.status = 'OPEN';
  if ( changeToGive === moneyInRegister ) answer.status = 'CLOSED';

  // Get empty denominators and store them
  const emptyDenoms = register.map(elem => {
    if (elem[1] === 0) {
      return [elem[0], elem[1]];
    }
  });

  // Remove undefined and reverse order of array
  const filteredEmptyDenoms = emptyDenoms.filter(el => el !== undefined).reverse();

  let partial;
  answer.change = register.reduce((acc, elem) => {
    partial = Math.min(elem[1], Math.floor(changeToGive / denoms[elem[0]]) * denoms[elem[0]]);
    if ( partial > 0) {
      changeToGive -= partial;
      acc.push([elem[0], partial / 100])
    } return acc;
  }, []);

  // Check if change can't be given back and reset change to empty array
  if ( changeToGive > moneyInRegister || changeToGive > 0) {
    answer.status = 'INSUFFICIENT_FUNDS';
    answer.change = [];
  };

  // Check if status is closed then join the empty filtered denoms in order with the change at the beginning
  if (answer.status === 'CLOSED') {
    answer.change = answer.change.concat(filteredEmptyDenoms);
  }
    
  return answer;
  
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

/*
JavaScript Algorithms and Data Structures Projects: Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.

Passed
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

Passed
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

Passed
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

Passed
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

Passed
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

*/