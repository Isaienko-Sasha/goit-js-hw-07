const nameIn = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");

nameIn.addEventListener("input", (event) => {
    const name1 = event.target.value.trim();
    
    if (name1 === "") {
  nameOut.textContent = "Anonymous";
} else {
  nameOut.textContent = name1;
}
})

console.log(nameIn);



