// 1
 console.log("hello");
 
//Write a JavaScript program that checks if a given number is positive, negative, or zero.
// Sample Input: let number = -5;
// Sample Output: "-5 is negative"

// let n = 5
// if(n > 0 ){
//     console.log(n + "positive");
    
// }else {console.log(n + "negative");
// }
 
// 2
 
// Write a JavaScript program to check if a given temperature in Celsius is
//  considered freezing (below 0), normal (0-30), or hot (above 30).
// Sample Input: let temperature = 15;
// Sample Output: "15°C is normal"

// let Celsius = -3
// if( Celsius < 0){
//     console.log("freezing");
    
// }else if ( Celsius >= 0 && Celsius <= 30 ){
//     console.log("normal");
    
// }else {
//     console.log("hot");
    
// }
 
// 3
 
// Write a JavaScript program to determine whether a given character is a vowel or a consonant.
// Sample Input: let char = 'a';
// Sample Output: "a is a vowel"


// let char = 'e'


// if(char ==='a'){
//     console.log(char + " is vowel");
    
// }else if(char ==='e'){
//     console.log(char + " is vowel");
// }else if(char ==='i'){
//     console.log(char + " is vowel");
// }else if(char ==='o'){
//     console.log(char + " is vowel");
// }else if(char ==='u'){
//     console.log(char + " is vowel");
// }else{
//     console.log("is consonant");
    
// }
    


// 4
 
// Write a JavaScript program to calculate the grade based on a given score:
 
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: Below 60
 
// Sample Input: let score = 85;
// Sample Output: "Your grade is B"
 
// let x = prompt()
// if(x <= 100 && x >= 90){
//     console.log("A");
// }else if(x <= 89 && x >= 80){
//     console.log("B");
    
// }else if(x <= 79 && x >= 70){
//     console.log("C");
    
// }else if(x <= 69 && x >= 60){
//     console.log("D");
    
// }else if( x <= 60){
//     console.log("F");
    
// }




    
 
// 5
 
// Write a JavaScript program to determine if a person is an adult, teenager, or child based on their age.
 
// Child: Below 13
// Teenager: 13-19
// Adult: 20 and above
 
// Sample Input: let age = 16;
// Sample Output: "You are a teenager"


// let age = 18
// if( age < 13){
//     console.log("child");
    
// }else if(age >=13 && age <=19){
//     console.log("teenager");
    
// }else if(age >= 20){
//     console.log("adult");
    
// }   
 
// 6
 
// Write a JavaScript program to check if a given number is divisible by 5 or 7.
// Sample Input: let number = 35;
// Sample Output: "35 is divisible by both 5 and 7"

// let e = 30
// if(e % 5 === 0 && e % 7 === 0){
//     console.log("mon");

    
// }else{
//     console.log("bish");
    
// }
 
// 7
 

// let time = 19
// if(time >= 0 && time <= 11){
//     console.log("morning");
    
// }else if(time >= 12 && time <= 17){
//     console.log("afternoun");
    
// }else if(time >= 18 && time <= 23){
//     console.log("evening");
    
// }
 
// 8
 
// Write a JavaScript program to check if a number is a single-digit, double-digit, or triple-digit number.
// Sample Input: let number = 25;
// Sample Output: "25 is a double-digit number"
 

//  let p = prompt()
//  if (p >= 100 && p < 1000 ){
//     console.log("gurwan orontoi too");
    
//  }else if(p >= 10 && p < 100){
//     console.log("hoyor orontoi");
    
//  }else if( p >= 10 && p < 10){
//     console.log( "neg orontoi");
    
//  }else{
//     console.log(null);
    
//  }
// 9
 
// Write a JavaScript program to determine whether a number is a multiple of 4.
// Sample Input: let number = 16;
// Sample Output: "16 is a multiple of 4"
 
// let num = prompt()
// if(num % 4 === 0){
//     console.log("mon");
    
// }else{
//     console.log("bish");
    
// }

// 10
 
// Write a JavaScript program to check if a given character is uppercase or lowercase.
// Sample Input: let char = 'G';
// Sample Output: "G is uppercase"

