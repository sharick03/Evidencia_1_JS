const axios = require('axios')
const url ='https://api.chucknorris.io/jokes/random'

axios.get(url)
.then((respuesta) => {
        let chucknorrisU = respuesta.data
        console.log(chucknorrisU.value)
       // chucknorrisU.forEach((chucknorris)=>{
           // console.log(chucknorris.categories)
          //  console.log('-----------')
        //})   
    })
    .catch(function(error){
        console.log(error)
    })

