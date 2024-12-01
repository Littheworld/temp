const tempinput = document.getElementById("tempinput");
const tofarenheit = document.getElementById("tofarenheit");
const tocelcius = document.getElementById("tocelcius");
const display = document.getElementById("display");

let temp;

    function Convert(){
        if(tofarenheit.checked){
            temp = Number(tempinput.value);
            temp = temp * 9 / 5 + 32;
            display.textContent = temp.toFixed(1) + "°f";
        }
        else if(tocelcius.checked){
            temp = Number(tempinput.value);
            temp = (temp -32)* 5 / 9;
            display.textContent = temp.toFixed(1)  + "°c";
        }
        else{
            display.textContent = "please select your unit"
        }
    }


    