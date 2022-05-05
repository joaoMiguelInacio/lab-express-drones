const Drone = require("../models/drone.model.js");
const mongoose = require("mongoose");
require('../db');

const drones = [
    {
    name: "DJI Air 2S",
    propellers: 4,
    maxSpeed: 68
    }, 
    {
    name: "DJI Mini 2",
    propellers: 4,
    maxSpeed: 57
    },
    {
    name: "DJI Mavic 3",
    propellers: 4,
    maxSpeed: 75
    }
];

const droneSeed = async () => {
    try{
      await Drone.create(drones);
      console.log(`${drones.length} drones created`);
      await mongoose.connection.close();
      console.log(`Disconnected from Mongo`);
    } catch (error) {
      console.error(error);
    }
  };

  droneSeed();
