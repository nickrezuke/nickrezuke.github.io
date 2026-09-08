// Wait for the DOM elements to load, then select the elements
document.addEventListener("DOMContentLoaded", () => {
    const greetingText = document.getElementById("greeting");
    const ActionButton = document.getElementById("changeTextBtn");
    const helloCard = document.getElementById("helloCard");

    // Add a click event listener to the button
    ActionButton.addEventListener("click", () => {
        greetingText.textContent = "✨ Hello, World! 🚀";
        greetingText.style.color = "#34a853"; // Changes text color to green on click
    });

    // Add a mouse leave event listener on the card
    helloCard.addEventListener("mouseleave", () => {
        greetingText.textContent = "Hello, World!"; // Changes the text back
        greetingText.style.color = "#1a73e8";
    });
});
