const express = require('express');
const router = express.Router();
const Drone = require("../models/drone.model.js");

router.get('/list', async (req, res, next) => {
  try {
    const drones = await Drone.find();
    res.render('drones/list', {drones});
  } catch (err) {
    next(err);
  }
});

router.get('/create', (req, res, next) => {
  res.render('drones/create-form');
});

router.post('/create', async (req, res, next) => {
  try {
    const { name, propellers, maxSpeed } = req.body;
    await Drone.create({
      name,
      propellers,
      maxSpeed
    });
    res.redirect("/drones/list");
  } catch (error) {
    next(error);
  }
});

router.get('/:id/edit', async (req, res, next) => {
  try {
    const { id } = req.params;
    const drone = await Drone.findById (id);
    res.render ('drones/update-form', drone);
  } catch(error){
    next(error);
  }
});

router.post('/:id/edit', async (req, res, next) => {
  try {
		const { id } = req.params;
		const { name, propellers, maxSpeed } = req.body;
		await Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true });
		res.redirect("/drones/list");
	} catch(error){
		next(error);
	}
});

router.post('/:id/delete', async (req, res, next) => {
  try {
		const { id } = req.params;
		await Drone.findByIdAndDelete(id);
    res.redirect("/drones/list");
	} catch (error) {
		next(error);
	}
});

module.exports = router;