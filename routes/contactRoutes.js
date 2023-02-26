const express = require("express");

const router = express.Router();

const {
  getContact,
  createContact,
  getContactById,
  deleteContact,
  updateContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken); // This middleware will be applied to all routes in this file

router.route("/").get(getContact).post(createContact);
router
  .route("/:id")
  .get(getContactById)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
