const giveFavColor = (event) => {
    alert("My favorite color is indigo.")
}

const giveFavPlace = (event) => {
    alert("My favorite place is the beach. (If you want to know specifics, Strawberry Hill in Oregon, Carlsbad in California, Sanibel Island in Florida, and Makalawena in Hawaii!)")
}

const  giveFavRitual = (event) => {
    alert("My favorite ritual is looking for birds and butterflies everywhere I go.")
}
let colorButton = document.querySelector("#color");
colorButton.addEventListener("click", (giveFavColor) )
let placeButton = document.querySelector("#place");
placeButton.addEventListener("click", (giveFavPlace) )
let ritualButton = document.querySelector("#ritual")
ritualButton.addEventListener("click", (giveFavRitual) )