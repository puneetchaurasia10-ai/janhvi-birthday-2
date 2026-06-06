
function hideAllPages(){
document.querySelectorAll('.page').forEach(page=>{
page.classList.remove('active');
});
}

function checkPwd(){

const pwd=document.getElementById('pwd').value;

if(pwd==="200704"){

hideAllPages();

document.getElementById('homePage').classList.add('active');

}else{

alert("Wrong Password ❌");

}

}

function showGiftPage(){

hideAllPages();

document.getElementById('giftPage').classList.add('active');

}

function openGift1(){

hideAllPages();

document.getElementById('gift1Page').classList.add('active');

}

function openGift2(){

hideAllPages();

document.getElementById('gift2Page').classList.add('active');

}

function openGift3(){

hideAllPages();

document.getElementById('gift3Page').classList.add('active');

}

function backHome(){

hideAllPages();

document.getElementById('homePage').classList.add('active');

}

function backGift(){

hideAllPages();

document.getElementById('giftPage').classList.add('active');

}
