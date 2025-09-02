let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      try {
        // Replace √number with Math.sqrt(number)
        string = string.replace(/√(\d+)/g, "Math.sqrt($1)");

        // Replace base^power with Math.pow(base, power)
        string = string.replace(/(\d+)\^(\d+)/g, "Math.pow($1,$2)");

        string = eval(string);
        document.querySelector("input").value = string;
      } catch {
        document.querySelector("input").value = "Error";
      }
    } else if (e.target.innerHTML == "√") {
      string += "√";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "clear") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
