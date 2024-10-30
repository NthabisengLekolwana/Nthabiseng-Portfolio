
function toggleChatBot() {
    const chatContainer = document.getElementById('chat-container');
    // Toggle the display property
    if (chatContainer.style.display === 'block') {
        chatContainer.style.display = 'none';
    } else {
        chatContainer.style.display = 'block';
    }
}

// Initialize the chat container to be hidden when the page loads
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('chat-container').style.display = 'none';
});


document.getElementById('send-button').addEventListener('click', sendMessage);

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
 
    
    if (message) {
        appendMessage('User', message);
        userInput.value = '';
        
        // Simulate a chatbot response
        setTimeout(() => {
            const response = getChatbotResponse(message);
            appendMessage('Chatbot', response);
            
        }, 500);
    }
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('p');
    messageElement.textContent = `${sender}: ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
}

function getChatbotResponse(message) {
    // Simple responses based on keywords
   if (message.toLowerCase().includes('hello')||('hi')||('hey')) {
        return 'Hello! How can I help you today?';
    } else if (message.toLowerCase().includes('help')) {
        return 'Sure, what do you need help with?';
       } else if  (message.toLowerCase().includes('education')||('experience')) {
         return 'Please go to About';
       } else {
        return 'Sorry, I did not understand that.';
       }
  
}

