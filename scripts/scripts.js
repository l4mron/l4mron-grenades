// Функция для загрузки HTML содержимого
function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading the file:', error));
}

// Загружаем шапку и подвал
window.onload = function() {
    loadHTML('../header.html', 'header');
    loadHTML('../footer.html', 'footer');
};