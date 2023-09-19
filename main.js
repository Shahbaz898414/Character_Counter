const left=document.querySelector('.left')
const right=document.querySelector('.right')
const area=document.querySelector('.text');



area.addEventListener('input', function () {
  left.innerHTML=50-area.value.length;
  right.innerHTML=area.value.length;
  if(50-area.value.length===0){
    area.disabled =true;
  }
});