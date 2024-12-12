import { Schema, model } from "mongoose";

const bodyShapeVolumeSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  shapeRingsValues: [
    {
      weight: {
        type: Number,
      },
      waist: {
        type: Number,
      },
      leftHip: {
        type: Number,
      },
      rightHip: {
        type: Number,
      },
      chest: {
        type: Number,
      },
      neck: {
        type: Number,
      },
      leftBiceps: {
        type: Number,
      },
      rightBiceps: {
        type: Number,
      },
      leftCalve: {
        type: Number,
      },
      rightCalve: {
        type: Number,
      },
    },
  ],
});

export default model("shapeVolume", bodyShapeVolumeSchema);
