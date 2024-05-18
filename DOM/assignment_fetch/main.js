function calculate() {
    const principal = document.getElementById("principal").value
    const rate = document.getElementById("rate").value
    const time = document.getElementById("time").value
}
fetch("https://sum-server.100xdevs.com/interest?principal=" + principal + "rate=" + rate + "time")