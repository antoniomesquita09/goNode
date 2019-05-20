"use strict";

const Route = use("Route");

Route.post("users", "UserController.store");
Route.delete("users/:id", "UserController.destroy");

Route.post("newpass", "NewPasswordController.store").validator("NewPassword");

Route.post("session", "SessionController.store");

Route.post("events", "EventController.store").middleware(["auth"]);
Route.get("events/:id", "EventController.show").middleware(["auth"]);
