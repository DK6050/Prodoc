const crypto = require('crypto');

// Generate a random token key
const tokenKey = crypto.randomBytes(32).toString('hex');

// Log the generated token key
console.log('Generated Token Key:', tokenKey);
