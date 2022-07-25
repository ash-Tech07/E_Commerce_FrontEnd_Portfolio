//Menu script
document.getElementById("menuBtnID").addEventListener("click", function () {
    if (document.getElementById("menuIcon").classList.contains("fa-bars")) {
        document.getElementById("menuIcon").classList.remove("fa-bars");
        document.getElementById("menuIcon").classList.add("fa-circle-xmark");
        document.getElementById("menuToggledID").style.opacity = "1";
    } else { 
        document.getElementById("menuIcon").classList.remove("fa-circle-xmark");
        document.getElementById("menuIcon").classList.add("fa-bars");
        document.getElementById("menuToggledID").style.opacity = "0";
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

