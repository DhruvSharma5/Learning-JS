# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode)

#Solution code

## Project 1 Solution

``` javascript
console.log("dhruv")

const buttons = document.querySelectorAll(".button")

const body = document.querySelector("body")

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)

        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id
        }
    })
});

```

## Project 2 solution

``` javascript

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
```