document
  .getElementById("user-input")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default action of the Enter key (e.g., form submission)
      sendMessage(); // Call the function to send the message
    }
  });

function sendMessage() {
  const inputField = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userMessage = inputField.value.trim();

  if (userMessage === "") return;

  // Append user message
  const userMessageElement = document.createElement("div");
  userMessageElement.classList.add("chat-message", "user-message");
  userMessageElement.textContent = userMessage;
  chatBox.appendChild(userMessageElement);

  // Generate bot response
  let botResponse = getBotResponse(userMessage);

  // Append bot message
  const botMessageElement = document.createElement("div");
  botMessageElement.classList.add("chat-message", "bot-message");
  botMessageElement.textContent = botResponse;
  chatBox.appendChild(botMessageElement);

  // Clear input field
  inputField.value = "";

  // Scroll to bottom
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
  message = message.toLowerCase();
  if (message.includes("hello") || message.includes("hi")) {
    return "Hi there! How can I help you?";
  } else if (message.includes("your name")) {
    return "I am a chatbot created to assist you.";
  } else if (message.includes("bye")) {
    return "Goodbye! Have a great day!";
  } else if (message.includes("how are you")) {
    return "I am just a bot, but I'm doing well!";
  } else if (message.includes("thank you")) {
    return "You're welcome!";
  } else if (message.includes("time")) {
    return `The current time is ${new Date().toLocaleTimeString()}.`;
  } else if (
    message.includes("+") ||
    message.includes("-") ||
    message.includes("*") ||
    message.includes("/")
  ) {
    try {
      // Evaluate the expression
      const result = eval(message);
      return `The result is ${result}.`;
    } catch (error) {
      return "Sorry, I couldn't process that calculation.";
    }
  } else {
    return "Sorry, I didn't understand that.";
  }
}
