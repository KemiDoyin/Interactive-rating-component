const submitBtn = document.querySelector('.btn')
const ratingNumber = document.querySelectorAll('.no')
const submittedPage = document.querySelector('.submitted')
const currentPage = document.querySelector('.rating-container')
const rating = document.querySelector('.value')

let spanValue;

ratingNumber.forEach(rate => {
    rate.addEventListener('click', (e) => {
        ratingNumber.forEach(rate => {
            rate.classList.remove('active')
        })
        e.target.classList.add('active')
        spanValue = e.target.textContent;
    })
})

submitBtn.addEventListener('click', () => {
    submittedPage.style.display = 'block';
    currentPage.style.display = 'none';
    rating.textContent = `You selected ${spanValue} out of 5`;
})