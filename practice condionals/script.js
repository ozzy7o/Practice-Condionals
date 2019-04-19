var age = prompt("what is your age?");

if(age < 0 ){
    alert("Come back once you're out of the womb");
}
if(age === "21"){
    alert("HAPPY 21st Birthday!!");
}
if(age % 2 !== 0 ){
    alert("your age is odd!");
}

if(age % Math.sqrt(age) === 0) {
  alert("Your age is a perfect square!");
}
if(age < 18){

alert("You cannot enter venue");
}

else if(age >= 18 && age <= 21){

alert("You can enter but not drink");
}
else if(age >= 22){

alert("You can enter and drink");
}

    