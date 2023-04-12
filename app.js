const modal = document.querySelector(".modal");
const overlay = document.querySelector('.overlay');
const btnCloseModal= document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

for(let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', function(){
 modal.classList.remove('hidden');
 overlay.classList.remove('hidden');
});


const closeModal = function(){
 modal.classList.add('hidden');
 overlay.classList.add('hidden')
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener( 'click', closeModal);

document.addEventListener('keydown', function(e){
if(e.key==='Escape' && !modal.classList.contains('hidden')){
 closeModal() ;
}
});

function addsongs(){
 var song1 = document.getElementById('song1');
 var song2 = document.getElementById('song2');
 var song3 = document.getElementById('song3');

 song1.textContent="asdfghjkldmncbvfrefdgbnc mvbkifdskxm";
 song2.textContent="asdfghjkldmncbvfrefdgbnc mvbkifdskxm";
 song3.textContent="asdfghjkldmncbvfrefdgbnc mvbkifdskxm";
song1.style.color="red"
}

window.onload=addsongs;









