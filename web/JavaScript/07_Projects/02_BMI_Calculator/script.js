const form = document.querySelector('form')

// this usecase will give you empty 
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please give a valid height`
    } 
    else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please give a valid weight`
    } 
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)

        if (bmi < 18.6) {
            results.innerHTML = `Under Weight: ${bmi}`
        } 
        else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `Normal Range: ${bmi}`
        } 
        else {
            results.innerHTML = `Overweight: ${bmi}`
        }
    }
})