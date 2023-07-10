function sentEmail() {
    let form = document.getElementById("contact-form");
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let subject = document.getElementById('subject').value;
        let message = document.getElementById('message').value;

        let link = `mailto:bohdan.marchuk@techparadise.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`

        window.location.href = link;
    })
}

function openNav() {
    document.getElementById('mySidebar').style.width = "60%";
    document.getElementById('mySidebar').style.display = "block";
}

function closeNav() {
    document.getElementById('mySidebar').style.display = "none";
}