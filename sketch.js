var pesos = [35,38,40,45]

function media_pesos(){
  var soma = pesos[0] + pesos[1] + pesos[2] + pesos[3]
  var media= soma/pesos.length
  console.log (media)
}


function setup() 
{
  createCanvas(400,400);
  media_pesos ()
}

function draw() 
{
background(51);

}

