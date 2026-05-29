let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {

        let value = e.target.innerHTML;

        if (value === "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }
        else if (value === "AC") {
            string = "";
            input.value = "0";
        }
        else if (value === "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string || "0";
        }
        else {
            string += value;
            input.value = string;
        }
    });
});

   

