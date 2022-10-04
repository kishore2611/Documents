// const User = require('../models/User')
const Document = require("../models/Documents");

const document = async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).send({
        status: 0,
        message: "Files are Required",
      });
    }

    const doc = await Document.create( $push: {

        "driverLicense.document": req.files.driverLicense
          ? req.files.driverLicense[0].path
          : req.body.driverLicense,
        // "driverLicense.status": req.files.driverLicense ? 1 : 0,
        "cnaCertificate.document": req.files.cnaCertificate
          ? req.files.cnaCertificate[0].path
          : req.body.cnaCertificate,
        // "cnaCertificate.status": req.files.cnaCertificate ? 1 : 0,
        
    }
    );
    return res.status(200).send({
      status: 1,
      message: "documents uploaded successfully",
      data: doc,
    });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = {
  document,
};



// "nursingLicense.document": req.files.nursingLicense
//           ? req.files.nursingLicense[0].path
//           : req.body.nursingLicense,
//         "nursingLicense.status": req.files.nursingLicense ? 1 : 0,
//         "socialSecurity.document": req.files.socialSecurity
//           ? req.files.socialSecurity[0].path
//           : req.body.socialSecurity,
//         "socialSecurity.status": req.files.socialSecurity ? 1 : 0,
//         "cpr.document": req.files.cpr ? req.files.cpr[0].path : req.body.cpr,
//         "cpr.status": req.files.cpr ? 1 : 0,
//         "bls.document": req.files.bls ? req.files.bls[0].path : req.body.bls,
//         "bls.status": req.files.bls ? 1 : 0,
//         "acls.document": req.files.acls ? req.files.acls[0].path : req.body.acls,
//         "acls.status": req.files.acls ? 1 : 0,
//         "covidVaccination.document": req.files.covidVaccination
//           ? req.files.covidVaccination[0].path
//           : req.body.covidVaccination,
//         "covidVaccination.status": req.files.covidVaccination ? 1 : 0,
//         "hepatitesSeries.document": req.files.hepatitesSeries
//           ? req.files.hepatitesSeries[0].path
//           : req.body.hepatitesSeries,
//         "hepatitesSeries.status": req.files.hepatitesSeries ? 1 : 0,