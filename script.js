let dizi1=["0","1","2","3","4","5","6","7","8","9"];
let dizi2=["7","8","9","10","11","12","13","14","15"];
dizi1.splice(7,3);
let birlesim=dizi1.concat(dizi2);
let sonuc=document.getElementById("sonuc");
let button=document.getElementById("btnCikar");
let diziBir=document.getElementById("diziBir");
let diziIki=document.getElementById("diziIki");

button.addEventListener("click", ()=>{
    diziBir.innerHTML=dizi1;
    diziIki.innerHTML=dizi2;
    sonuc.innerHTML=birlesim;
});
