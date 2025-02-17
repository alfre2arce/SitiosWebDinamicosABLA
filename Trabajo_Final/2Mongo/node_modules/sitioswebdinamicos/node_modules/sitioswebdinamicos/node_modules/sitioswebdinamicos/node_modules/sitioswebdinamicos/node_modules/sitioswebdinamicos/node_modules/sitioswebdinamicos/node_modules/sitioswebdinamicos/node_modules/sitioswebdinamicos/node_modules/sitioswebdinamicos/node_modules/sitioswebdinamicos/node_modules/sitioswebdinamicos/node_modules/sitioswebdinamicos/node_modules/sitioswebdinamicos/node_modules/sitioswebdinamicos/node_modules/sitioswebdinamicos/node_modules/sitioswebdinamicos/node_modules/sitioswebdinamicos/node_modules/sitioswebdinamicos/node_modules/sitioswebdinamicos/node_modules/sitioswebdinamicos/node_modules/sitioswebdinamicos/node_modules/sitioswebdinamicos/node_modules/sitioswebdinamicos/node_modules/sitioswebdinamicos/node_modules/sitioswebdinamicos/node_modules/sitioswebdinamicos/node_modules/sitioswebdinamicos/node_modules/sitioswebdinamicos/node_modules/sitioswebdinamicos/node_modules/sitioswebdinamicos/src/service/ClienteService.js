const ClienteRepository = require("../repository/ClienteRepository");

class ClienteService {
  static async listAll() {
    return await ClienteRepository.getAll();
  }

  static async create(data) {
    return await ClienteRepository.save(data);
  }

  static async getOne(id) {
    return await ClienteRepository.getById(id);
  }

  static async update(id, data) {
    const cliente = await ClienteRepository.getById(id);
    if (!cliente) return null;
    Object.assign(cliente, data);
    return await ClienteRepository.save(cliente);
  }

  static async delete(id) {
    return await ClienteRepository.remove(id);
  }
}

module.exports = ClienteService;
