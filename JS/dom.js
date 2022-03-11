const animalList = document.querySelector(".animal_list");

const displayAnimal = ( animals =>{
    animals.forEach(animal => {
    
    const animalItem = document.createElement('li');
    animalItem.className = 'animal_item';

    const animalImage = document.createElement('img');
    animalImage.className = 'animal_image';
    animalImage.src = animal.image_link;

    const animalInfo = document.createElement('div');
    animalInfo.className = 'animal_info';
    
    const animal_name = document.createElement('h2');
    animal_name.className = 'animal_name';
    animal_name.textContent = animal.name;

    animalList.appendChild(animalItem);
    animalItem.appendChild(animalImage);
    animalItem.appendChild(animalInfo);
    animalInfo.appendChild(animal_name);

});
})
