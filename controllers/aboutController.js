//Ofek Daida ID 315143958 , Daniella Aharonov ID: 314750621, Selena Matusevich ID: 206511503

exports.getAbout = (req, res) => {
  const developers = [
    { firstname: "Selena", lastname: "Matusevich", id: 206511503, email: "matusevich.selena@gmail.com" },
    { firstname: "Daniella", lastname: "Aharonov", id: 314750621, email: "daniellaaharonov@gmail.com" }, 
    { firstname: "ofek", lastname: "daida", id: 315143958, email: "ofekdaida16@gmail.com"}
  ];

  res.json(developers); // Sending the developer information as a response
};