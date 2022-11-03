let getränke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];
const upperDrinks = getränke.map((getränk) => {
    return (getränk.toUpperCase());
});
console.log(upperDrinks);


/* 
getränke.splice(0, 2, "Wein");
console.log(getränke); */