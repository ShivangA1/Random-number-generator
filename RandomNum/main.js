const btn = document.getElementById("submit");
const num = document.getElementById("mainNum")

btn.onclick = randomise;

function randomise() {
    const floatcheck = document.getElementById("float").checked;
    const min = Number(document.getElementById("min").value);
    const max = Number(document.getElementById("max").value);
    if (max <= min) {
        alert("invalid parameters");
        return
    }
    var rnd = (Math.random() * (max - min)) + min;
    if (floatcheck) {
        num.textContent = rnd.toFixed(2);
        console.log(rnd);
    }
    else {
        num.textContent = Math.floor(rnd);
    }
}