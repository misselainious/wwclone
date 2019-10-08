const router = require("express").Router();
const wineController = require("../../controllers/winecontroller");

// Matches with "/api/wines"
router.route("/")
  .get(wineController.findAll)
  .post(wineController.create)


router.route("/new")
  .get(wineController.findSome)

  router.route("/feature")
  .get(wineController.findFeature)
 
router
  .route("/:id")
  .get(wineController.findById)
  // .put(wineController.update)
  // .delete(wineController.remove);


router
.route("/:producer")
.get(wineController.findByProducer)

module.exports = router;