// let char = prompt()
// if(char === char.toUpperCase()){
//     console.log("Tom");

    
// }else if ( char === char.toLowerCase()){
//     console.log("jijig");
    
// }
// 11
 
// Write a JavaScript program to determine if a given day number corresponds to a weekday or a weekend (1 = Monday, ..., 7 = Sunday).
// Sample Input: let day = 6;
// Sample Output: "It's a weekend"
// let num = prompt()
// if(num >= 1 && num <=5) {
//     console.log("ene bol ajliiin odr");
    
// }else if(num >= 6 && num <= 7 ){
//     console.log("ene bol amraltiin odr");
    
// }
 
// 12
 
// You’re designing a coffee shop menu. Write a program to determine the price of a coffee based on size:
 
// Small: $2 
// Medium: $3
// Large: $4
 
// Sample Input: let size = 'Medium';
// Sample Output: "A Medium coffee costs $3"

// let price = prompt()
// if(price == 3){
//  console.log(" a small coffe 3$");
 
// }else if(price == 4 ){
//     console.log(" a medium  coffe 4$");
    
// }else if( price == 5){
//     console.log("a large coffe 5$");
    
// }
 
// 13
 
// You’re writing a program for a weather app.
// Display whether a person should take an umbrella, a jacket, or sunglasses based on the weather condition (Rainy, Cold, Sunny).
// Sample Input: let weather = 'Rainy';
// Sample Output: "Don't forget your umbrella!"
 

// let weather = prompt()
// if(weather == "rainy"){
//     console.log("don't forget your umbrella");
    
// }else if( weather == "sunny"){
//     console.log("don't forget your sunglasses");
    
// }else if(weather == "cold"){
//     console.log("don't forget your warm clothes");
    
// }else{console.log(null);
// }
// 14
 
// You are creating a program for a theater. Based on a person's age, determine their ticket price:
 
// Below 5: Free
// 5 to 18: $10
// 19 to 60: $15
// Above 60: $12
 
// let age = prompt()
// if(age < 5){
//     console.log("free");
    
// }else if( age >= 5 && age <= 18){
//     console.log("10$");
    
// }else if( age >= 19 && age <= 60){
//     console.log("15$");
    
// }else{console.log("12$");
// }
// Sample Input: let age = 70;
// Sample Output: "Your ticket price is $12"
 
// 15
 
// You’re designing a program for a virtual pet. Determine if the pet is Happy, Hungry, or Sleepy based on its energy level:
 
// Energy > 70: Happy
// Energy between 30 and 70: Hungry
// Energy < 30: Sleepy

// let energy = prompt()
// if(energy > 70){
//     console.log("happy");
    
// }else if( energy >= 30 && energy <= 70){
//     console.log("hungry");
    
// }else{console.log("sleepy");
// }
 
// Sample Input: let energy = 25;
// Sample Output: "Your pet is Sleepy"
 
// 16
 
// You’re developing a weightlifting app. Based on the weight lifted, classify the attempt as Beginner, Intermediate, or Advanced:
 
// Weight < 50 kg: Beginner
// 50-100 kg: Intermediate
// Weight > 100 kg: Advanced
 
// Sample Input: let weight = 75;
// Sample Output: "You are lifting at an Intermediate level"

// let weight = prompt()
// if(weight < 50 ){
//     console.log(" you are lifting at an begginer level");
    
// }else if(weight >= 50 && weight <= 100){
//     console.log( "You are lifting at an Intermediate level");
    
// }else{
//     console.log( "You are lifting at an advanced level");
    
// }
 
// 17
 
// Create a discount program for a clothing store. The discount depends on the total amount spent:
 
// Spend < $50: No discount
// Spend $50-$100: 10% discount
// Spend $101-$200: 20% discount
// Spend > $200: 30% discount
 
// Sample Input: let totalSpent = 150;
// Sample Output: "You get a 20% discount"
 
// 18
// let amount = prompt()
// if( amount < 50){
//     console.log("No discount");
    
// }else if( amount >= 50 && amount <= 100){
//     console.log(" 10% discount");
    
