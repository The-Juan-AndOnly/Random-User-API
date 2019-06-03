class CardList {
  constructor(employees) {
    this.employees = employees;
  }

  generateCard() {
    this.employees.map((employee, index) => {
      const card = new Card(employee, index);
      card.printCard();
    });
  }
}
