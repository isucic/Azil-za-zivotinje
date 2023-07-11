var express = require('express')
var router = express.Router()

const animalController = require('./controllers/animalController');
router.get("/getAnimals", animalController.getAnimals);
router.patch("/updateAdoptedAnimal/:id", animalController.updateAdoptedAnimal);
router.get("/getAnimalKind",animalController.getAnimalKind);
router.patch("/updateAnimal/:id",animalController.updateAnimal);
router.post("/postAnimal", animalController.postAnimal);

const postController = require('./controllers/postController');
router.get("/getPosts", postController.getPosts);
router.post("/addPost", postController.addPost);
router.delete("/deletePost/:id", postController.deletePost);

const donationController = require('./controllers/donationController');
router.get("/getDonations", donationController.getDonations);
router.patch("/changeDonationCategory/:id", donationController.changeDonationCategory);
router.post("/postDonation", donationController.copyToRequest);
router.get("/getDonationType", donationController.getType);
router.delete("/deleteDonation/:id", donationController.deleteDonation);

const homeController = require('./controllers/homeController');
router.post("/sendMessage", homeController.sendMessage);
router.get("/getPhotoSlider", homeController.getPhotoSlider)

module.exports = router;