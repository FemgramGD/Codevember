let count = 0

const clickbutton = document.getElementById ("clickbutton")
const resetbutton = document.getElementById ("resetbutton")
const clickcount = document.getElementById ("clickcount")

clickbutton.addEventListener ( "click", () => {
count++
clickcount.innerText = count;
});

resetbutton.addEventListener ("click", () => {
count = 0;
clickcount.innerText = count;

});



