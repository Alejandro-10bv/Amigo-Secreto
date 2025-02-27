// Selección de elementos del DOM
const friendList = document.getElementById('friendList');
const friendInput = document.getElementById('friendName');
const resultElement = document.getElementById('result');
const drawButton = document.getElementById('draw');
const resetButton = document.getElementById('reset');

// Estado de la aplicación
let friendNames = [];

// Agregar un amigo a la lista
function addFriend() {
    const friendName = friendInput.value.trim();
    if (!friendName) return alert('Debes ingresar un nombre');
    if (friendNames.includes(friendName)) return alert('Nombre repetido, ingresa otro');

    friendNames.push(friendName);
    displayFriend(friendName);
    clearInput();
    clearResult();
    updateButtons();
}

// Mostrar un amigo en la lista
function displayFriend(name) {
    const newListItem = document.createElement('li');
    newListItem.textContent = name;
    friendList.appendChild(newListItem);
}

// Limpiar el campo de entrada
function clearInput() {
    friendInput.value = '';
    friendInput.placeholder = 'Escribe un nombre';
}

// Limpiar el mensaje de resultado
function clearResult() {
    resultElement.textContent = '';
}

// Sortear un amigo
function drawFriend() {
    if (friendNames.length < 2) {
        return displayResult(friendNames.length ? 'No hay suficientes amigos para sortear.' : 'No ingresaste ningún amigo');
    }

    const winnerName = friendNames[Math.floor(Math.random() * friendNames.length)];
    displayResult(`El amigo secreto sorteado es: ${winnerName}`);
    clearFriendList();
    updateButtons();
}

// Mostrar el resultado
function displayResult(message) {
    resultElement.textContent = message;
}

// Limpiar la lista de amigos
function clearFriendList() {
    friendList.innerHTML = '';
    friendNames = [];
}

// Reiniciar el sorteo
function resetDraw() {
    clearFriendList();
    clearResult();
    updateButtons();
}

// Actualizar el estado de los botones
function updateButtons() {
    drawButton.disabled = friendNames.length < 2;
    resetButton.disabled = friendNames.length === 0;
}

// Asignar eventos a los botones
document.getElementById('add').addEventListener('click', addFriend);
drawButton.addEventListener('click', drawFriend);
resetButton.addEventListener('click', resetDraw);

// Estado inicial de los botones
updateButtons();
