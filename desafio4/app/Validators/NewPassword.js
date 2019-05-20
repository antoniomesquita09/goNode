"use strict";

class NewPassword {
  get validateAll() {
    return true;
  }
  get rules() {
    return {
      email: "required|email",
      password: "required",
      new_password: "required|confirmed"
    };
  }
}

module.exports = NewPassword;
