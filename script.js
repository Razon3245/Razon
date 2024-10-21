document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ফর্ম সাবমিশন বন্ধ রাখছে

    // ফর্ম থেকে ডাটা নিচ্ছে
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');

    // পূর্বের error মেসেজ ক্লিয়ার করছে
    errorMessage.textContent = '';

    // পাসওয়ার্ড এবং রিসেট পাসওয়ার্ড মিলছে কিনা যাচাই করছে
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match!';
        return;
    }

    // ফর্ম সঠিকভাবে পূরণ হলে মূল কন্টেন্ট দেখাবে
    document.getElementById('form-container').style.display = 'none'; // ফর্ম লুকিয়ে রাখছে
    document.getElementById('main-content').style.display = 'block'; // মেইন অ্যাপ দেখাচ্ছে
});
function search() {
    let query = document.getElementById('searchInput').value;
    if (query) {
        window.open(`https://www.google.com/search?q=${query}`, '_blank');
    }
}

function lucky() {
    window.open('https://www.google.com/doodles', '_blank');
}