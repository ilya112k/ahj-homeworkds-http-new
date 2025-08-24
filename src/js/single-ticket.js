import { BaseAPI } from "./api/api";

class SingleTicket {
  constructor() {}

  static build(id, status, name, description, createAt, modal) {
    const element = document.createElement("div");
    element.classList.add("single-ticket");

    const statusElement = document.createElement("input");
    statusElement.type = "checkbox";
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

    const dateElement = document.createElement("div");
    dateElement.classList.add("single-ticket_date");
    dateElement.value = new Date(createAt).toLocaleDateString("en-EN", {
      month: "2-digit",
      year: "2-digit",
      day: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const deleteElement = document.createElement("button");
    deleteElement.classList.add("delete");
    deleteElement.textContent = "Удалить";
    deleteElement.addEventListener("click", async (e) => {
      e.preventDefault();
      await BaseAPI.delete(id);
      element.remove();
    });

    const editElement = document.createElement("button");
    editElement.classList.add("edit");
    editElement.textContent = "Редактировать";
    editElement.addEventListener("click", async (e) => {
      e.preventDefault();
      modal.openAction();
      modal.updateForm({id, name, description, status, created: createAt});
    });

    element.append(
      statusElement,
      nameElement,
      dateElement,
      editElement,
      deleteElement,
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
