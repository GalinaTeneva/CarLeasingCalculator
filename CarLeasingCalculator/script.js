window.addEventListener("load", calculate);

function calculate() {
    const carTypeInput = document.getElementById("car-type");
    const carValueInput = document.getElementById("car-value");
    const carValueSlider = document.getElementById("car-value-slider");
    const leasePeriodInput = document.getElementById("lease-period");
    const downPaymentInput = document.getElementById("down-payment");
    const downPaymentSlider = document.getElementById("down-payment-slider");


    carValueInput.addEventListener("input", function () {
        let value = Number(carValueInput.value);
        carValueSlider.value = value;
    });

    carValueSlider.addEventListener("input", function () {
        carValueInput.value = carValueSlider.value;
    });

    downPaymentInput.addEventListener("input", function() {
        let value = Number(downPaymentInput.value);
        downPaymentSlider.value = value;
    });

    downPaymentSlider.addEventListener("input", function() {
        downPaymentInput.value = downPaymentSlider.value;
    });
}

