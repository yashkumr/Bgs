import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  photo: {
    data: Buffer,
    contentType: String,
  },
},{timestamps:true});

export default mongoose.model("Banners", bannerSchema);
