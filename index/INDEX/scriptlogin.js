
var input = document.querySelector('.pswrd');
var show = document.querySelector('.show');
show.addEventListener('click', active);
function active(){
  if(input.type === "password"){
    input.type = "text";
    show.style.color = "#1DA1F2";
    show.textContent = "HIDE";
  }else{
    input.type = "password";
    show.textContent = "SHOW";
    show.style.color = "#111";
  }
}