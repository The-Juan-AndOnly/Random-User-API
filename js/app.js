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

const randomUserAPI = `https://randomuser.me/api/?results=12&nat=us&inc=name,location,email,dob,phone,id,picture`;
const gallery = document.querySelector('#gallery');

async function getUsers(url) {
  const users = await fetch(url);
  return await users.json();
}

function generateCard(employees) {
  employees.map((employee, index) => {
    cardDiv.className = 'card';
    cardDiv.setAttribute('key', index);
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
}

function createModal(employee) {
  const modalDiv = document.createElement('div');
  modalDiv.className = 'modal-container';
  modalDiv.innerHTML = `
  <div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn">
      <strong>X</strong>
    </button>
    <div class="modal-info-container">
      <img
        class="modal-img"
        src=""
        alt="profile picture"
      />
      <h3 id="name" class="modal-name cap">${employee.name.first}</h3>
      <p class="modal-text">email</p>
      <p class="modal-text cap">city</p>
      <hr />
      <p class="modal-text">(555) 555-5555</p>
      <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
      <p class="modal-text">Birthday: 10/21/2015</p>
    </div>
  `;
  gallery.appendChild(modalDiv);
}

getUsers(randomUserAPI).then(data => {
  generateCard(data.results);

  // const cardDiv = document.querySelector('.card');
  const modalContainer = document.querySelector('.modal-container');
  gallery.addEventListener('click', handleClick);
});

const handleClick = e => {
  const modalContainer = document.querySelector('.modal-container');

  if (e.target.className.includes('card')) {
    modalContainer.style.display = 'block';
  }

  if (e.target.id === 'modal-close-btn' || e.target.textContent === 'X') {
    modalContainer.style.display = 'none';
  }
};
