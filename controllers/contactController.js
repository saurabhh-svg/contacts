const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: " Get all Contacts!" });
});

//@desc Create a new contact
//@route POST /api/contacts
//@access Public

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required");
  }
  res.status(201).json({ message: "Create a new Contacts" });
});

//@desc Get a specific contact by Id
//@route GET /api/contacts/:id
//@access Public

const getContactById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get Contact ${req.params.id}!` });
});

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access Public

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Contact ${req.params.id}!` });
});

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access Public

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Contact ${req.params.id}!` });
});

module.exports = {
  getContact,
  createContact,
  getContactById,
  deleteContact,
  updateContact,
};
