"use strict";

const User = use("App/Models/User");

class NewPasswordController {
  async store({ request, response, auth }) {
    const { email, password, new_password } = request.all();

    const user = await User.findByOrFail("email", email);

    const validation = await auth.attempt(email, password);

    validation
      ? (user.password = new_password)
      : response.status(401).send({ error: { message: "Algum erro" } });

    user.save();

    return;
  }
}

module.exports = NewPasswordController;
