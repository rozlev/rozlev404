document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    if (localStorage.getItem(newUsername)) {
        alert('Ez a felhasználónév már létezik!');
    } else {
        localStorage.setItem(newUsername, JSON.stringify({ password: newPassword }));
        alert('Sikeres regisztráció! Most már bejelentkezhetsz.');
        window.location.href = '../elsooldal/index.html';
    }
});