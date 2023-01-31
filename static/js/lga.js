function showLGAs() { 
    var select = document.getElementById("pers_state_origin");
    var selected = select.options[select.selectedIndex].innerHTML.trim(); 

    if(selected == "") {
        return;
    } else
    {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("lgas-placeholder").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("POST", "lgas.php?state=" + selected, true);    
        xmlhttp.send();
    }
}

