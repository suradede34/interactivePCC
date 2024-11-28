const pageViewRange = document.getElementById('pageViewRange');
const pageViews = document.getElementById('pageViews');
const toggleButton = document.getElementById('toggleButton');
const container = document.querySelector('.header');
const myButton = document.querySelector('.my-button'); 

const monthlyBasePrice = 16.00;
const yearlyDiscountFactor = 0.8; 

function updatePrice() {
    const percentage = pageViewRange.value;
    const monthlyPrice = (percentage / 100) * monthlyBasePrice;
    
    if (toggleButton.classList.contains('yearly')) {
        const yearlyPrice = monthlyPrice * 12 * yearlyDiscountFactor;
        pageViews.innerText = `$${yearlyPrice.toFixed(2)}/year`;
    } else {
        pageViews.innerText = `$${monthlyPrice.toFixed(2)}/month`;
    }
}

function toggleBilling() {
    const priceText = pageViews.innerText; 
    const currentPrice = parseFloat(priceText.replace('$', '').split(' ')[0]);
    
    if (toggleButton.classList.contains('yearly')) {
        const monthlyPrice = currentPrice / 12 / yearlyDiscountFactor;
        pageViews.innerText = `$${monthlyPrice.toFixed(2)}/month`;
        toggleButton.classList.remove('yearly');
    } else {
        const yearlyPrice = currentPrice * 12 * yearlyDiscountFactor;
        pageViews.innerText = `$${yearlyPrice.toFixed(2)}/year`;
        toggleButton.classList.add('yearly');
    }
}

pageViewRange.addEventListener('input', updatePrice);
toggleButton.addEventListener('click', toggleBilling);

updatePrice();
