// Function to generate a random password
function generatePassword() {
    // Retrieve the desired length from the length input field
    const length = document.getElementById('length').value;
    // Check if the 'include numbers' checkbox is checked
    const includeNumbers = document.getElementById('includeNumbers').checked;
    // Check if the 'include special characters' checkbox is checked
    const includeSpecialChars = document.getElementById('includeSpecialChars').checked;

    // Define character sets for the password
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+=";

    // Start with a letters character set
    let characters = letters;
    // Add numbers if the option is selected
    if (includeNumbers) {
        characters += numbers;
    }
    // Add special characters if the option is selected
    if (includeSpecialChars) {
        characters += specialChars;
    }

    // Initialize an empty password string
    let password = "";
    // Generate the password with random characters
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    // Display the generated password in the password paragraph
    document.getElementById('password').textContent = password;
}
