const aside=document.getElementById("side_menu");
const nav=document.getElementById("first_nav");

function hideMenu(){
    document.getElementById("backg").style.display = "none";
    nav.style.display = "none";
    aside.style.display="none";
}

function goBack(){
    nav.style.display = "block";
    aside.style.display = "none";
    document.getElementById("back").style.display = "none";
}

function sideMenu(){
    nav.style.display = "none";
    aside.style.display = "block";
    document.getElementById("back").style.display = "block";
}

function seeMenu(){
    document.getElementById("backg").style.display = "block";
    nav.style.display = "block";
}