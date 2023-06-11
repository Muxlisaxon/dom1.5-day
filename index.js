let selectFaild = document.getElementById("select_field");
let selectText = document.getElementById("select_text");
let options = document.getElementsByClassName("options");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrowIcon")

selectFaild.onclick = function () {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
}



for (option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");

    }
}