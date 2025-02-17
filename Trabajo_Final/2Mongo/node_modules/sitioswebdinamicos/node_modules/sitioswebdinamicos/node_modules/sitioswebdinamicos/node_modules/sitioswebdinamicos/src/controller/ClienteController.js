const ClienteService = require("../service/ClienteService");

class ClienteController {
  static async list(req, res) {
    const clientes = await ClienteService.listAll();
    res.render("lista", { clientes });
  }

  static async createForm(req, res) {
    res.render("create");
  }

  static async create(req, res) {
    await ClienteService.create(req.body);
    res.redirect("/");
  }

  static async editForm(req, res) {
    const cliente = await ClienteService.getOne(req.params.id);
    res.render("edit", { cliente});
  }

  static async update(req, res) {
    await ClienteService.update(req.params.id, req.body);
    res.redirect("/");
  }

  static async delete(req, res) {
    await ClienteService.delete(req.params.id);
    res.redirect("/");
  }
}

module.exports = ClienteController;
