const url = 'https://zoo-animal-api.herokuapp.com/animals/rand/9';

const fetch = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        cb(JSON.parse(xhr.responseText));
      }
    } else if (xhr.status === 400) {
      animalList.innerHTML = '<h2>No results found</h2>';
    }
  };
  xhr.open('Get', url);
  xhr.send();
};

fetch(url, displayAnimal);
