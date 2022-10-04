const router = require('express').Router()
const { Router } = require('express');
const { document } = require('../controllers/docController');

// const { verifyToken } = require('../../middlewares/authentication')
const { upload } = require('../middlewares/multer')






//documents
router.post('/documents', upload.fields([
    { name: "driverLicense" },
    { name: "cnaCertificate" },
    { name: "nursingLicense" },
    { name: "socialSecurity" },
    { name: "cpr" },
    { name: "bls" },
    { name: "acls" },
    { name: "covidVaccination" },
    { name: "hepatitesSeries" }
]), document)

module.exports = router;