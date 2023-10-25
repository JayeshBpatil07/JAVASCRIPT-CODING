const form = document.querySelector('form')

form.addEventListener('submit', function(submitEvent){
    submitEvent.preventDefault()       //this line use for, it does not store our data in database

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    const weight_guide= document.querySelector("#weight-guide")

    if(height==='' || isNaN(height) || height<0){
        result.innerHTML=`plese give a valid height ${height}`
    }
    else if(weight==='' || isNaN(weight) || weight<0){
        result.innerHTML=`plese give a valid weight ${weight}`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);   //formula for bmi
        result.innerHTML = ` this is my bmi = <span>${bmi}</span>`;  //show the results
        weight_guide.innerHTML= `you BMI guide is here`
        if(bmi<19){
            weight_guide.innerHTML = 'you are underwight'
        }
        if(bmi>19 && bmi<24){
            weight_guide.innerHTML = 'you are normal'
        }
        if(bmi>24){
            weight_guide.innerHTML = 'you are overwight'
        }
    }
    

})
