
document.addEventListener("DOMContentLoaded", function () {
    const signupBtn = document.getElementById("signupBtn");
    if (signupBtn) {
        signupBtn.addEventListener("click", function () {
            alert("✅ Successfully Signed Up!");
        });
    }
});