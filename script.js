
function checkPwd(){
 if(document.getElementById('pwd').value==='200704'){
  login.style.display='none';
  home.style.display='block';
 } else alert('Wrong Password');
}
function showGifts(){giftArea.style.display='block';}
function openGift(id){
 document.querySelectorAll('.giftcontent').forEach(x=>x.style.display='none');
 document.getElementById(id).style.display='block';
}
