const express = require('express');
const router = express.Router();
const controller = require('../controllers/itemController');

// Define the routes with error handling
router.get('/', (req, res) => {
    controller.homepage(req, res).catch(err => handleError(err, res));
});

router.get('/about', (req, res) => {
    controller.aboutPage(req, res).catch(err => handleError(err, res));
});

router.get('/login', (req, res) => {
    controller.loginPage(req, res).catch(err => handleError(err, res));
});

router.get('/contact', (req, res) => {
    controller.contactPage(req, res).catch(err => handleError(err, res));
});

router.get('/register', (req, res) => {
    controller.registerPage(req, res).catch(err => handleError(err, res));
});

function handleError(err, res) {
    console.error(err); 
    res.status(500).send('Something went wrong!'); 
}

module.exports = router;
