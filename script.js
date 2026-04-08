const loadingScreen = document.getElementById('loading-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const noBtn = document.getElementById('no-btn');
const modal = document.getElementById('myModal');

// เมื่อเปิดหน้าเว็บมา
window.onload = function() {
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        questionScreen.style.display = 'block';
    }, 4500);
};

// เมื่อกดปุ่ม "เป็น"
function celebrate() {
    questionScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    document.body.style.backgroundColor = '#ffc0cb';
}

// เมื่อเอาเมาส์ไปชี้ปุ่ม "ไม่เป็น"
noBtn.addEventListener('mouseover', function() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// เมื่อกดปุ่ม "ไม่เป็น" ให้ขึ้น Modal
noBtn.addEventListener('click', function() {
    modal.style.display = 'flex';
});

function closeModal() {
    modal.style.display = 'none';
}