function cnumberFormat(reduCnumberval) {
    let formattedNumber = '';
    for (let i = 0; i < reduCnumberval.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedNumber += ' ';
        }
        formattedNumber += reduCnumberval[i];
    }
    return formattedNumber;
}

function uptCnumber(cnumber) {
    let reduCnumberval = cnumber.value.replaceAll(" ", ""); // Remove any existing spaces
    let formattedNumber = cnumberFormat(reduCnumberval);
    
    cnumber.value = formattedNumber;
    let defaultZeros = "0000 0000 0000 0000".split("");
    for (let i = 0; i < cnumber.value.length; i++) {
        defaultZeros[i] = cnumber.value[i];
    }
    let bNum = document.querySelector(".b-num");
    bNum.innerText = defaultZeros.join("");
}

function uptCname(cname) {
    let bName = document.querySelector(".b-name");
    if (cname.value.length==0) {
        bName.innerText="Elshad Aghashirinov"
    }
    else{
        bName.innerText = cname.value;
    }
}

function uptCvc(cvc) {
    let bCvc = document.querySelector(".b-cvc");
    let defaultZeros = ['0', '0', '0'];
    for (let i = 0; i < cvc.value.length; i++) {
        defaultZeros[i] = cvc.value[i];
    }
    bCvc.innerText = defaultZeros.join('');
}

function uptDateMM(dateMM){
    let bDate = document.querySelector(".b-date");
    let defaultZeros = ['0','0'];
    for (let i = 0; i < dateMM.value.length; i++) {
        defaultZeros[i] = dateMM.value[i];
    }
    
    let bDateTextList = bDate.innerText.split("");
    bDate.innerText = defaultZeros.join('') + bDateTextList.splice(2, bDate.innerText.length-1).join('');
}
function uptDateYY(dateYY){
    let bDate = document.querySelector(".b-date");
    let defaultZeros = ['0','0']
    for (let i = 0; i < dateYY.value.length; i++) {
        defaultZeros[i] = dateYY.value[i];
    }
    
    let bDateTextList = bDate.innerText.split("");
    bDate.innerText = bDateTextList.splice(0, 3).join('') + defaultZeros.join('') ;
}
