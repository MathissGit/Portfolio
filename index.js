if(sessionStorage.getItem("counter") == null)
    sessionStorage.setItem("counter", "0");

    let counterValue = Number(sessionStorage.getItem("counter"))
    sessionStorage.setItem("counter",counterValue + 1);

    console.log("Counter Value:",  sessionStorage.getItem("counter"));
    let compteur = document.getElementById("counter");
    
    console.log(compteur)
    compteur.innerHTML = counterValue
