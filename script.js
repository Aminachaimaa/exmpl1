function sendData() {
    let username = document.getElementById("username").value;
    
    if (username.trim() === "") {
        document.getElementById("status").innerText = "⚠️ Veuillez entrer un nom.";
        return;
    }

    fetch("https://VOTRE-NOM-UTILISATEUR.pythonanywhere.com/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username })
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("status").innerText = data;
    })
    .catch(error => {
        console.error("Erreur:", error);
        document.getElementById("status").innerText = "❌ Erreur lors de l'envoi.";
    });
}
