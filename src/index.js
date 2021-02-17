module.exports = function reverse(n) {
        number = String(Math.abs(n)).split("").reverse();
        output = "";
        for (letter of number) {
            output += letter;
        }
        return Number(output);
}
