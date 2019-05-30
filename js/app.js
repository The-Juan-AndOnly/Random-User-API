// Global Variables

/* 
  12 random users are pulled from the API

  New random employee information displays each time the page refreshes

  The directory displays 12 users from the Random User API, and includes the following for each user:
    Employee Image
    First and Last Name
    Email
    City or location

  Modal window displays at least the following details:

    Employee image
    Name
    Email
    City or location
    Cell Number
    Detailed Address, including street name and number, state or country, and post code.
  There is a way to close the modal window.

  The major elements of the directory and modal window are in place and roughly match the mockups.
  Note: Modal window address can have the state's full name, rather than the two letter state code.

  ***********EXCEEDS******************
  Employees can be filtered by name with dynamically added search feature.
  Functionality has been added to switch back and forth between employees when the detail modal window is open.

  No errors in the console when the end or beginning of the list is reached.
  At least one of the following has been added or changed:
  color
  background color
  font
  box or text shadows

*/

const randomUserAPI = `https://randomuser.me/api/?results=12&inc=name,location,email,dob,phone,id,picture`;
const gallery = document.querySelector('#gallery');
const modalContainer = document.querySelector('.modal-container');

const getUsers = async url => {
  const users = await fetch(url);
  const response = await users.json();
  return response.results;
};
let cardHTML = '';
const generateCard = employees => {
  employees.map(employee => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    gallery.appendChild(cardDiv);
    cardDiv.innerHTML = `
    <div class="card-img-container">
      <img class="card-img" alt="prof picture" src="${employee.picture.large}"/>
    </div>
    <div class="card-info-container">
          <h3 id="name" class="card-name cap">${employee.name.first} ${
      employee.name.last
    } </h3>
          <p class="card-text">${employee.email} </p>
          <p class="card-text cap">${employee.location.city}, ${
      employee.location.state
    }</p>
        </div>
      </div>
    `;
  });
};
getUsers(randomUserAPI).then(generateCard);

const handleClick = e => {
  if (!e.target.className.includes('card')) {
    return;
  } else {
    modalContainer.style.display = 'block';
  }
};

document.getElementById('modal-close-btn').addEventListener('click', () => {
  modalContainer.style.display = 'none';
});
gallery.addEventListener('click', handleClick);
