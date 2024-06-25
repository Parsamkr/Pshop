const autoBind = require("auto-bind");
const postService = require("./post.service");
const { postMessage } = require("./post.messages");
const httpCodes = require("http-codes");
const createHttpError = require("http-errors");
const { Types } = require("mongoose");
const { getAddress } = require("../../common/utils/api");
const {
  removePropertyInObject,
  decodeInObject,
} = require("../../common/utils/functions");
const { query } = require("express");
require("dotenv").config();

class postController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = postService;
  }

  async create(req, res, next) {
    try {
      const userId = req.user._id;
      const images = req?.files?.map((image) => image?.path?.slice(7));
      const {
        title_post: title,
        description: content,
        category,
        lat,
        lng,
        amount,
      } = req.body;

      // delete values from body to make an object of options that should be saved
      const options = removePropertyInObject(req.body, [
        "title_post",
        "description",
        "category",
        "lat",
        "lng",
        "images",
        "amount",
      ]);

      // decode options
      decodeInObject(options);

      // get detail of the address from map.ir
      const { address, province, city, district } = await getAddress(lat, lng);

      await this.#service.create({
        title,
        content,
        coordinate: [lat, lng],
        category: new Types.ObjectId(category),
        images,
        options,
        address,
        province,
        city,
        district,
        userId,
        amount,
      });

      return res
        .status(httpCodes.CREATED)
        .json({ meesage: postMessage.created });
    } catch (error) {
      next(error);
    }
  }

  async findMyPosts(req, res, next) {
    try {
      const userId = req.user._id;
      const posts = await this.#service.findMyPosts(userId);

      return res.status(httpCodes.CREATED).json({ posts });
    } catch (error) {
      next(error);
    }
  }

  async remove(req, res, next) {
    try {
      const { id } = req.params;
      await this.#service.remove(id);

      res.status(200).json(postMessage.deleted);
    } catch (error) {
      next(error);
    }
  }

  async showPost(req, res, next) {
    try {
      const { id } = req.params;
      const post = await this.#service.checkExist(id);

      res.status(200).json({ post });
    } catch (error) {
      next(error);
    }
  }

  async postList(req, res, next) {
    try {
      // const { query } = req;
      // const posts = await this.#service.findAll(query);

      const options = req.query; // Assuming options are passed as query parameters

      const cursor = await this.#service.findAll(options);
      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");

      // Keep the connection open by sending a comment every 20 seconds
      const keepAliveInterval = setInterval(() => {
        res.write(": keep-alive\n\n");
      }, 20000);

      cursor.on("data", (doc) => {
        res.write(`data: ${JSON.stringify(doc)}\n\n`);
      });

      cursor.on("end", () => {
        clearInterval(keepAliveInterval);
        res.end();
      });

      // Handle client closing connection
      req.on("close", () => {
        clearInterval(keepAliveInterval);
        res.end();
      });
      // return res.status(httpCodes.OK).json({ posts });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new postController();
