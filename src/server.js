require('dotenv').config()
const app = require('./app');
const connectDB = require('./config/database');

/// เชื่อมต่อฐานข้อมูล
connectDB();

PORT = process.env.PORT 
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}` );
});