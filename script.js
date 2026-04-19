// Função para alternar visualmente entre Login e Registro
function alternarTelas() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }
}

// LÓGICA DE REGISTRO
function registrarUsuario() {
    const nick = document.getElementById('reg-user').value.trim();
    const pass = document.getElementById('reg-pass').value.trim();

    if (nick === "" || pass === "") {
        alert("Preencha todos os campos!");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioExiste = usuarios.find(u => u.nickname.toLowerCase() === nick.toLowerCase());

    if (usuarioExiste) {
        alert("Erro: Este nickname já está em uso!");
    } else {
        usuarios.push({ nickname: nick, password: pass });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        
        // APÓS CRIAR CONTA: Já loga automaticamente e vai pro Quiz
        localStorage.setItem('usuarioAtivo', nick); 
        alert("Conta criada! Redirecionando para o Quiz...");
        window.location.href = "quiz.html"; 
    }
}

// LÓGICA DE LOGIN
function fazerLogin() {
    const nick = document.getElementById('login-user').value.trim();
    const pass = document.getElementById('login-pass').value.trim();

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(u => u.nickname === nick && u.password === pass);

    if (usuario) {
        // SALVA O LOGIN: Guarda o nome do usuário ativo
        localStorage.setItem('usuarioAtivo', nick);
        window.location.href = "quiz.html";
    } else {
        alert("Usuário ou senha incorretos.");
    }
}
