class Modal {
  constructor(employee, index) {
    this.employee = employee;
    this.index = index;
  }

  createModal() {
    const employee = this.employee;
    const index = this.index;
    console.log(index);
    const regex = /\d+(\d{2})-(\d{2})-(\d{2}).+/;
    const dob = employee.dob.date.replace(regex, '$2 / $3 / $1');

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
          src="${employee.picture.large}"
          alt="profile picture"
        />
        <h3 id="name" class="modal-name cap">${employee.name.first} ${
      employee.name.last
    } </h3>
        <p class="modal-text">${employee.email}</p>
        <p class="modal-text cap">${employee.location.city}</p>
        <hr />
        <p class="modal-text">${employee.phone}</p>
        <p class="modal-text">${employee.location.street} ${
      employee.location.city
    }, ${employee.location.state} ${employee.location.postcode}</p>
        <p class="modal-text">Birthday: ${dob}</p>
      </div>
      
    `;
    modalDiv.style.display = 'block';
    modalDiv.addEventListener('click', this.handleClick);
    gallery.appendChild(modalDiv);
  }
  handleClick = e => {
    if (
      e.target.className === 'modal-close-btn' ||
      e.target.textContent === 'X'
    ) {
      document.querySelector('.modal-container').style.display = 'none';
      document.querySelector('.modal-container').remove();
    }
  };
}
