let currentProductsArray = [];

document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(ingredients_info).then(function(response){

        if(response.status === 'ok'){
            
            currentProductsArray = response.data;
            
            showIngredients ();

        }
    });
       
  });

  function showIngredients (){
    let htmlContentToAppend = "";
    let contenedor = document.getElementById("ingredientes");
    let description = "";

    for(let i = 0; i < currentProductsArray.length; i++){

        var ingredientsInfo = currentProductsArray[i];
        description = "";
        
        for(let j =0; j<5; j++){
            description += `<p>${ingredientsInfo.description[j]}</p><br>`
        }

        htmlContentToAppend += `
        <div class="carousel-item">
            <div class="bg-success" style="height: 100vh;">
                <h1>${ingredientsInfo.name}</h1>
                ${description}
            </div>
        </div>
        `
    }
    console.log(htmlContentToAppend);
    
    contenedor.innerHTML += htmlContentToAppend;
  }