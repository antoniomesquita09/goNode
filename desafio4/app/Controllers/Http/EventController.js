"use strict";

const Evento = use("App/Models/Event");

class EventController {
  async store({ request }) {
    const data = request.only([
      "user_id",
      "title",
      "street",
      "number",
      "distric",
      "city",
      "state",
      "date"
    ]);

    const evento = await Evento.create(data);

    return evento;
  }

  async show({ params }) {
    const events = await Evento.query()
      .where("user_id", params.id)
      .orderBy("date")
      .fetch();

    return events;
  }
}

module.exports = EventController;
