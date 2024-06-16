window.addEventListener("load", calculate);

function calculate() {
    const carTypeInput = document.getElementById("car-type");
    const carValueInput = document.getElementById("car-value");
    const carValueSlider = document.getElementById("car-value-slider");
    const leasePeriodInput = document.getElementById("lease-period");
    const downPaymentInput = document.getElementById("down-payment-percent");
    const downPaymentSlider = document.getElementById("down-payment-slider");

    const totalCostOutput = document.getElementById("total-cost");
    const downPaymentAmountOutput = document.getElementById("down-payment-amount");
    const monthlyInstallmentOutput = document.getElementById("monthly-installment");
    const interestRateOutput = document.getElementById("interest-rate");

    const INTEREST_RATE_NEW = 2.99;
    const INTEREST_RATE_USED = 3.70;

    //Initial calculation
    calculateLeasing();

    carValueInput.addEventListener("input", function () {
        let value = Number(carValueInput.value);
        carValueSlider.value = value;
        calculateLeasing();
    });

    carValueSlider.addEventListener("input", function () {
        carValueInput.value = carValueSlider.value;
        calculateLeasing();
    });

    downPaymentInput.addEventListener("input", function() {
        let value = Number(downPaymentInput.value);
        downPaymentSlider.value = value;
        calculateLeasing();
    });

    downPaymentSlider.addEventListener("input", function() {
        downPaymentInput.value = downPaymentSlider.value;
        calculateLeasing();
    });

    carTypeInput.addEventListener("change", calculateLeasing);
    leasePeriodInput.addEventListener("change", calculateLeasing);

    function calculateLeasing() {
        let carValue = Number(carValueInput.value);
        let leasePeriod = Number(leasePeriodInput.value);
        let downPaymentPercent = Number(downPaymentInput.value) / 100;

        let downPaymentAmount = carValue * downPaymentPercent;
        let financedAmount = carValue - downPaymentAmount;
        let interestRate = carTypeInput.value === 'brand-new' ? INTEREST_RATE_NEW : INTEREST_RATE_USED;
        //Fix the formula for the total cost!!!
        let totalCost = financedAmount * (1 + (interestRate / 100) * (leasePeriod / 12));
        let monthlyInstallment = totalCost / leasePeriod;

        totalCostOutput.textContent = totalCost.toFixed(2);
        downPaymentAmountOutput.textContent = downPaymentAmount.toFixed(2);
        monthlyInstallmentOutput.textContent = monthlyInstallment.toFixed(2);
        interestRateOutput.textContent = interestRate.toFixed(2) + "%";
    }
}

