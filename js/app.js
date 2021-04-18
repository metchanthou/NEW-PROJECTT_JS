
// put mouse over on search------------------------------------------------------------
function mouseOver(){
    const inputSearch =document.getElementById('search');
    const btnAdd =document.getElementById('add');

    inputSearch.style.width ='500px';
    inputSearch.style.height ='30px'
    inputSearch.style.marginTop ='-200px';
    btnAdd.style.display ='none';
    
}
let clickSearch =document.querySelector('#search');
clickSearch.addEventListener('mouseover', mouseOver);

function mouseOut(){
    const getSearches =document.querySelector('.searches');
    getSearches.style.display ='block';
}
let outsearch =document.querySelector('#search');
outsearch.addEventListener('mouseout', mouseOut);


// click on button add-------------------------------------------------------------------
function btnAdd(event){
    // set prevent default on page
    event.preventDefault();

    // get element from html
    const getElement =document.querySelector('.element');
    const getComplete =document.querySelector('.complete');
    const getForm1 =document.querySelector('.searches');
    
    getElement.style.display ='none';
    getComplete.style.display ='block';
    getForm1.style.display ='none'
}
let clickAdd =document.querySelector('#add');
clickAdd.addEventListener('click', btnAdd);

let number = 0;
// we click on button ok---------------------------------------------------------------------
function clickOk(event){
    // set prevent default on page
    event.preventDefault();

    // get element form input
    const input_Name =document.querySelector('#name');
    const input_Food =document.querySelector('#food');
    const input_Price =document.querySelector('#price');
    const input_Date =document.querySelector('#date');
    const input_Time =document.querySelectorAll('input[name=type]');

    if (input_Name.value==='' || input_Food.value==='' || input_Price.value===''){
        confirm('Try again! sorry, you need to complete three(name, food, price.)')
        return false;
    }

    // For get time of food
    let color ='black';
    let types ='';
    for (let type of input_Time){
        if(type.checked){
            if(type.value==='Breakfast'){
                color ='yellow';
                types =type.value
            }else if(type.value==='Lunch'){
                types =type.value;
                color ='purple'
            }else{
                types =type.value;
            }
        }
    }

    // create div with class== card1
    let card1 =document.createElement('div');
    card1.classList.add('card1');
    card1.setAttribute('id', number);
    number += 1;
    
    // create div with class==aa
    let aa =document.createElement('div');
    aa.classList.add('aa');
    

    // create h3 set to aa  and add aa to card1 
    let h3 =document.createElement('h3');
    h3.textContent =input_Food.value;
    
    // Add h3 to aa
    aa.appendChild(h3);

    // create div with class==bb
    let bb=document.createElement('div');
    bb.classList.add('bb');

    // create p with class==edit
    let p_E =document.createElement('p');
    p_E.classList.add('edit');
    p_E.textContent ='e';

    // create p with class==delete
    let p_D =document.createElement('p');
    p_D.classList.add('delete');
    p_D.textContent ='x';

    // Add p to bb
    bb.appendChild(p_E);
    bb.appendChild(p_D);

    // Add bb to aa
    aa.appendChild(bb);

    // create div for id==btn
    let btn=document.createElement('div');
    btn.classList.add('btn');

    // create spam with class==price
    let price =document.createElement('span');
    price.classList.add('price');
    price.textContent ='from $ ' + input_Price.value ;

    // create spam with class==name
    let name =document.createElement('span');
    name.classList.add('name'); 
    name.textContent =input_Name.value;

    // create span with class==date
    let date =document.createElement('span');
    date.classList.add('date');
    date.textContent =input_Date.value;

    // create div with class==category
    let category =document.createElement('div');
    category.classList.add('category');
    category.style.background =color;
    category.style.color =color;
    category.textContent =types;

    // create p for message
    let p_message =document.createElement('p');
    p_message.classList.add('message');
    p_message.textContent ='This food order by '+input_Name.value +' for  ' +types + ', Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    
    // Add spam to btn
    btn.appendChild(price);
    btn.appendChild(name);

    // Add btn to aa
    aa.appendChild(btn);

    // Add aa and btn to card1
    card1.appendChild(aa);
    card1.appendChild(btn);
    card1.appendChild(date);
    card1.appendChild(category);
    card1.appendChild(p_message);
    
    // Add card1 to element
    const getElement =document.querySelector('.element');
    getElement.appendChild(card1);

    // Increadeanc
    index++

    // Add to array 
    taskList.push({foods:input_Food.value, names:input_Name.value, dates:input_Date.value, prices:input_Price.value})
    console.log(taskList);

    // clear
    input_Food.value ='';
    input_Date.value ='';
    input_Price.value ='';
    input_Name.value ='';
    input_Time.value ='';
    
    const getComplete =document.querySelector('.complete');
    const getForm1 =document.querySelector('.searches');
    // const getCheck =document.querySelector('.check')
    

    getElement.style.display ='block';
    getComplete.style.display ='none';
    getForm1.style.display ='block';   
    // getCheck.style.display ='block'

}
let btnOk =document.querySelector('#ok');
btnOk.addEventListener('click', clickOk);


