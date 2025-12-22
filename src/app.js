// เรียกใช้งาน Express.js
const express = require('express');
// ประกาศตัวแปร app เพื่อสร้างแอปพลิเคชัน Express
const app = express();

// ตั้งค่า middleware เพื่อแปลงข้อมูล JSON ที่รับเข้ามา
app.use(express.json());

// ใช้งานเส้นทางจากไฟล์ routes.js
app.use('/api',require('./routes'));

// ส่งออกแอปพลิเคชันเพื่อใช้งานในไฟล์อื่น 
module.exports = app; 