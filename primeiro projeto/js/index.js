let teste = window.document.querySelector('#teste');
let imagem = document.querySelector('.item-image');
let img = document.querySelectorAll("img");

teste.addEventListener("click",function() {
    
    teste.innerHTML = 'você clicou!';

});

imagem.addEventListener("mouseenter", function(){
    imagem.setAttribute('style', 'display: none');
})

img[0].addEventListener("click", function(i){//quando clica na logo, some todas as imagens
    for(i=0; i>=0; i++)
    {
        img[i].setAttribute('style', 'display: none');
        imagem.innerHTML = 'você apagou tudo';
        imagem.setAttribute('style','font-size: 40px');
        imagem.setAttribute('style', 'color: white')
    }
})