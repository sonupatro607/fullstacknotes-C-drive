/*
qustion: 
Write a program in JS to calculate and print the electricity bill of a given customer. The customer ID, name, and unit consumed by the user should be captured from the keyboard to display the total amount paid to the customer.


The charge is as follows:

Unit	Charge/unit
upto 199	@1.20
200 and above but less than 400	@1.50
400 and above but less than 600	@1.80
600 and above	@2.00

If the bill exceeds Rs. 400 then a surcharge of 15% will be charged and the minimum bill should be Rs. 100/-
Test Data :
1001
James
800

Expected Output :
Customer IDNO :1001
Customer Name :James
unit Consumed :800
Amount Charges @Rs. 2.00 per unit : 1600.00
Surcharge Amount : 240.00
Net Amount Paid By the Customer : 1840.00
*/

// answer:

var obj = {
  id: 1001,
  name: "James",
  unit(unitt) {
    return unitt;
  },
  amount(b) {
    if (b <= 199) {
      return 1.2 * b;
    }
    if (b >= 200 && b < 400) {
      return 1.5 * b;
    }
    if (b >= 400 && b < 600) {
      return 1.8 * b;
    }
    if (b >= 600) {
      return 2 * b;
    }
  },
  surcharge(c) {
    return 0.15 * c;
  },
  netamount(d, e) {
    return d + e;
  },
};
console.log("Customer IDNO : ", obj.id);
console.log("Customer Name : ", obj.name);
var unit1 = obj.unit(400);
console.log("unit Consumed : ", unit1);
var amount1 = obj.amount(unit1);
console.log("Amount Charges:  ", amount1);
var surcharge1 = obj.surcharge(amount1);
console.log("Surcharge Amount : ", surcharge1);
var net = obj.netamount(amount1, surcharge1);
console.log("Net Amount Paid By the Customer : ", net);
