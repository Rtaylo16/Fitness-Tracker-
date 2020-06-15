const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()

        },

        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter in the excercise"

                },

                name: {
                    type: String,
                    trim: true,
                    required: "Enter the name of the exercise"

                },

                duration: {
                    type: String,
                    trim: true,
                    required: "Enter the duration of your exercise"

                },

                weight: {
                    type: Number
                },

                sets: {
                    type: Number
                },

                reps: {
                    type: Number
                },

                distance: {
                    type: Number
                }


            }

        ]

    },
    {
        toJSON: {
            virtuals: true
        }
    }

);

fitnessSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
})

const fitness = mongoose.model("fitness", fitnessSchema);

module.exports = fitness;

