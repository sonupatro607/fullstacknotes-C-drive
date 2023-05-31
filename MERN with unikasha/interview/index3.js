/*
question:
Write a JS program to read the temperature in centigrade and display a suitable message according to the temperature state below: Go to the editor

Temp < 0 then Freezing weather

Temp 0-10 then Very Cold weather

Temp 10-20 then Cold weather

Temp 20-30 then Normal in Temp

Temp 30-40 then It's Hot

Temp >=40 then It's Very Hot

Test Data :

42

Expected Output :

It's very hot.
*/

// answer:

function wheatherstatement(temp) {
  if (temp < 0) {
    console.log("Freezing weather");
  }
  if (temp < 10) {
    console.log("Very Cold weather");
  }
  if (temp < 20) {
    console.log("Cold weather");
  }
  if (temp < 30) {
    console.log("Normal in Temp");
  }
  if (temp < 40) {
    console.log("It's Hot");
  }
  if (temp >= 40) {
    console.log("It's Very Hot");
  }
}
wheatherstatement(8098);
