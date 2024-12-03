// src/main.script.js
export function getCartData() {
    try {
        return JSON.parse(localStorage.getItem('cart')) || {};
    } catch (error) {
        // Возвращаем пустой объект, если произошла ошибка при парсинге
        return {};
    }
}
