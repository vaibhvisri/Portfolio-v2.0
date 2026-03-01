function toggle(btn){

let text = btn.nextElementSibling;

text.classList.toggle("hidden");

if(text.classList.contains("hidden")){
btn.innerText="View Insights";
}else{
btn.innerText="Hide Insights";
}

}
