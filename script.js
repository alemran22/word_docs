const bold = document.getElementById("bold");
const italic = document.getElementById("italic");
const underline = document.getElementById("underline");
const textarea = document.getElementById("textarea");
const textvalue = textarea.innerText;

bold.addEventListener("click", function () {
    textvalue.style.fontWeight = "bold";
})