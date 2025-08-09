let buttons = document.querySelectorAll(".button,.sign,.AC,.equal");
let nums = document.querySelectorAll(".num");
let signs = document.querySelectorAll(".sign");
let scr = document.querySelector(".screen").firstElementChild;
let AC = document.querySelector(".AC");
let equal = document.querySelector(".equal");
let scrArr = [];
var len = scrArr.length;

buttons.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "grey";
        item.style.fontSize = "35px";
    });
});

buttons.forEach(item => {
    item.addEventListener("mouseout", () => {
        item.style.backgroundColor = "#cacad0";
        item.style.fontSize = "24px";
    });
});

nums.forEach(item => {
    item.addEventListener("click", () => {
        scrArr.push(item.innerHTML);
        console.log(scrArr);
        if(scrArr[len - 3] === "="){
            scr.innerHTML = item.innerHTML;
        }
        else{
            scr.innerHTML += item.innerHTML;
        }
    });
});

signs.forEach(item => {
    item.addEventListener("click", () => {
        let oldscrHTML = scr.innerHTML;
        if(scrArr[len - 1] === item.innerHTML){
            scrArr.push(item.innerHTML);
            scr.innerHTML = oldscrHTML;
            console.log(scrArr, "upar");
        } 
        else if(len>=2
             && (scrArr[len-1] === "+" ||scrArr[len-1] === "-" ||scrArr[len-1] === "*" ||scrArr[len-1] === "/")
             && (scrArr[len-2] === "+" ||scrArr[len-2] === "-" ||scrArr[len-2] === "*" ||scrArr[len-2] === "/")
             && (scrArr[len-1] !== scrArr[len-2])){
            scrArr.push(item.innerHTML);
            scr.innerHTML += item.innerHTML;
            scr.innerHTML = scrArr.pop();
            console.log(scrArr, "beech");                     
        }
        else{
            scrArr.push(item.innerHTML);
            scr.innerHTML += item.innerHTML;
            console.log(scrArr, "neeche");                     
        }
    });
});

equal.addEventListener("click", () => {
    scr.innerHTML = eval(scr.innerHTML);
    scrArr.push("=",scr.innerHTML);
    console.log(scrArr);
});

AC.addEventListener("click", () => {
    scr.innerHTML = "";
});

/*let buttons = document.querySelectorAll(".button, .sign, .AC, .equal");
let nums = document.querySelectorAll(".num");
let signs = document.querySelectorAll(".sign");
let scr = document.querySelector(".screen").firstElementChild;
let AC = document.querySelector(".AC");
let equal = document.querySelector(".equal");
let scrArr = [];

buttons.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "grey";
        item.style.fontSize = "35px";
    });

    item.addEventListener("mouseout", () => {
        item.style.backgroundColor = "#cacad0";
        item.style.fontSize = "24px";
    });
});

nums.forEach(item => {
    item.addEventListener("click", () => {
        if (scrArr.length > 0 && scrArr[scrArr.length - 1] === "=") {
            scrArr = [];
            scr.innerHTML = item.innerHTML;
        } else {
            scrArr.push(item.innerHTML);
            scr.innerHTML += item.innerHTML;
        }
    });
});

signs.forEach(item => {
    item.addEventListener("click", () => {
        if (scrArr.length > 0 && ["+", "-", "*", "/"].includes(scrArr[scrArr.length - 1])) {
            // If the last element is an operator and it's not the same as the current one, replace it
            if (scrArr[scrArr.length - 1] !== item.innerHTML) {
                scrArr[scrArr.length - 1] = item.innerHTML;
                scr.innerHTML = scrArr.join('');
            }
        } else {
            scrArr.push(item.innerHTML);
            scr.innerHTML += item.innerHTML;
        }
    });
});

equal.addEventListener("click", () => {
    scr.innerHTML = eval(scr.innerHTML);
    scrArr = ["=", scr.innerHTML];
    console.log(scrArr);
});

AC.addEventListener("click", () => {
    scr.innerHTML = "";
    scrArr = [];
});*/










    
    





