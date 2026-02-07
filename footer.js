const footerContent = `
    <div class="social-buttons-container">
        <a href="https://whatsapp.com/channel/0029VbBfWfm05MUZXJv6pY0B" target="_blank" class="social-btn btn-whatsapp">Join WhatsApp Group</a>
        <a href="https://t.me/Jobncrlive" target="_blank" class="social-btn btn-telegram">Join Telegram Channel</a>
    </div>
    <p style="text-align:center; padding:15px; font-size:12px; color:#666;">© 2026 NCRONE Team - All Jobs Free</p>
`;

document.addEventListener("DOMContentLoaded", function() {
    const placeholder = document.getElementById("social-footer-placeholder");
    if (placeholder) { placeholder.innerHTML = footerContent; }
});