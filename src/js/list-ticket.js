import { BaseAPI } from "./api/api";
import { SingleTicket } from "./single-ticket";

class ListTicket {
  constructor(singleTicket, modal) {
    this.element = document.querySelector(".ticket-list");
    this.singleTicket = singleTicket;
    this.modal = modal;
  }

  async init() {
    this.element.innerHTML = "";
    const list = await BaseAPI.getAll();
    list.forEach((ticket) => {
      const ticketElement = SingleTicket.build(
        ticket.id,
        ticket.status,
        ticket.name,
        ticket.description,
        ticket.created,
        this.modal,
      );
      this.element.append(ticketElement);
    });
  }

  static refreshList(element, modal) {
    return async () => {
      element.innerHTML = "";
      const list = await BaseAPI.getAll();
      list.forEach((ticket) => {
        const ticketElement = SingleTicket.build(
          ticket.id,
          ticket.status,
          ticket.name,
          ticket.description,
          ticket.created,
          modal,
        );
        element.append(ticketElement);
      });
    };
  }
}
export { ListTicket };
