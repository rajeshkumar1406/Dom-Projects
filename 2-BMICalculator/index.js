const form = document.querySelector('form')
//this will give you empty value
//const height =parseInt(document.querySelector('#height').value)


form.addEventListener('submit', function(e){
    e.preventDefault()


    
    const height =parseInt(document.querySelector('#height').value)
    const weight =parseInt(document.querySelector('#weight').value)


    const results =document.querySelector('#results')

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML= `please give a valid height ${height}`;
    } else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML= `please give a valid weight ${weight}`;
    } else{
       const bmi= (weight/((height*height)/10000)).toFixed(2);
       // show result
       if(bmi<18.6){
        results.innerHTML= `<span>you are under weight with ${bmi} bmi index</span> `;
       } else if (bmi>=18.6 && bmi <=24.6){
        results.innerHTML= `<span>you are in normal range with ${bmi} bmi index</span> `;
       } else {
        results.innerHTML= `<span>you are over weight with ${bmi} bmi index</span> `;
       }
       
    }

})