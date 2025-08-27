import { BaseAPI } from "./api/api";
import {Img} from "./img";
import {ConformModal} from "./conform-modal";

class SingleTicket {
  constructor() {}

  static build(id, status, name, description, createAt, ticketModal, confirmModal) {
    const element = document.createElement("div");
    element.classList.add("single-ticket");


    const statusElement = document.createElement("input");
    statusElement.type = "checkbox";
    statusElement.classList.add('single-ticket_status');
    statusElement.checked = status;
    statusElement.addEventListener("change", async (e) => {
      e.preventDefault();
      await BaseAPI.update({
        id,
        name,
        description,
        created: createAt,
        status: !status,
      });
    });

    const nameElement = document.createElement("div");
    nameElement.classList.add("single-ticket_name");
    nameElement.textContent = name;
    nameElement.addEventListener('click', (e) => {
      e.preventDefault();
      element.classList.toggle('active');
    });
    const dateElement = document.createElement("div");
    dateElement.classList.add("single-ticket_date");
    dateElement.textContent = new Date(createAt).toLocaleDateString("en-EN", {
      month: "2-digit",
      year: "2-digit",
      day: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    dateElement.addEventListener('click', (e) => {
      e.preventDefault();
      element.classList.toggle('active');
    });

    const descriptionElement = document.createElement('div');
    descriptionElement.classList.add('single-ticket_description');
    descriptionElement.textContent = description;

    const wrapper = document.createElement("div");
    wrapper.classList.add('single-ticket_wrapper');

    const confModal = new ConformModal();
    const deleteElement = document.createElement("button");
    deleteElement.classList.add("delete");
    deleteElement.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`;
    deleteElement.addEventListener("click", async (e) => {
      e.preventDefault();
      confModal.init(async () => {
        await BaseAPI.delete(id);
        element.remove();
      });
      confModal.openAction();
    });

    const editElement = document.createElement("button");
    editElement.classList.add("edit");
    editElement.innerHTML = `<i class="fa-sharp fa-solid fa-pencil"></i>`;
    editElement.addEventListener("click", async (e) => {
      e.preventDefault();
      ticketModal.openAction();
      ticketModal.updateForm({id, name, description, status, created: createAt});
    });

    wrapper.append(
      editElement,
      deleteElement,
    )
    element.append(
      statusElement,
      nameElement,
      dateElement,
      wrapper,
      descriptionElement
    );
    element.dataset.id = id;
    element.dataset.name = name;
    element.dataset.description = description;
    element.dataset.created = createAt;
    element.dataset.status = status;
    return element;
  }
}
export { SingleTicket };
