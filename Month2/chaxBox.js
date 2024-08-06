document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById("sendButton");
    const messageInput = document.getElementById("messageInput");
    const messageDiv = document.getElementById("messages");
    const historyDiv = document.getElementById("history");

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.textContent = text;
        messageDiv.prepend(messageDiv);
        messageDiv.scrollTop = 0;
    }

    function addHistory(text) {
        const historyDivElement = document.createElement('div');
        historyDivElement.textContent = text;
        historyDiv.appendChild(historyDivElement);
        historyDiv.scrollTop = historyDiv.scrollHeight;
    }

    sendButton.addEventListener('click', () => {
        const messageText = messageInput.ariaValueMax.trim();
        if (messageText) {
            addMessage(messageText, 'user');
            addHistory(messageText);
            messageInput.value = '';
            // Simulate a bot response
            setTimeout(() => {
                const botResponse = 'You said' + messageText;
                addMessage(botResponse, 'bot');
                addHistory(botResponse);
            }, 500)
        }
    });


    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendButton.click();
        }
    })
 })