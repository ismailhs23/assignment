function opr(choice){
    val1 = parseFloat(document.getElementById("val1").value)
    val2 = parseFloat(document.getElementById("val2").value)
    switch (choice){
        case "add":
            document.getElementById("res") .value= val1 +val2
            break
            case "mul":
            document.getElementById("res") .value= val1 *val2
            break
            case "sub":
            document.getElementById("res") .value= val1 -val2
            break
            case "div":
                if(val2==0)
            document.getElementById("res") .value= "value 2 cannot be 0"
        else{
            document.getElementById("res").value = val1/val2
        }
            break
    }
}
function re(){
    document.getElementById("val1").value=""
       document.getElementById("val2").value=""
          document.getElementById("res").value=""
}