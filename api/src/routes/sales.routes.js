const { Router } = require("express");
const SalesController = require("../controllers/SalesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization")

const salesRoutes = Router();

const salesController = new SalesController();

salesRoutes.use(ensureAuthenticated);
// Autorização p/ somente admin
// Todas as rotas
salesRoutes.use(verifyUserAuthorization(["admin"])) 

salesRoutes.get("/", salesController.index);

module.exports = salesRoutes;