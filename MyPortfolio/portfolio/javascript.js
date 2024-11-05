
function toggleChatBot() {
    const chatContainer = document.getElementById('chat-container');
   // chatContainer.style.display = chatContainer.style.display === "block" ? "none" : "block";
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


        
document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');

    if (userInput) {
        // Append user message
        const userMessage = document.createElement('div');
        userMessage.classList.add('user-message');
        userMessage.textContent = userInput;
        chatBox.appendChild(userMessage);

        // Clear input field
        document.getElementById('user-input').value = '';

        // Simulate bot response
        const botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        botMessage.textContent = "Bot response here"; // Replace with actual bot response logic
        chatBox.appendChild(botMessage);

        // Scroll to the bottom
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}); 









function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('p');
    messageElement.textContent = `${sender}: ${message}`;

    if (sender === "Chatbot") {
        messageElement.classList.add("bot-message")
    } else if (sender === "User") {
        messageElement.classList.add("user-message")
    }

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
}

        
        function getChatbotResponse(message) {
            // Simple responses based on keywords
            const lowerMessage = message.toLowerCase();
            if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
                return 'Hello😊 How can I help you today?';
            } else if (lowerMessage.includes('help')) {
                return 'Sure, what do you need help with?';
            } else if (lowerMessage.includes('education')) {
                return 'I have bachelor"s degree in Computer Science';
            } else if (lowerMessage.includes('experience')) {
                return 'I did an IT internship at MLM';
            } else if (lowerMessage.includes('location')|| lowerMessage.includes('where') || lowerMessage.includes('cv')) {    
                return 'Please go to navigation bar and see resume';
            } else if (lowerMessage.includes('Skills')|| lowerMessage.includes('skill')) {
                return 'I have strong time management, communication, customer service, delegation & teamwork skills.My technnical skills include c++,CSS,Java,HTML & Javascript';
            } else if (lowerMessage.includes('call') || lowerMessage.includes('contact') || lowerMessage.includes('email')){
                return ' You can call/whatsapp/sms me on 0765725003 or inbox nlekolwana6@gmail.com';
            } else {
                return 'Sorry😒, I did not understand that.';
            }
        }
        
             document.getElementById('send-button').addEventListener('click', function() {
            const userInput = document.getElementById('user-input').value;
            const chatBox = document.getElementById('chat-box');
        
            if (userInput) {
                // Append user message
                const userMessage = document.createElement('div');
                userMessage.classList.add('user-message');
                userMessage.textContent = userInput;
                chatBox.appendChild(userMessage);
        
                // Clear input field
                document.getElementById('user-input').value = '';
        
                // Simulate bot response
                const botMessage = document.createElement('div');
                botMessage.classList.add('bot-message');
                botMessage.textContent = "Bot response here"; // Replace with actual bot response logic
                chatBox.appendChild(botMessage);
        
                // Scroll to the bottom
                chatBox.scrollTop = chatBox.scrollHeight;
            }
        });
        
        
        

