const chatWindow = document.getElementById('chatWindow');
const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const message = messageInput.value;

  try {
    await fetch('/api/chat/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    messageInput.value = '';
  } catch (err) {
    console.error('Error sending message:', err);
  }
});

// Fetch and display messages
const fetchMessages = async () => {
  try {
    const response = await fetch('/api/chat/messages');
    const messages = await response.json();
    chatWindow.innerHTML = '';
    messages.forEach(msg => {
      const messageElement = document.createElement('div');
      messageElement.textContent = msg.message;
      chatWindow.appendChild(messageElement);
    });
  } catch (err) {
    console.error('Error fetching messages:', err);
  }
};

setInterval(fetchMessages, 1000); // Refresh messages every second