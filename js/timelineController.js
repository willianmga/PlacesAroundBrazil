app.controller("timelineController", function ($scope, $state, PlacesAroundFactory) {

  $scope.lugares = [
    {
      titulo: "São Paulo",
      descricao: "Cidade Caótica",
      imagem: "img/sao-paulo.jpg",
      detalhe: ""
    },
    {
      titulo: "Rio de Janeiro",
      descricao: "Cidade Maravilhosa",
      imagem: "img/cristo-redentor.jpg",
      detalhe: ""
    },                 
    {
      titulo: "Maringá",
      descricao: "Cidade Abençoada!!",
      imagem: "img/maringa.jpg",
      detalhe: ""
    },
    {
      titulo: "Curitiba",
      descricao: "Cidade Fria",
      imagem: "img/curitiba.jpg",
      detalhe: ""
    },
    {
      titulo: "Salvador",
      descricao: "Cidade Histórica",
      imagem: "img/salvador.jpg",
      detalhe: ""
    },
    {
     titulo: "Recife",
     descricao: "Cidade do Frevo",
     imagem: "img/recife.jpg",
     detalhe: ""
    },
    {
     titulo: "Porto Alegre",
     descricao: "Cidade Gaucha, thcê!",
     imagem: "img/porto-alegre.jpg",
     detalhe: ""
    },  
    {
      titulo: "Balneário Camboriú",
      descricao: "Cidade para Milionários",
      imagem: "img/balneário-camboriu.jpg",
      detalhe: ""
    },
   {
     titulo: "Florianópolis",
     descricao: "Cidade Maravilhosa e Cara!",
     imagem: "img/florianopolis.jpg",
     detalhe: "O Pão de Açucar é muito gostoso!!"
   }
  ];

  $scope.exibirOcultar = function (lugar) {
    lugar.exibir = !lugar.exibir;
  }
})