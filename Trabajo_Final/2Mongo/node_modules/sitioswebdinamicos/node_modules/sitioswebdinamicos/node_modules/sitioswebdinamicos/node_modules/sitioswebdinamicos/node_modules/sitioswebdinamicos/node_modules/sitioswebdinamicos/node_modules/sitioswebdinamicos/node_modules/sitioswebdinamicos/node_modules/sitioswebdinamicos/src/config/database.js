const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/tienda", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ MongoDB conectado correctamente");
    } catch (error) {
        console.error("❌ Error de conexión a MongoDB:", error);
        process.exit(1); // Cierra la app si la conexión falla
    }
};

module.exports = connectDB;
