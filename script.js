document.getElementById('case-increase').addEventListener('click', function () {
    handleProductChange('case', true);
});
document.getElementById('case-decrease').addEventListener('click', function () {
    handleProductChange('case', false);
});
document.getElementById('iPhone-increase').addEventListener('click', function () {
    // handleIphoneProductChange(true);
    handleProductChange('iPhone', true);
})
document.getElementById('iPhone-decrease').addEventListener('click', function () {
    // handleIphoneProductChange(false);
    handleProductChange('iPhone', false);
})

function handleProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + '-count');
    const productCount = getInputValue(product);
    let productNewCount = 0;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;   
    }
    productInput.value = productNewCount;
    let productTotal = 0;
    if (product == 'iPhone') {
        productTotal = productNewCount * 1219;
    }
    if (product == 'case') {
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = '$' + productTotal;
    calculateTotal();
}
function calculateTotal() {
    const iPhoneCount = getInputValue('iPhone');
    const caseCount = getInputValue('case');
    const subTotalPrice = iPhoneCount *1219 + caseCount *59;
    document.getElementById('subTotal').innerText = '$ ' + subTotalPrice;

    const tax = Math.round(subTotalPrice * .1);
    document.getElementById('tax-amount').innerText = '$ ' + tax;

    const totalPrice = subTotalPrice + tax;
    document.getElementById('total-price').innerText = '$ ' + totalPrice;

}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}

// function handleProductChange(isIncrease) {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = 0;
//     if (isIncrease == true) {
//         caseNewCount = caseCount + 1;
//     }
//     if (isIncrease == false && caseCount > 0) {
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = '$' + caseTotal;
// }
// document.getElementById('case-increase').addEventListener('click', function () {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = '$' + caseTotal;
// });