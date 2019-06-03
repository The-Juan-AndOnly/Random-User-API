class SearchBar {
  constructor(employees) {
    this.employees = employees;
  }
  createSearchBar() {
    const searchContainer = document.querySelector('.search-container');
    searchContainer.innerHTML = `
    <form action="#" method="get">
      <input
        type="search"
        id="search-input"
        class="search-input"
        placeholder="Search..."
      />
      <input
        type="submit"
        value="&#x1F50D;"
        id="serach-submit"
        class="search-submit"
      />
    </form>
    `;
    document
      .getElementById('search-input')
      .addEventListener('keyup', this.handleInput);
    document
      .querySelector('.search-container form')
      .addEventListener('submit', this.handleSubmit);
  }

  handleInput(e) {
    // console.log(this.employees.filter(employee => employee === e.target.value));
    console.log(this.employees);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Working as expected');
  }
}
