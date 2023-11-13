// Sample affectionate messages
const affectionateMessages = [
    "You mean the world to me!",
    "I love you more than words can express.",
    "You make every day better with your presence.",
    "You're my sunshine on a cloudy day.",
    // Add more messages here
];

// Initialize love meter progress (0 to 100)
let loveMeterProgress = 0;

// Function to update the Love Meter
function updateLoveMeter(progress) {
    const meterProgress = document.getElementById("meter-progress");
    meterProgress.style.width = `${progress}%`;
}

// Function to display a random affectionate message
function displayRandomMessage() {
    const messageContainer = document.getElementById("message-container");
    const randomIndex = Math.floor(Math.random() * affectionateMessages.length);
    const message = affectionateMessages[randomIndex];

    // Create a new message element
    const messageElement = document.createElement("p");
    messageElement.textContent = message;

    // Append the message to the container
    messageContainer.appendChild(messageElement);
}

// Event listener for interacting with the Love Meter
document.addEventListener("click", () => {
    // Increase the Love Meter progress by 10%
    loveMeterProgress += 10;
    
    // Limit the progress to a maximum of 100%
    if (loveMeterProgress > 100) {
        loveMeterProgress = 100;
    }

    // Update the Love Meter display
    updateLoveMeter(loveMeterProgress);

    // Display a random affectionate message
    displayRandomMessage();
});
