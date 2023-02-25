const express = require("express");

const router = express.Router();

const {
  getContact,
  createContact,
  getContactById,
  deleteContact,
  updateContact,
} = require("../controllers/contactController");

router.route("/").get(getContact).post(createContact);
router
  .route("/:id")
  .get(getContactById)
  .put(updateContact)
  .delete(deleteContact);

// router.route("/").get(getContact);
// router.route("/").post(createContact);
// router.route("/:id").get(getContactById);
// router.route("/:id").put(updateContact);
// router.route("/:id").delete(deleteContact);

module.exports = router;
