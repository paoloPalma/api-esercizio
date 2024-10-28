const loading = document.querySelector('#photos .loading');

fetch("https://jsonplaceholder.typicode.com/photos") //fetch è una promise
  .then(response => response.json()) //ci sono due then perche il primo then mi da la risposta che però è un json che deve essere convertito in ogetto, e questa conversione mi rida un altra promise dalla quale dobbiamo riprendere la risposta
  .then(photos => {
    const todosDiv = document.querySelector('#photos');
    loading.remove();
    photos.forEach(photo => {
        const div = document.createElement('div');
        todosDiv.appendChild(div);
        const imgTag = document.createElement('img');
        imgTag.src = photo.url;
        const pTag = document.createElement('p');
        pTag.textContent = photo.title;
        div.appendChild(imgTag);
        div.appendChild(pTag);
    });
  })
  .catch(() => {
        loading.textContent = 'Errore attendere...';
  })



  