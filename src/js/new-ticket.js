class NewTicket {
  constructor(modal) {
    this.element = document.querySelector('.ticket-add');
    this.modal = modal;
  }

  init() {
    this.element.addEventListener('click', (e) => {
      e.preventDefault();
      this.modal.openAction();
    });
  }
}
export { NewTicket };
