class Card {
  constructor(employee, index) {
    this.employee = employee;
    this.index = index;
  }

  printCard() {
    const cardDiv = document.createElement('div');
    const gallery = document.getElementById('gallery');
    cardDiv.className = 'card';
    cardDiv.setAttribute('key', this.index);
    cardDiv.innerHTML = `
    <div class="card-img-container">
      <img class="card-img" alt="prof picture" src="${
        this.employee.picture.large
      }"/>
    </div>
    <div class="card-info-container">
          <h3 id="name" class="card-name cap">${this.employee.name.first} ${
      this.employee.name.last
    } </h3>
          <p class="card-text">${this.employee.email} </p>
          <p class="card-text cap">${this.employee.location.city}, ${
      this.employee.location.state
    }</p>
        </div>
      </div>

    `;
    cardDiv.addEventListener('click', this.handleClick);
    gallery.appendChild(cardDiv);
  }

  handleClick = e => {
    if (e.target.className.includes('card')) {
      const modal = new Modal(this.employee, this.index);
      modal.createModal();
    } else {
      console.log('Sorry Sucka');
    }
  };
}
