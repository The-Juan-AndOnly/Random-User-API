const card = new Card();
const cardList = new CardList();
const modal = new Modal();

const randomUserAPI = `https://randomuser.me/api/?results=12&nat=us&inc=name,location,email,dob,phone,id,picture`;
employeesState = [];

const getEmployees = url => {
  fetch(randomUserAPI)
    .then(resp => resp.json())
    .then(data => {
      employeesState = [...data.results];

      const newState = new CardList(employeesState);
      newState.generateCard();
    })
    .catch(err => {
      document.querySelector(
        '#gallery'
      ).innerHTML = `<h3>Sorry Something went wrong!!!</h3>`;
      console.log(`Error: ${err}`);
    });
};

getEmployees(randomUserAPI);
