import { Modal } from "./modal";
import { NewTicket } from "./new-ticket";
import { ListTicket } from "./list-ticket";
import { SingleTicket } from "./single-ticket";

(async () => {
  const modal = new Modal();
  const newTicket = new NewTicket(modal);
  const singleTicket = new SingleTicket();
  const listTicket = new ListTicket(singleTicket, modal);
  const refreshListFunction = ListTicket.refreshList(listTicket.element, modal);
  modal.init(refreshListFunction);
  newTicket.init();
  await listTicket.init();
})();
