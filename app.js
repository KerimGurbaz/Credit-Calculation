const select = document.querySelector(".form-select");
const period = document.querySelector("#period");
const amount = document.querySelector("#amount");
const calculate = document.querySelector(".btn");
let rate = 0;
let installment = 0;
calculate.addEventListener("click", (e) => {
    e.preventDefault();
    if (select.value === "personalCredit") {
        rate = 1.99
    } else if (select.value === "autoCredit") {
        rate = 1.79
    } else if (select.value === "housingCredit") {
        rate = 1.29
    }

    if (!select.value || !period.value || !amount.value) {
        alert("Please fill in the blank fields.")
    }

    const interest = rate / 100;
    installment = (amount.value * (rate * (1 + interest) ** period.value)) / ((1 + interest) ** period.value - 1)

    console.log(installment);
});