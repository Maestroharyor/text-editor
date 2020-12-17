const ul = document.querySelector('.people');

const people = ['Mario', 'Luigi', 'Ryu', 'Shaun', 'Chin-li'];

html =``;
people.forEach(function(person){
    html+= `<li style="color: purple">${person}</li>`
});

console.log(html);