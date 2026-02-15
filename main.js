function rollDice() {
    let d1 = Math.floor(Math.random() * 6) + 1;
    let d2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("die1").value = d1;
    document.getElementById("die2").value = d2;

    document.getElementById("rollBtn").focus();
}