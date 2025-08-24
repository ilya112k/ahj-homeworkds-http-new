class BaseAPI {
  static beURL = "https://ahj-homeworkds-http-new.onrender.com";

  static getAll() {
    return fetch(`${BaseAPI.beURL}?method=allTickets`).then((res) => res.json());
  }
  static delete(id) {
    return fetch(`${BaseAPI.beURL}?method=deleteById&id=${id}`);
  }
  static update({id, name, description, created, status}) {
    return fetch(`${BaseAPI.beURL}?method=updateById&id=${id}`, {
      method: "POST",
      body: JSON.stringify({
        id,
        name,
        description,
        created,
        status,
      }),
    }).then((res) => res.json());
  }

  static create(ticket) {
    return fetch(`${BaseAPI.beURL}?method=createTicket`, {
      method: "POST",
      body: JSON.stringify(ticket)
    }).then((res) => res.json());
  }
}
export { BaseAPI }
