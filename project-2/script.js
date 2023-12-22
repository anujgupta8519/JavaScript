const form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    if (height==='' || height<=0 || isNaN(height)) {
        result.innerHTML = `${height} height is not valid`
    }
    else if (weight === '' || weight<=0 || isNaN(weight)) {
        result.innerHTML = `${weight} weight is not valid`
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        let text;
        if (bmi<18.6) {
            text = "Your BMI is less"
        } else  if(bmi>= 18.6 && bmi <=24.9){
           text = "your BMI is Good" 
        }else{
            text = "Your BMI is higher"
        }
        result.innerHTML = `<h3>${bmi}</h3> <h3> ${text} </h3>`;

    }
})