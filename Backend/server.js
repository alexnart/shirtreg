import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection

mongoose.connect("mongodb+srv://admin:admin@cluster0.ahp9xr8.mongodb.net/registrationDB?retryWrites=true&w=majority")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));



// Schema & Model
const RegistrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  location: String,
  shirtSize: String,
});

const Registration = mongoose.model("Registration", RegistrationSchema);

// Routes

// Add registration
app.post("/api/register", async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();
    res.status(201).json({ message: "Registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all registrations (Admin Panel)
app.get("/api/registrations", async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
