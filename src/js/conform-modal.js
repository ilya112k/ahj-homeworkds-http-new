
class ConformModal {
  constructor() {
    this.element = document.querySelector('#confirm-modal');
    this.btnCancel = this.element.querySelector('.cancel');
    this.btnSubmit = this.element.querySelector('.confirm');
  }

  init(submitCallback) {
    this.btnCancel.addEventListener("click", (e) => {
      e.preventDefault();
      this.closeAction();
    });
    this.btnSubmit.addEventListener("click", async (e) => {
      e.preventDefault();
      await submitCallback();
      this.closeAction();
    });
  }

  closeAction() {
    this.element.classList.add('hide');
    this.element.classList.remove('active');
  }

  openAction() {
    this.element.classList.add('active');
    this.element.classList.remove('hide');
  }

}
export { ConformModal }
