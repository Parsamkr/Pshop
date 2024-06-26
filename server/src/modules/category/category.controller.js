const autoBind = require("auto-bind");
const categoryService = require("./category.service");
const { categoryMessage } = require("./category.messages");
const httpCodes = require("http-codes");

class categoryController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = categoryService;
  }
  async create(req, res, next) {
    try {
      const { name, icon, slug, parent, Image } = req.body;
      await this.#service.create({ name, icon, slug, parent, Image });
      return res
        .status(httpCodes.CREATED)
        .json({ meesage: categoryMessage.created });
    } catch (error) {
      next(error);
    }
  }

  async find(req, res, next) {
    try {
      const categories = await this.#service.find();
      return res.json(categories);
    } catch (error) {
      next(error);
    }
  }

  async remove(req, res, next) {
    try {
      const { id } = req.params;
      await this.#service.remove(id);
      return res.json({ message: categoryMessage.deleted });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new categoryController();
