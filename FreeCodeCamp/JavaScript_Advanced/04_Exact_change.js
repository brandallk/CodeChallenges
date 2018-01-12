/* Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order. */

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

// Store the dollar value of each bill/coin denomination
var DENOM_VALS = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.10,
  "QUARTER": 0.25,
  "ONE": 1.00,
  "FIVE": 5.00,
  "TEN": 10.00,
  "TWENTY": 20.00,
  "ONE HUNDRED": 100.00
};

// Format a number as floating-point with 2 decimal places
function formatAsMoney(number) {
  return Number(number.toFixed(2));
}

// Get the total dollar value of cash in the drawer
function getDrawerTotal(cid) {
  var total = cid.reduce(function(acc, denomination) {
      var amount = denomination[1];
      return acc + amount;
    }, 0);

  return formatAsMoney(total);
}

function getChangeAmountForDenomination(type, amtAvailable, changeTotal) {
  var denominationValue = DENOM_VALS[type];

  if (changeTotal >= amtAvailable) {
    return amtAvailable;
  } else {
    if (changeTotal > denominationValue) {
      return Math.floor(changeTotal/denominationValue) * denominationValue;
    } else {
      return 0;
    }
  }
}

function checkCashRegister(price, cash, cid) {
  var drawerTotal = getDrawerTotal(cid);
  var changeTotal = formatAsMoney(cash - price);
  var changeReturned = [];

  if (changeTotal > drawerTotal) {
    return "Insufficient Funds";

  } else if (changeTotal === drawerTotal) {
    return "Closed";

  } else {
    cid.reverse().forEach(function(denomination) {
      var type = denomination[0];
      var amtAvailable = denomination[1];
      var changeAmtForDenom = getChangeAmountForDenomination(
        type, amtAvailable, changeTotal);

      if (changeAmtForDenom) {
        changeReturned.push([type, changeAmtForDenom]);
        changeTotal = formatAsMoney(changeTotal - changeAmtForDenom);
      }
    });
  }

  // If changeTotal wasn't reduced to 0 by building the changeReturned array,
  // then correct change can't be made from the cash in the drawer
  var changeUnpaid = changeTotal;
  return changeUnpaid ? "Insufficient Funds" : changeReturned;
}

console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
  // => [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  // => 'Insufficient Funds'