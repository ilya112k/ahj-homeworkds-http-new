import {BaseAPI} from "./api/api";

class TicketModal {
  constructor() {
    this.element = document.querySelector('#ticket-modal');
    this.form = {};
    this.form.id = this.element.querySelector('.ticket-id');
    this.form.name = this.element.querySelector('.ticket-name');
    this.form.description = this.element.querySelector('.ticket-description');
    this.form.created = this.element.querySelector('.ticket-created');
    this.form.status = this.element.querySelector('.ticket-status');
    this.form.btnCancel = this.element.querySelector('.ticket-cancel');
    this.form.btnSubmit = this.element.querySelector('.ticket-submit');
    this.form.btnClose = this.element.querySelector('.ticket-close');
  }

  init(submitCallback) {
    this.form.btnClose.addEventListener("click", (e) => {
      e.preventDefault();
      this.closeAction();
    });
    this.form.btnCancel.addEventListener("click", (e) => {
      e.preventDefault();
      this.closeAction();
    });
    this.form.btnSubmit.addEventListener("click", async (e) => {
      e.preventDefault();
      await this.submitAction();
      await submitCallback();
    });
  }

  async submitAction() {
    const result = {
      id: this.form.id.value,
      name: this.form.name.value,
      description: this.form.description.value,
      status: typeof this.form.status.value === 'boolean' ? this.form.status.value : this.form.status.value === "true",
      created: +this.form.created.value,
    };
    if (!result.id) {
      await BaseAPI.create(result);
      this.closeAction();
    } else {
      await BaseAPI.update(result);
    }
    this.resetForm();
    this.closeAction();
    return result;
  }

  closeAction() {
    this.element.classList.add('hide');
    this.element.classList.remove('active');
    this.resetForm();
  }

  openAction() {
    this.element.classList.add('active');
    this.element.classList.remove('hide');
  }

  updateForm({ id, name, description, status, created }) {
    this.form.id.value = id;
    this.form.name.value = name;
    this.form.status.value = status;
    this.form.created.value = created;
    this.form.description.value = description;
  }

  resetForm() {
    this.form.id.value = '';
    this.form.name.value = '';
    this.form.description.value = '';
    this.form.status.value = false;
    this.form.created.value = Date.now()
  }
}
export { TicketModal }
