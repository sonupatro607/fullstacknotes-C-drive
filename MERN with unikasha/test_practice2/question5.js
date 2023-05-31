/*
Create a function that takes voltage and current and returns the calculated power.

Examples
circuitPower(230, 10) ➞ 2300

circuitPower(110, 3) ➞ 330

circuitPower(480, 20) ➞ 9600

Sample Input =
circuitPower(110, 3) 

Sample Output =
 330

*/

function circuitPower(voltage, current) {
  return voltage * current;
}

Console.log(circuitPower(110, 3));
