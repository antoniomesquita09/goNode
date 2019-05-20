"use strict";

const User = use("App/Models/User");

class UserController {
  async store({ request }) {
    const data = request.only(["email", "password", "username"]);

    const user = await User.create(data);

    return user;
  }

  async destroy({ params }) {
    const user = await User.findOrFail(params.id);

    await user.delete();
  }
}

module.exports = UserController;
