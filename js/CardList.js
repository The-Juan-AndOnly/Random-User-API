/*
  Card List will act as a child and take the 
  Array of employee objects as a paramter
*/

class CardList {
  constructor(employees) {
    this.employees = employees;
  }

  // Function that will map through the array of employee
  // object and print out a new Card for each employee
  generateCard() {
    this.employees.map((employee, index) => {
      const card = new Card(employee, index);
      card.printCard();
    });
  }
}
