'use strict';

// QUERY SELECTOR
//Variable para ul de sección data
const ulData = document.querySelector('.js-ulData');
// Evento de click para el formulario
// asociamos botón a js
const btnForm = document.querySelector('.js-btnForm');
const newForm = document.querySelector('.js-newForm');
// Botón de cancelar del formulario añadir gatito
const cancelBtnForm = document.querySelector('.js-cancelBtnForm');
const formElement = document.querySelector('.js-formElement');
// VARIABLES
// Variables de los li de cada gatito
const kittenOne = `<li class="card">
  <article>
    <img
      class="card_img"
      src="https://api-pw.dev.adalab.es/gato-siames.webp"
      alt="gatito"
    />
    <h3 class="card_title">Anastacio</h3>
    <h4 class="card_race">Siamés</h4>
    <p class="card_description">
              Porte elegante, su patrón de color tan característico y sus ojos
              de un azul intenso, pero su historia se remonta a Asía al menos
              hace 500 años, donde tuvo su origen muy posiblemente.
    </p>
  </article>
</li>`;

const kittenTwo = `<li class="card">
  <article>
    <img
    class="card_img" 
    src="https://api-pw.dev.adalab.es/sphynx-gato.webp" 
    alt="sphynx-cat"
    />
    <h3 class="card_title">Fiona</h3>
    <h4 class="card_race">Sphynx</h4>
    <p class="card_description">
              Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
              hasta con pinta de alienígena han llegado a definir a esta raza
              gatuna que se caracteriza por la «ausencia» de pelo.
    </p>
  </article>
</li>`;

const kittenThree = `<li class="card">
  <article>
    <img class="card_img"
      src="https://api-pw.dev.adalab.es/maine-coon-cat.webp" alt="maine-coon-cat" />
    <h3 class="card_title">Cielo</h3>
    <h4 class="card_race">Maine Coon</h4>
    <p class="card_description">
              Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
              bella mirada se ha convertido en una de sus señas de identidad.
              Sus ojos son grandes y las orejas resultan largas y en punta.
    </p>
  </article>
</li>`;

// FUNCIONES

// EVENTOS
btnForm.addEventListener('click', () => {
  newForm.classList.toggle('collapsed');
});

cancelBtnForm.addEventListener('click', () => {
  newForm.classList.add('collapsed');
  // Resetear valores del formulario
  formElement.reset();
});

// CÓDIGO QUE SE LANZA CUANDO SE CARGA LA PÁGINA

// Añado al ul los gatitos
ulData.innerHTML = kittenOne + kittenTwo + kittenThree;
