function getCountries() {
    var param = document.search_countries.country.value;  
    var url="Auto?country=" + param;  
    var xhttp = new XMLHttpRequest(); 
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {  
            var val = xhttp.responseText;  
            document.getElementById('countries').innerHTML = val;  
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}