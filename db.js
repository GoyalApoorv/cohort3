const { Schema, default: mongoose } = require('mongoose');

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://admin:qVdvnlXQISKQsZbR@cluster0.lnce9.mongodb.net/coursera-app')
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });


// User Schema
const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String, // Corrected typo
  lastName: String,
});

// Admin Schema
const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String, // Corrected typo
  lastName: String,
});

// Course Schema
const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  CreatorId: { type: Schema.Types.ObjectId }, // Corrected `Schema.types.ObjectId`
});

// Purchase Schema
const purchaseSchema = new Schema({
  userId: { type: Schema.Types.ObjectId }, // Corrected `user0Id` to `userId`
  courseId: { type: Schema.Types.ObjectId },
});

// Models
const userModel = mongoose.model('user', userSchema);
const adminModel = mongoose.model('admin', adminSchema);
const courseModel = mongoose.model('course', courseSchema);
const purchaseModel = mongoose.model('purchase', purchaseSchema);

// Export Models
module.exports = {
  userModel,
  adminModel,
  purchaseModel,
  courseModel,
};
