const generatePassword = require('generate-password');

function generateRandomPassword() {
    const password = generatePassword.generate({
        length: 10,
        numbers: true
    });
    console.log('Random Password:', password);
}

generateRandomPassword();
