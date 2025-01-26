const totalOmg = document.querySelector('#categories');
const ard = totalOmg.children;

const ardArray = Array.from(ard);

ardArray.forEach(element => {
    console.log(`Category: ${element.firstChild.nextSibling.lastChild.data}`);
    console.log(`Number of categories: ${element.lastChild.previousSibling.childElementCount}`);
    
    
});
// element.firstChild.nextSibling.lastChild.data
// element.lastChild.previousSibling.childElementCount