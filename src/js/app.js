import { TicketModal } from "./ticket-modal";
import { ConformModal } from "./conform-modal";
import { NewTicket } from "./new-ticket";
import { ListTicket } from "./list-ticket";
import { SingleTicket } from "./single-ticket";

(async () => {
  const ticketModal = new TicketModal();
  const newTicket = new NewTicket(ticketModal);
  const singleTicket = new SingleTicket();
  const listTicket = new ListTicket(singleTicket, ticketModal);
  const refreshListFunction = ListTicket.refreshList(listTicket.element, ticketModal);
  ticketModal.init(refreshListFunction);
  newTicket.init();
  await listTicket.init();
})();
