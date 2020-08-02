const Workout = require("../models/workoutModels");

exports.route = (app) => {
    //getLastWorkout
    app.get("/api/workouts", ({body}, res) => {
        Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    //addExercise
    app.put("/api/workouts/:id", ({body}, res) => {
        Workout.updateOne(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err =>{
            res.status(400).json(err);
        })
    });

    //createWorkout
    app.post("/api/workouts", ({body}, res) => {
        Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err =>{
            res.status(400).json(err);
        })
    });

    //getWorkoutsInRange
    app.get('/api/workouts/range', ({body}, res) =>{

    })

  
}