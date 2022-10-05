'use strict';

const imagens = [ 
    {'id':'1','url':'./img/po.png'},
    {'id':'2','url':'./img/pokemon01.jpg'},
    {'id':'3','url':'./img/pokemon2.webp'},
    {'id':'4','url':'./img/pokemon03.jpg'},
    {'id':'5','url':'./img/pokemon04.jpg'},
    {'id':'6','url':'./img/pokemon05.jpg'},
    {'id':'6','url':'./img/pokemon06.jpg'},

]

const container=document.querySelector('#cotainer-itens')

const loadimage = (imagens, container) => {
    imagens.forEach(image => {
        container.innerHTML +=`
        <div class ='item'>
        <img src='${image.url}' 
        </div>
        
        `    
    })
}

loadimage(imagens, container)
let items=document.querySelectorAll('.item')

const previous = () =>{
    container.appendChild(items[0])
    items=document.querySelectorAll('.item')
}
 const next = () =>{
    const lastItem = items[items.length - 1]
    container.insertBefore(lastItem, items[0])
    items=document.querySelectorAll('.item')
 }


document.querySelector('#previus').addEventListener('click', previous )
document.querySelector('#next').addEventListener('click', next )