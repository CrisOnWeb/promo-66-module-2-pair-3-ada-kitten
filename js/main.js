'use strict';

/* PENDIENTES: 
 - Añadir evento a raza buscador
 - function paintHtmlKittens() {}

*/

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
// Búsqueda por descripción
const buttonSearch = document.querySelector('.js-buttonSearch');
const inSearchDesc = document.querySelector('.js-inSearchDesc');
// VARIABLES
// Variables de los li de cada gatito

const kittenData1 = {
  image: 'https://api-pw.dev.adalab.es/gato-siames.webp',
  name: 'Anastacio'.toUpperCase(),
  desc: `Porte elegante, su patrón de color tan característico y sus ojos
        de un azul intenso, pero su historia se remonta a Asía al menos
        hace 500 años, donde tuvo su origen muy posiblemente.`,
  race: 'Siamés',
};

const kittenData2 = {
  image: 'https://api-pw.dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona'.toUpperCase(),
  desc: `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
        hasta con pinta de alienígena han llegado a definir a esta raza
        gatuna que se caracteriza por la «ausencia» de pelo.`,
  race: 'sphynx-cat',
};

const kittenData3 = {
  image: 'https://api-pw.dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo'.toUpperCase(),
  desc: `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
        bella mirada se ha convertido en una de sus señas de identidad.
        Sus ojos son grandes y las orejas resultan largas y en punta.`,
  race: 'Maine Coon',
};

// FUNCIONES

function renderKitten(kitten) {
  const html = `<li class="card">
  <article>
    <img
      class="card_img"
      src="${kitten.image}"
      alt="${kitten.race}"
    />
    <h3 class="card_title">${kitten.name}</h3>
    <h4 class="card_race">${kitten.race}</h4>
    <p class="card_description"> ${kitten.desc}</p>
  </article>
</li>`;
  return html;
}

function handleClickBtnForm() {
  newForm.classList.toggle('collapsed');
}

// POSIBLE MEJORA FUTURA: si ponemos algo que no coincide, muestra los tres; en vez de no mostrar ninguno
function filterKitten(ev) {
  ev.preventDefault();
  const descrSearchText = inSearchDesc.value;

  if (kittenData1.desc.includes(descrSearchText)) {
    ulData.innerHTML = renderKitten(kittenData1);
  }

  if (kittenData2.desc.includes(descrSearchText)) {
    ulData.innerHTML = renderKitten(kittenData2);
  }

  if (kittenData3.desc.includes(descrSearchText)) {
    ulData.innerHTML = renderKitten(kittenData3);
  }
  // Si dejan descripción vacía -> que imprima todos los gatos
  if (descrSearchText === '') {
    ulData.innerHTML = renderKitten(kittenData1);
    ulData.innerHTML += renderKitten(kittenData2);
    ulData.innerHTML += renderKitten(kittenData3);
  }
}

function cancelNewKitten(ev) {
  newForm.classList.add('collapsed');
  // Resetear valores del formulario
  formElement.reset();
}

// EVENTOS
btnForm.addEventListener('click', handleClickBtnForm);

cancelBtnForm.addEventListener('click', cancelNewKitten);

buttonSearch.addEventListener('click', filterKitten);

// CÓDIGO QUE SE LANZA CUANDO SE CARGA LA PÁGINA

ulData.innerHTML = renderKitten(kittenData1);
ulData.innerHTML += renderKitten(kittenData2);
ulData.innerHTML += renderKitten(kittenData3);
