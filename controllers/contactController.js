//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const getContact = (req, res) => {
  res.status(200).json({ message: " Get all Contacts!" });
};

//@desc Create a new contact
//@route POST /api/contacts
//@access Public

const createContact = (req, res) => {
  res.status(201).json({ message: "Create a new Contacts" });
};

//@desc Get a specific contact by Id
//@route GET /api/contacts/:id
//@access Public

const getContactById = (req, res) => {
  res.status(200).json({ message: `Get Contact ${req.params.id}!` });
};

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access Public

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete Contact ${req.params.id}!` });
};

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access Public

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update Contact ${req.params.id}!` });
};

module.exports = {
  getContact,
  createContact,
  getContactById,
  deleteContact,
  updateContact,
};
