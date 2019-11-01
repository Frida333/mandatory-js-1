//ändra texten på h1
let h = document.querySelectorAll("h1");
h[0].textContent="Fruits & Vegetables Corp ";

//ändra texten på länken och själva texten
let vegetables = document.querySelectorAll("a");
for( let vegetable of vegetables){
   vegetables[2].textContent="Vegetables";
   vegetables[2].setAttribute("href", "#vegetables");
}

//ändra ordningen på about och contact
let main = document.querySelector("#main");
let about = document.querySelector("#about");
let contact = document.querySelector("#contact");
main.insertBefore (about,contact);
console.log(about);

//texten till p tag
about.innerHTML="";
let p = document.createElement('p');
p.textContent= "We're the best in fruits & vegetables";
about.appendChild(p);

//ny rubrik på section contact
let p2 =document.querySelector("#contact p");
let element = document.createElement("h2");
let text = document.createTextNode("Contact");
element.prepend(text);
contact.insertBefore(element,p2);

//ny rubrik på section about
element = document.createElement("h2");
let text2 = document.createTextNode("About");
element.prepend(text2);
about.insertBefore(element,p);

//ändra th till td i thead
let removeThead = document.querySelectorAll("thead");
for (let remove of removeThead){
  remove.parentElement.removeChild(remove);
}
let table = document.querySelectorAll("table");
for ( let tables of table){
  let tHead = tables.createTHead();
  let row = tHead.insertRow(0);
  row.insertCell(0).outerHTML= "<th>Email</th>";
  row.insertCell(0).outerHTML= "<th>Name</th>";
}

//ändra texten på title
let title = document.querySelectorAll("title");
for( let i=0; i< title.length; i++){
  title[0].textContent="Fruits & Vegetables Corp";
}

//css fil
let head = document.querySelector("head");
let link = document.createElement("link");
link.setAttribute("rel","stylesheet");
link.setAttribute("type","text/css");
link.setAttribute("href","main.css");
head.appendChild(link);
