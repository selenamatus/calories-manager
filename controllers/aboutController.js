//Ofek Daida ID 315143958 , Daniella Aharonov ID: 314750621, Selena Matusevich ID: 206511503

exports.getAbout = (req, res) => {
  const developers = [
    { firstname: "dave", lastname: "cohen", id: 234234, email: "daddd@gmail.com" },
    { firstname: "tal", lastname: "levy", id: 34534544, email: "tal@gmail.com" }
  ];

  res.json(developers);
};
