// ดึงค่า Element ต่างๆ
const loadingScreen = document.getElementById('loading-screen');
const confessScreen = document.getElementById('confess-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const noBtn = document.getElementById('no-btn');
const modal = document.getElementById('myModal');

// 1. หน้า Loading ไปหน้า บอกความในใจ (3 วินาที)
window.onload = function() {
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        confessScreen.style.display = 'block';
    }, 3000);
};

// 2. หน้าบอกความในใจ ไปหน้า ถาม
function goToQuestion() {
    confessScreen.style.display = 'none';
    questionScreen.style.display = 'block';
}

// 3. เมื่อกด "เป็น"
function celebrate() {
    questionScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    document.body.style.backgroundColor = '#ffc0cb';
}

// ปุ่ม "ไม่เป็น" วิ่งหนี
noBtn.addEventListener('mouseover', function() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

noBtn.addEventListener('click', () => { modal.style.display = 'flex'; });
function closeModal() { modal.style.display = 'none'; }
