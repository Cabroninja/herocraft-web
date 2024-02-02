<Fragment>
{/**
    #####[ HTML ]
    */}<div class="card" {...{ "data-text2": (text2), "data-newtext": (newtext) }}>

<img src={img} alt="mamawebo" />
<div>

<p class="text-top"> {text1}</p>
<p class="text-original">{text2}</p>
<p class="text-new" style="display: none;">{newtext}</p>

</div>

</div>

<script>
{() => {

document.addEventListener('DOMContentLoaded', () => {
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
card.addEventListener('mouseenter', () => {
const textOriginal = card.querySelector('.text-original');
const textNew = card.querySelector('.text-new');
if (textOriginal instanceof HTMLElement && textNew instanceof HTMLElement) {
textOriginal.style.display = 'none';
textNew.style.display = 'block';
}
});

card.addEventListener('mouseleave', () => {
const textOriginal = card.querySelector('.text-original');
const textNew = card.querySelector('.text-new');
if (textOriginal instanceof HTMLElement && textNew instanceof HTMLElement) {
textOriginal.style.display = 'block';
textNew.style.display = 'none';
}
});
});
});



}}
</script>







<style>{`


.card {
display: flex;
align-items: center;
justify-content: start;
gap: 10px; /* Ajusta el espacio entre la imagen y el texto */
margin: 0 100px; /* Ajusta los márgenes a los lados de los CardHeader */
animation: fadeIn 3s ease-out;
transition: gap 0.3s ease; /* Animación suave para el cambio de gap */
}

.card:hover {
    gap: 12px; /* Aumenta el espacio entre la imagen y el texto */
}

.card img {
width: 60px; /* Ajusta según tus necesidades */
height: auto;
transition: transform 0.3s ease; /* Animación suave para el cambio de tamaño */
}

.card:hover img {
    transform: scale(1.07); /* Aumenta el tamaño de la imagen */
}

.card:hover .text-top {
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.3); /* Resplandor blanco*/

}

.card div p {
margin: 0;
}

.card .text-top {
  color: #be54f5; /* Cambia el color según tus preferencias */
  font-family: 'Kanit', sans-serif; /* Usa la fuente personalizada */
  font-weight: 300;
  font-size: 18px; /* Cambia el tamaño de fuente según tus preferencias */
}

/* Cambiar el color y el tamaño del texto original (text2) */
.card .text-original {
  color: rgb(216, 216, 216); /* Cambia el color según tus preferencias */
  font-family: 'Kanit', sans-serif; /* Usa la fuente personalizada */
  font-weight: 400;
  font-size: 14px; /* Cambia el tamaño de fuente según tus preferencias */
  text-shadow: 0 0 5px rgba(231, 231, 231, 0.466); /* Resplandor blanco*/

}

/* Cambiar el color y el tamaño del texto original (text2) */
.card .text-new {
  color: rgb(216, 216, 216); /* Cambia el color según tus preferencias */
  font-family: 'Kanit', sans-serif; /* Usa la fuente personalizada */
  font-weight: 400;
  font-size: 14px; /* Cambia el tamaño de fuente según tus preferencias */
  text-shadow: 0 0 5px rgba(231, 231, 231, 0.466); /* Resplandor blanco*/

}








`}</style>
</Fragment>;
