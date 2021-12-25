exports.atob = (varChar) => {
    return Buffer.from(varChar, 'base64').toString();
}