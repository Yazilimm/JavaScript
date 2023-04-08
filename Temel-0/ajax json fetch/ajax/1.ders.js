document.getElementById("btn").addEventListener("click", function() {
    //Xml objesi

    const xhr= new XMLHttpRequest();

    xhr.onload = function() {
        if (xhr.status == 200) {
            document.getElementById("ajax").textContent = "Sana Cevabim :" + xhr.responseText;
        }
    }

    // xhr.onreadystatechange = function() {
    //     if (xhr.status === 200 && xhr.readyState == 4) {
    //         console.log(this.responseText);
    //     }
    // }

    xhr.open("GET","gg.txt",true);

    xhr.send();

});