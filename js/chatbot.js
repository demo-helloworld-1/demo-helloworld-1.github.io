document.getElementById('chatbot-button').addEventListener('click', function() {
    toggleChatbot();
});

function toggleChatbot() {
    var chatbotContainer = document.getElementById('chatbot-container');
    if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
        chatbotContainer.style.display = 'block';
    } else {
        chatbotContainer.style.display = 'none';
    }
}