// Update value of favourite food-, Event on button update------Event on button delete-----------------------------------------------------------------

function  updateValues(event) {
    event.preventDefault();
    let cards = document.querySelectorAll('.card1');
    const update_Name =document.querySelector('#name');
    const update_Food =document.querySelector('#food');
    const update_Price =document.querySelector('#price');
    const update_Date =document.querySelector('#date');

    cards[index].firstElementChild.firstElementChild.textContent = update_Food.value;
    cards[index].firstElementChild.nextElementSibling.firstElementChild.textContent= 'from $ '+ update_Price.value;
    cards[index].firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.textContent= update_Name.value;
    cards[index].firstElementChild.nextElementSibling.nextElementSibling.textContent =update_Date.value;

    
    const getElement =document.querySelector('.element');
    const getComplete =document.querySelector('.complete');
    const getForm1 =document.querySelector('.searches')
    
    
    getElement.style.display ='block';
    getComplete.style.display ='none';
    getForm1.style.display ='block'; 
    
}

function deleteCard(event) {
	event.preventDefault();

    let div_remove =event.target.parentElement.parentElement.parentElement;
    let change_food =div_remove.firstElementChild.firstElementChild.textContent;
    let change_date =div_remove.firstElementChild.nextElementSibling.nextElementSibling.textContent;
    let change_name =div_remove.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.textContent;
    let change_price =div_remove.firstElementChild.nextElementSibling.firstElementChild.textContent;
    

    const update_Name = document.querySelector('#name');
    const update_Food = document.querySelector('#food');
    const updat_Price =document.querySelector('#price');
    const update_Date =document.querySelector('#date');

    if (event.target.className==='edit'){
        update_Name.value =change_name;
        update_Food.value =change_food;
        update_Date.value =change_date;
        updat_Price.value =change_price;
        index =div_remove.id;

        const getElement =document.querySelector('.element');
        const getComplete =document.querySelector('.complete');
        const getForm1 =document.querySelector('.searches')
        
        getElement.style.display ='none';
        getComplete.style.display ='block';
        getForm1.style.display ='none';   
    }

    if (event.target.className==='delete'){
        div_remove.remove();
    }
}
// main code
let taskList = [];
let index = 0;

const btnUpdate = document.querySelector('#update');
btnUpdate.addEventListener('click', updateValues);

let btnDelete = document.querySelector(".element");
btnDelete.addEventListener('click', deleteCard);


// Search your favourite food---------------------------------------------------------------
function searchFood(event) {
    // 1- Get the search text
    let text =searchBookInput.value.toLowerCase();
    let  listBook =document.querySelectorAll('.card1');
    
    for (let a of listBook){
          let listname =a.firstElementChild.firstElementChild.textContent.toLowerCase();
          if (listname.indexOf(text)===-1){
              a.style.display ='none';
          }else{
              a.style.display ='';
          }
      }
    // console.log(text);
    }
let searchBookInput = document
.querySelector(".searches")
.querySelector("input");
searchBookInput.addEventListener("keyup", searchFood);

// mouse over alert message 
function mouseover(event){
    let first=document.querySelectorAll('.message');
    // for(let event of first){
        for (let index in first){
            if (event.target.id=== String(index)){
                first[index].style.display="block";
            }else{
                first[index].style.display="none";

            }
        }
}
let overfirst=document.querySelector('.element');
console.log(overfirst);
overfirst.addEventListener('mouseover',mouseover);






















