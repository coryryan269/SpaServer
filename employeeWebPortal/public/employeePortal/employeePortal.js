"use strict";

// START UP ROUTINES
let startUpRoutine = () => {
    let counter = 0;
    let mainDivs = document.getElementsByClassName("main-display");
    for (let div in mainDivs){
        if (counter < 4)
            try {mainDivs[div].style.height = (window.innerHeight - 205) + 'px';} catch(err) {}
        else
            break;
        counter = counter + 1;
    }
    // counter, mainDivs = null;
    function ref(elementID){return document.getElementById(elementID);}
    function hideMainDivs(){
        counter = 0;
        for (let div in mainDivs){
            if (counter < 4)
                try {mainDivs[div].style.display = "none"} catch(err) {}
            else
                break;
            counter = counter + 1;
        }
    };
    ref("apptButton").addEventListener("click", () => {hideMainDivs(); ref("appointmentsDiv").style.display = "block";})
    ref("customersButton").addEventListener("click", () => {hideMainDivs(); ref("customersDiv").style.display = "block";})
    ref("posButton").addEventListener("click", () => {hideMainDivs(); ref("posDiv").style.display = "block";})
    ref("commsButton").addEventListener("click", () => {hideMainDivs(); ref("commsDiv").style.display = "block";})
}; startUpRoutine();

