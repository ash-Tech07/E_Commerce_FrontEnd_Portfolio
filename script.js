//Menu script
document.getElementById("menuBtnID").addEventListener("click", function () {
    if (document.getElementById("menuIcon").classList.contains("fa-bars")) {
        document.getElementById("menuIcon").classList.remove("fa-bars");
        document.getElementById("menuIcon").classList.add("fa-circle-xmark");
        document.getElementById("menuToggledID").style.opacity = "1";
        document.getElementById("menuToggledID").style.zIndex = "2";

    } else { 
        document.getElementById("menuIcon").classList.remove("fa-circle-xmark");
        document.getElementById("menuIcon").classList.add("fa-bars");
        document.getElementById("menuToggledID").style.opacity = "0";
        document.getElementById("menuToggledID").style.zIndex = "0";

    }
});


//Menu Appearing script and screen responsiveness
window.addEventListener("load", function () { 
    if (screen.width < 1050) {
        document.getElementById("cartIcon").classList.remove("fa-2xl");
        document.getElementById("cartIcon").classList.add("fa-xl");
    }
    if (screen.width < 992) {
        document.getElementById("cartID").style.display = "none";
        document.getElementById("ordersAndReturnsID").style.display = "none";
        document.getElementById("accountID").style.display = "none";
        document.getElementById("navToggler").style.display = "block"; 
        
        document.getElementById("topicsBarID").style.display = "none";
    }
    if (screen.width < 600) { 
        document.getElementById("searchBarID").style.display = "none";
        document.getElementById("searchBar2ID").style.display = "flex";
    }
});

window.addEventListener("resize", function () { 

    if (screen.width < 1050) {
        document.getElementById("cartIcon").classList.remove("fa-2xl");
        document.getElementById("cartIcon").classList.add("fa-xl");
    } else { 
        document.getElementById("cartIcon").classList.remove("fa-xl");
        document.getElementById("cartIcon").classList.add("fa-2xl");
    }

    if (screen.width < 992) {
        document.getElementById("cartID").style.display = "none";
        document.getElementById("ordersAndReturnsID").style.display = "none";
        document.getElementById("accountID").style.display = "none";
        document.getElementById("navToggler").style.display = "block";

        document.getElementById("topicsBarID").style.display = "none";
    } else {
        document.getElementById("navToggler").style.display = "none";
        document.getElementById("accountID").style.display = "block";
        document.getElementById("ordersAndReturnsID").style.display = "block";
        document.getElementById("cartID").style.display = "block";

        document.getElementById("topicsBarID").style.display = "flex";
    }
    
    if (screen.width < 600) {
        document.getElementById("searchBarID").style.display = "none";
        document.getElementById("searchBar2ID").style.display = "flex";
    } else { 
        document.getElementById("searchBar2ID").style.display = "none";
        document.getElementById("searchBarID").style.display = "flex";
    }
});



// Carousel changing script
var imgNum = 1;
document.getElementById("leftArrowID").addEventListener("click", function () {
    imgNum = imgNum > 1 ? imgNum - 1 : 4;
    document.getElementById("offersCarouselID").style.backgroundImage = "url(images/ama" + imgNum + ".jpg)";
    console.log(imgNum);
});

function nextImage() { 
    imgNum = imgNum < 4 ? imgNum + 1 : 1;
    document.getElementById("offersCarouselID").style.backgroundImage = "url(images/ama" + imgNum + ".jpg)";
}

document.getElementById("rightArrowID").addEventListener("click", nextImage);

setInterval(nextImage, 10000);


//Top Deals menu

var shift = 0;
var shiftBandwith = 527;
var screenWidth = screen.width;
var defScreenWidth = 255;
var mul = 7;

while (screenWidth >= defScreenWidth) { 
    shiftBandwith -= 15;
    defScreenWidth += 100; 
}

if (screenWidth <= 355) { 
    shiftBandwith = 350;
    mul = 10;
}

document.getElementById("leftScrollID").addEventListener("click", function () {
    if (shift < 0) {
        shift += shiftBandwith;
        var cols = document.getElementsByClassName("item");
        for (let i in cols) {
            cols[i].style.transform = "translateX(" + shift + "px)";
        }
    }
});

document.getElementById("rightScrollID").addEventListener("click", function () {
    if (shift > mul * (shiftBandwith*-1)) {
        shift -= shiftBandwith;
        console.log(shiftBandwith);
        var cols = document.getElementsByClassName("item");
        for (let i in cols) {
            cols[i].style.transform = "translateX(" + shift + "px)";
        }
    }
});


//Random Time Countdown Generation script
function randTimeGen() {
    var randHour = Math.floor(Math.random() * 24).toString(10);
    randHour = randHour.length == 1 ? "0" + randHour : randHour;

    var randMin = Math.floor(Math.random() * 60).toString(10);
    randMin = randMin.length == 1 ? "0" + randMin : randMin;

    var randSec = Math.floor(Math.random() * 60).toString(10);
    randSec = randSec.length == 1 ? "0" + randSec : randSec;

    var randTime = randHour + ":" + randMin + ":" + randSec;

    return randTime;

}

window.addEventListener("load", function () { 
    let spanNode = document.querySelectorAll("span.countdown");
    console.log();
    for (let i = 0; i < spanNode.length; i++) {
        spanNode[i].textContent = randTimeGen();
    }
    setInterval(updateOfferTime, 1000);
});

function updateOfferTime() { 
    let spanNode1 = document.querySelectorAll("span.countdown");
    for (let i = 0; i < spanNode1.length; i++) {
        let oldTime = spanNode1[i].textContent;

        let sec = oldTime.substring(oldTime.lastIndexOf(":") + 1);
        let min = oldTime.substring(oldTime.indexOf(":")+1, oldTime.lastIndexOf(":"));
        let hr = oldTime.substring(0, oldTime.indexOf(":"));

        sec = parseInt(sec) - 1;
        min = parseInt(min);
        hr = parseInt(hr);
        if (sec <= 0) { 
            min -= 1;
            sec = 59;
        }
        if (min <= 0) { 
            hr -= 1;
            min = 59;
        }
        let newTime = "";
        if (hr == 0 && min == 0 && sec == 0) {
            newTime = "Offer Expired";
        } else { 
            hr = hr.toString(10);
            hr = hr.length == 1 ? "0" + hr : hr;
            min = min.toString(10);
            min = min.length == 1 ? "0" + min : min;
            sec = sec.toString(10);
            sec = sec.length == 1 ? "0" + sec : sec;

            newTime = hr + ":" + min + ":" + sec;
        }
        spanNode1[i].textContent = newTime;
    }
}
