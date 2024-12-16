var form=document.querySelector('form')
console.log(submit);
var url=
form.addEventListener('submit',function(e){
 e.preventDefault() 
console.log("hiee");

 var ans=document.querySelector('#name').value.trim().toLowerCase();
 console.log(ans);
 if(ans==''){
    alert("input a valid id")
    return;
 }
 document.querySelector('#name').value='';
    fetch(`https://pokeapi.co/api/v2/pokemon/${ans}`)
    .then(function(response){
        if(!response.ok)
        {
            console.log("invalid");
            
        }
        return response.json()
    })
    .then(function(data)
    {
        const name=data.forms[0].name
      const image=data.sprites.front_default
      document.querySelector('#pokemonPhto').innerHTML=`
        <img src="${image}" alt="">
      `;
      document.querySelector('#pokemonName').innerHTML=`
      <h1>${name.toUpperCase()}</h1>
    `;
      
    })
    .catch(e)
    {
        console.log(e);
        
    }
})