const {Schema, model} = require ('mongoose');

const droneSchema = new Schema ({
    name: String,
    propellers: Number,
    maxSpeed: Number
});

/* Your model's name should be Drone, and not Drones. Models' naming convention recommends singular use */
const Drone = model('Drone', droneSchema);

module.exports = Drone;