const btm = document.createElement('button');

btm.onclick = function()
{
    alert("ez egy natív kód");
}

btm.innerHTML="Natív gomb";

document.getElementById("nativ-button-container").appendChild(btm)


