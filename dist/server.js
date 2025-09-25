import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import app from './app.js';
const port = process.env.PORT || 5000;
const mongoUri = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/test';
async function startServer() {
    try {
        // Connect to MongoDB using mongoose
        await mongoose.connect(mongoUri);
        console.log('Connected to MongoDB via Mongoose');
        // Start Express server
        app.listen(port, () => {
            console.log(`🚀 Server running at http://localhost:${port}`);
        });
    }
    catch (error) {
        console.error('❌ Failed to connect to MongoDB', error);
        process.exit(1);
    }
}
startServer();
//# sourceMappingURL=server.js.map