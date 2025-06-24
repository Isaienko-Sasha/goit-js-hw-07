//const navList = document.querySelectorAll("#categories");

const navList = document.querySelectorAll('li.item');

console.log(`Number of categories: ${navList.length}`);

navList.forEach(nav => {
    const title = nav.querySelector("h2").textContent;
     const itemsCount = nav.querySelectorAll('ul li').length;

console.log(`Category: ${title}`);
console.log(`Elements: ${itemsCount}`);
})

//console.log(heroTitle.textContent);
