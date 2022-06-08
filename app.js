let hesap = document.querySelector('.btns')
let alt = document.querySelector('.alt')
let ust = document.querySelector('.ust')
let del = document.querySelector('.sil')


hesap.addEventListener("click", (e) => {
    if(e.target.classList.contains("num")){
        alt.innerHTML += e.target.innerHTML; 
    }
    else if (e.target.classList.contains("islem")){
        ust.innerHTML = alt.innerHTML + " " + e.target.innerHTML;
        alt.innerHTML = "";
    }
    else if (e.target == document.querySelector(".sil")){
        alt.innerHTML = ""
        ust.innerHTML = ""
    }
    else if (e.target == document.querySelector(".yuzde")){
        alt.innerHTML = parseFloat(alt.innerHTML)/100;
    }
    else if (e.target == document.querySelector(".hal")){
        alt.innerHTML = -alt.innerHTML
    }
    else if (e.target == document.querySelector(".esitle")){
        esitle();   
    }
    
});


// hesap.addEventListener('click' ,(e)=>{
//     if(e.target.classList.contains('num')){
//         alt.innerHTML += e.target.innerHTML;
//     }
//     else if(e.target.classList.contains('islem')){
//         ust.innerHTML = alt.innerHTML + " " + e.target.innerHTML;
//         alt.innerHTML = " ";
//     }
//     else if(e.target== document.querySelector('.del')) {
//         alt.innerHTML = "";
//         ust.innerHTML = "";
//     }
//     else if (e.target== document.querySelector('.yuzde')){
//         alt.innerHTML = parseFloat(alt.innerHTML)/100;
//     }
//     else if(e.target== document.querySelector('.hal')){
//         alt.innerHTML = -alt.innerHTML
//     }
//     else if (e.target == document.querySelector('hesapla')){
//         hesapla();
//     }
// });



function esitle() {
    if (ust.innerHTML.slice(-1) == "÷"){
        alt.innerHTML = (ust.innerHTML.slice(0, -1) / alt.innerHTML).toFixed(1);
    }
    else if (ust.innerHTML.slice(-1) == "x"){
        alt.innerHTML = ust.innerHTML.slice(0, -1) * alt.innerHTML;
    }
    else if (ust.innerHTML.slice(-1) == "-"){
        alt.innerHTML = ust.innerHTML.slice(0, -1) - alt.innerHTML;
    }
    else if (ust.innerHTML.slice(-1) == "+"){
        alt.innerHTML = parseFloat(ust.innerHTML.slice(0, -1)) + parseFloat(alt.innerHTML);
    }    
}


// function hesapla() {
//     if(ust.innerHTML.slice(-1) == '÷'){
//         alt.innerHTML = (ust.innerHTML.slice(0, -1) / alt.innerHTML).toFixed(1);
//     }
//     else if (ust.innerHTML.slice(-1) == 'x'){
//         alt.innerHTML = ust.innerHTML.slice(0,-1)*alt.innerHTML;
//     }
//     else if (ust.innerHTML.slice(-1) == '-'){
//         alt.innerHTML = ust.innerHTML.slice(0,-1)- alt.innerHTML;
//     }
//     else if (ust.innerHTML.slice(-1) == '+'){
//         alt.innerHTML = parseFloat(ust.innerHTML.slice(0, -1)) + parseFloat(alt.innerHTML);
//     }
// }