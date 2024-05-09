const btn=document.querySelector("#btn")
let randomcolor=()=>{
let val="0123456789ABCDEF"
let hash="#"
for(i=0;i<6;i++){
  hash=hash+val[Math.floor(Math.random()*val.length)]
  btn.innerHTML=hash
}
return hash
}
let changecolor=()=>{
  document.body.style.backgroundColor=randomcolor()
}

btn.addEventListener("click",changecolor)


