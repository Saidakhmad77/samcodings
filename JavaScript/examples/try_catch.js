function myFunction() {

    let message = document.getElementById("message");
    message.innerHTML = " ";
    let x = document.getElementById("demo").value;

    try {
        if(x == "") throw " Empty";
        if(isNaN(x)) throw " Not a number!";
        if(x > 10) throw " Too high";
        if(x < 5) throw " Too low";
        alert("Correct input: " + x);
    }
    catch(err) {
        message.innerHTML = "Error" + err;
    }
    finally{
        document.getElementById("demo").value = "";
    }
}