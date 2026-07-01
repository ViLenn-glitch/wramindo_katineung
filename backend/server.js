import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 1. KONEKSI KE MONGODB
console.log("Menghubungkan ke MongoDB...");
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Berhasil terhubung ke MongoDB!"))
    .catch((err) => console.log("Gagal terhubung ke MongoDB:", err));

// 2. MEMBUAT SCHEMA (STRUKTUR DATA)
const menuSchema = new mongoose.Schema({
    category: String,
    name: String,
    price: String,
    desc: String,
    image: String
});

// MAGIC TRICK: Mengubah output `_id` jadi `id` buat frontend React!
// Ini menjamin Vercel dan React tidak pernah error.
menuSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

const Menu = mongoose.model("Menu", menuSchema);

// 3. API MENU
app.get("/api/menu", async (req, res) => {
    try {
        const menus = await Menu.find();
        res.json(menus);
    } catch (error) {
        console.error("Gagal get menu:", error);
        res.status(500).json({ error: "Gagal mengambil data dari Database" });
    }
});

// Sistem Autentikasi (Tetap Sama Namun Rapi)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "nampol123";
const SECRET_TOKEN = "token_rahasia_warmindo";

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === ADMIN_PASSWORD) {
        res.json({ success: true, token: SECRET_TOKEN });
    } else {
        res.status(401).json({ success: false, message: "Username atau password salah!" });
    }
});

app.post('/api/menu/add', async (req, res) => {
    const token = req.headers.authorization;

    if (token === SECRET_TOKEN) {
        try {
            const newItem = new Menu(req.body);
            await newItem.save();
            // Ambil ualng data terbaru dari DB untuk dibalikkan ke React
            const menuItems = await Menu.find();
            res.json({ success: true, message: "Menu berhasil tersimpan di Cloud Database!", menuItems });
        } catch (error) {
            console.error("Gagal save menu:", error);
            res.status(500).json({ success: false, message: "Gagal menyimpan menu ke Database!" });
        }
    } else {
        res.status(403).json({ success: false, message: "Akses Ditolak! Anda bukan admin." });
    }
});
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}

export default app;
