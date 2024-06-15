exports.getAbout = (req, res) => {
    res.json([
      { "firstname": "dave", "lastname": "cohen", "id": 234234, "email": "daddd@gmail.com" },
      { "firstname": "tal", "lastname": "levy", "id": 34534544, "email": "tal@gmail.com" }
    ]);
  };
  