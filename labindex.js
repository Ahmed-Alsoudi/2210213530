
function toggleMode() {
    document.body.classList.toggle('dark-mode');
}



function updateDate() {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dateBox = document.getElementById('live-date');
    if (dateBox) {
        dateBox.textContent = dateStr;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateDate();
    setInterval(updateDate, 60000);
});

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById("toTopBtn");

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
