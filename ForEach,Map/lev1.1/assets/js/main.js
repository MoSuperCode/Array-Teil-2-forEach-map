
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
console.log(getränke);
getränke.sort();


let myDrinks = () => {
    getränke.forEach((game, index) => {
        console.log(index, game);
    });
};

myDrinks();
document.write(getränke);
