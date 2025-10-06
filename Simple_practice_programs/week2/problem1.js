function calculatePasswordStrength(inputString) {
    let strength = 0;
    let password = inputString.trim();

    if (!password.trim()) return 'Error: No password provided';

    if (password.length >= 8) strength += 2;
    if (password.length >= 12) strength += 2;
    if (password.match(/[A-Z]/)) strength += 1;
    if (password.match(/[a-z]/)) strength += 1;
    if (password.match(/[0-9]/)) strength += 1;
    if (password.match(/[!@#$%^&*()]/)) strength += 2;

    console.log(strength);
    if (strength <= 3) {
        return 'Weak';
    } else if (strength <= 6) {
        return 'Medium';
    } else {
        return 'Strong';
    }
}

console.log(calculatePasswordStrength(""));
console.log(calculatePasswordStrength("   "));
console.log(calculatePasswordStrength("short"));
console.log(calculatePasswordStrength("abc123"));
console.log(calculatePasswordStrength("Test1234"));
console.log(calculatePasswordStrength("Test@1234"));
console.log(calculatePasswordStrength("Test@123!"));