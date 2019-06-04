/* 
  Treehouse FSJS Project 5
  Random User API
*/

// Random User API set to return 12 results from the US
const randomUserAPI = `https://randomuser.me/api/?results=12&nat=us&inc=name,location,email,dob,phone,id,picture`;
employeesState = [];

// Get Employees functin which will make a fetch call to
// randomUserApI also catch any errors and display a default
// error message on screen
const getEmployees = url => {
  fetch(randomUserAPI)
    .then(resp => resp.json())
    .then(data => {
      employeesState = [...data.results]; // Array of employee objects
      const newState = new CardList(employeesState); // call CardList
      // pass it the employeesState
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
