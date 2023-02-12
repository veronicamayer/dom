/* ---------Lev 1_2---------- */
let isPink = false;

document.querySelector("button").addEventListener("click", () => {
    isPink =!isPink;
    
    document.querySelectorAll(".example").forEach(item => {
    item.style.backgroundColor = isPink ? "pink" : "";
    });
});

/* ---------Lev 2_1---------- */
document.querySelector("#navChange").addEventListener("click", () => {
    document.querySelector("#navHome").style.backgroundColor = "pink";
    document.querySelector("#navHome").style.transform = "scaleX(-1)";
    document.querySelector("#navHome").style.height = "60px";
});

/* ---------Lev 2_2---------- */
console.log("---------Lev 2_2---------");
document.querySelector("input[type=submit]").addEventListener("click", () => {
    console.log(`Name: ${document.querySelector("#vorname").value} ${document.querySelector("#nachname").value}, Land: ${document.querySelector("#land").value}`);
});

/* ---------Lev 2_3---------- */
document.querySelector("#navChange2").addEventListener("click", () => {
    document.getElementsByTagName("a")[4].style.backgroundColor = "#f6c89f";
    document.getElementsByTagName("a")[5].style.backgroundColor = "#ffe7d1";
    document.getElementsByTagName("a")[6].style.backgroundColor = "#4b8e8d";
    document.getElementsByTagName("a")[7].style.backgroundColor = "#396362";

    for (let i = 4; i < document.getElementsByTagName("a").length; i++) {
        document.getElementsByTagName("a")[i].style.color = "#333";
    };
});

/* ---------Lev 2_4---------- */
document.querySelector("#button").addEventListener("click", (event) => {
    event.preventDefault();

    let color = document.querySelector("#farbeAuswahlen").value;
    color = color.toLowerCase().replace(" ", "");
    document.querySelector("#Lev2_4 article").style.backgroundColor = color;
});

/* ---------Lev 2_10---------- */
function changeClass(className) {
    console.log(className);
    document.querySelector("#element").classList.add = className;
}
