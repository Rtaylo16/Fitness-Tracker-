const router = require("express").Router();
const sweat = require("../models/sweat.js");
const path = require("path");

router.post("/api/workouts", (req, res) => {
sweat.create({}).then(data =>{
    res.json(data)
})

.catch(err=> {
    res.json(err)
})

});

router.get("/api/workouts", (req, res) => {
    sweat.find().then(data =>{
        res.json(data)
    })

    .catch(err => {
        res.json(err)
    })
    
});

router.put("/api/workouts/:id", ({body, params}, res) => {
    sweat.findByIdAndUpdate(
        params.id,
        { $push: {exercises: body}},
        { new: true, runValidators: true}
    ).then(data =>{
        res.json(data);
    })
    .catch(err =>{
        res.json(err);
    });
});

module.exports = router;


