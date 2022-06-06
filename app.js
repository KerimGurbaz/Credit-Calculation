const select = document.querySelector(".form-select");
const period = document.querySelector("#period");
const amount = document.querySelector("#amount");
const calculate = document.querySelector(".btn");
let rate = 0;
let installment = 0;

calculate.addEventListener("click", (e) => {
    e.preventDefault();
    if (select.value === "PERSONAL FINANCE CREDIT") {
        rate = 1.99
    } else if (select.value === "AUTO CREDIT") {
        rate = 1.79
    } else if (select.value === "HOUSING CREDIT") {
        rate = 1.29
    };

    if (!select.value || !period.value || !amount.value) {
        alert("Please fill in the blank fields.")
    }

    const interest = rate / 100;
    installment = (amount.value * (rate * (1 + interest) ** period.value)) / ((1 + interest) ** period.value - 1)

    console.log(installment);
    showResult();
});

const showResult = () => {
    const result = document.querySelector(".result");
    result.innerHTML = `
    <table class="table table-bordered border-warning">
    <tbody>
    <tr>
      <th >Amount of Credit</th>
      <td>${amount.value}</td>
      <th >Credit Type</th>
      <td>${select.value}</td>
    </tr>

    <tr>
    <th >Period</th>
      <td>${period.value}</td>
      <th>Credit Rate</th>
      <td>${rate}</td>
    </tr>

    <tr>
    <th > Total Amount</th>
      <td>${(installment * period.value).toFixed(2)}</td>
      <th >Installment Amount</th>
      <td>${installment.toFixed(2)}</td>
    </tr>
  </tbody>

</table>
    `
}