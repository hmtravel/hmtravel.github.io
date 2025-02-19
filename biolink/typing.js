const text = "HM TRAVEL";
const speedTyping = 250; // Tốc độ gõ chữ (ms)
const speedDeleting = 50; // Tốc độ xóa chữ (ms) (Giảm xuống để xóa nhanh hơn)
const delayAfterTyping = 1000; // Thời gian dừng sau khi gõ xong (ms)
const delayBeforeTyping = 2500; // Thời gian chờ trước khi bắt đầu lại (ms)
let i = 0;
let isDeleting = false;

function typeEffect() {
    const typingElement = document.querySelector(".typing");

    if (!isDeleting && i < text.length) {
        // Gõ từng chữ
        typingElement.textContent += text[i];
        i++;
        setTimeout(typeEffect, speedTyping);
    } else if (isDeleting && i > 0) {
        // Xóa nhanh hơn
        typingElement.textContent = text.substring(0, i - 1);
        i--;
        setTimeout(typeEffect, speedDeleting);
    } else {
        // Dừng lại trước khi đổi trạng thái (gõ/xóa)
        isDeleting = !isDeleting;
        setTimeout(typeEffect, isDeleting ? delayAfterTyping : delayBeforeTyping);
    }
}

window.onload = function () {
    setTimeout(typeEffect, delayBeforeTyping);
};
