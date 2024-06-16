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

    //The interest rates in percentage
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
        let principalAmount = carValue - downPaymentAmount;
        let annualInterestRate = carTypeInput.value === 'brand-new' ? INTEREST_RATE_NEW : INTEREST_RATE_USED;
        let monthlyInterestRate = annualInterestRate / 12 / 100;
        
        let monthlyInstallment = (principalAmount * (monthlyInterestRate) * Math.pow((1 + monthlyInterestRate), leasePeriod)) / (Math.pow((1 + monthlyInterestRate), leasePeriod) - 1);
        let totalCost = (monthlyInstallment * leasePeriod) + downPaymentAmount;

        totalCostOutput.textContent = totalCost.toFixed(2);
        downPaymentAmountOutput.textContent = downPaymentAmount.toFixed(2);
        monthlyInstallmentOutput.textContent = monthlyInstallment.toFixed(2);
        interestRateOutput.textContent = annualInterestRate.toFixed(2) + "%";
    }
}

