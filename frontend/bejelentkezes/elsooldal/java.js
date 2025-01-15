document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUser = localStorage.getItem(username);
    if (storedUser && JSON.parse(storedUser).password === password) {
        alert('Sikeres bejelentkezés!');
        window.location.href = '../harmadik/index.html';
    } else {
        alert('Hibás felhasználónév vagy jelszó!');
    }
});