// }else if ( amount >= 101 && amount <= 200){
//     console.log("20% discount");
    
// }else {
//     console.log("30% discount");
    
// }
// Write a program to determine if a password is strong, medium, or weak.
 
// Strong: At least 8 characters, includes numbers and special characters
// Medium: At least 6 characters, includes either numbers or special characters
// Weak: Less than 6 characters
 
// Sample Input: let password = 'Pass123!';
// Sample Output: "Your password is strong"
 

// let password = prompt()
// if(password.length > [8]){
//     console.log("Your password is strong");
    
// }else if(password.length == [6]){
//     console.log("Your password is medium");
    
// }else if(password.length < [6]){
//     console.log("Your password is weak");
    
// }
// 19
 
// You’re coding a program for an amusement park. Ticket prices vary by age and height:
 
// Children under 120 cm: $5
// Adults 120 cm or taller and aged under 60: $10
// Seniors aged 60 and above: $7
 
// Sample Input: let age = 65, height = 130;
// Sample Output: "Your ticket price is $7"

// let height = prompt('input height')
// let age = prompt('input age')
// let ticketPrice;
// if(height < 120){
//     console.log(ticketPrice = "5$");
    
// }else if(height >= 120 || age > 60){
//     console.log(ticketPrice ="10$");
    
// }else{
//     console.log(ticketPrice = "7$");
    
// }
// 20
 
// Write a program for a mobile data plan. Determine the cost based on data usage:
 
// 0-5 GB: $10
// 5-20 GB: $20
// 20-50 GB: $30
// More than 50 GB: $50
 
// Sample Input: let dataUsage = 25;
// Sample Output: "Your data cost is $30"
 
// let data = prompt("Input Data")
// if (data <= 5){
//     console.log("$10");
    
// }else if( data > 5 && data <= 20){
//     console.log("$20");
    
// }else if( data > 20 && data <= 50){
//     console.log("$30");
    
// }else{console.log("$50");
// }
// 21
 
// Write a program for a bank loan eligibility check. A user qualifies if:
 
// They are at least 21 years old
// Their annual income is greater than $25,000
// They do not have a poor credit score (creditScore > 600)
 
// Sample Input: let age = 30, income = 30000, creditScore = 650;
// Sample Output: "You are eligible for the loan"
let age = 18
let annualIncome = 50000
let CreditScore = 800

if( age >= 21 && annualIncome >= 25000 && CreditScore > 600){
    console.log("You are eligible for the loan");
    
}else console.log("no");

// 22
 
// Write a program for an online grading system where the final grade depends on a combination of attendance and exam scores:
 
// If attendance is below 75%, the grade is automatically "F".
// Otherwise, calculate the average score of three exams:
// Average >= 90: A
// Average >= 80: B
// Average >= 70: C
// Average >= 60: D
// Below 60: F

let average = 84
if( average >= 90){
    console.log("A");
    
} else if( average >= 80){
    console.log("B");
    
}else if( average >= 70){
    console.log("c");
    
}else if( average >= 60){
    console.log("d");
    
}else if( average < 60 ){
    console.log(" F");
    
}
// Sample Input: let attendance = 80; let exam1 = 85
// Sample Output: "Your final grade is B"
 
// 23
 
// Write a program to calculate the total salary for a company employee, including bonuses:
 
// Base salary is $2000.
// Add $500 if the employee has worked for more than 5 years.
// Add $300 if they achieved the monthly target.
// Add $100 if their attendance is above 90%.
 
// Sample Input:
// let yearsWorked = 6;
// const metTarget = true
// const attendance = 95;
// Sample Output: "Your total salary is $2900"
 
// 24
 
// Create a program to determine a runner’s performance in a marathon based on time and gender:
 
// For men:
// Elite: Under 2:10:00
// Advanced: Under 3:00:00
// Amateur: Over 3:00:00
// For women:
// Elite: Under 2:30:00
// Advanced: Under 3:15:00
// Amateur: Over 3:15:00
 
// Sample Input:
// let gender = 'Female';
// const time = '2:45:00';
// Sample Output: "Your performance level is Advanced"
 