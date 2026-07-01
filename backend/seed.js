import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

// Mongoose Schema (harus sama persis dengan yang di server.js nantinya)
const menuSchema = new mongoose.Schema({
    category: String,
    name: String,
    price: String,
    desc: String,
    image: String
});

const Menu = mongoose.model("Menu", menuSchema);

// Data Asli mas
const menuItems = [
    {
        id: 1,
        category: "Makanan",
        name: "Indomie Nyemek Spesial",
        price: "Rp 15.000",
        desc: "Mie nyemek wangi dengan telur, sosis, dan kuah kental gurih.",
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 2,
        category: "Makanan",
        name: "Magelangan",
        price: "Rp 15.000",
        desc: "Nasi goreng campur mie dengan sayuran, telur, bawang goreng, dan bumbu khas Warmindo.",
        image: "/magelangan.jpg"
    },
    {
        id: 3,
        category: "Makanan",
        name: "Indomie Kuah Susu Keju",
        price: "Rp 18.000",
        desc: "Sensasi creamy dari kuah susu dipadu keju cheddar meleleh.",
        image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 4,
        category: "Makanan",
        name: "Indomie Seblak Mercon",
        price: "Rp 16.000",
        desc: "Pedas dengan kerupuk seblak, bakso, dan sosis.",
        image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 5,
        category: "Minuman",
        name: "Es Teh",
        price: "Rp 5.000",
        desc: "Teh manis dingin yang menyegarkan.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 6,
        category: "Minuman",
        name: "Es Kopi Susu Aren",
        price: "Rp 12.000",
        desc: "Kopi susu kekinian dengan gula aren asli.",
        image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 7,
        category: "Makanan",
        name: "Indomie Kuah Soto",
        price: "Rp 12.000",
        desc: "Indomie soto segar dengan tambahan jeruk nipis.",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 8,
        category: "Makanan",
        name: "Indomie Goreng Rendang",
        price: "Rp 14.000",
        desc: "Indomie goreng dengan rasa rendang pedas.",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 9,
        category: "Minuman",
        name: "Susu Soda Gembira",
        price: "Rp 10.000",
        desc: "Soda segar dicampur susu dan sirup cocopandan.",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 10,
        category: "Makanan",
        name: "Kerupuk Pangsit",
        price: "Rp 3.000",
        desc: "Camilan pangsit goreng untuk teman makan mie.",
        image: "https://images.unsplash.com/photo-1599321955726-e048426594af?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 11,
        category: "Makanan",
        name: "Nasi Telor Dadar",
        price: "Rp 10.000",
        desc: "Nasi hangat dengan telur dadar gurih.",
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 12,
        category: "Makanan",
        name: "Nasi Goreng Jawa Spesial",
        price: "Rp 20.000",
        desc: "Nasi goreng khas Jawa dengan bumbu rempah dan pelengkap spesial.",
        image: "/magelangan.jpg"
    },
    {
        id: 13,
        category: "Makanan",
        name: "Nasi Omelette Spesial",
        price: "Rp 19.000",
        desc: "Nasi dengan omelette lembut dan topping spesial.",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 14,
        category: "Makanan",
        name: "Nasi Omelette",
        price: "Rp 13.000",
        desc: "Nasi hangat dengan omelette gurih.",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 15,
        category: "Makanan",
        name: "Mie Tek Tek Spesial",
        price: "Rp 25.000",
        desc: "Mie tek tek dengan topping spesial yang lengkap.",
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 16,
        category: "Makanan",
        name: "Mie Tek Tek Sosis",
        price: "Rp 14.000",
        desc: "Mie tek tek gurih dengan tambahan sosis.",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 17,
        category: "Minuman",
        name: "Air Mineral",
        price: "Rp 3.000",
        desc: "Air mineral untuk menemani santapan Anda.",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 18,
        category: "Minuman",
        name: "Teh Panas",
        price: "Rp 3.000",
        desc: "Teh hangat dengan rasa manis yang pas.",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 19,
        category: "Minuman",
        name: "Teh Manis",
        price: "Rp 3.000",
        desc: "Teh manis untuk teman makan.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 20,
        category: "Minuman",
        name: "Teh Tarik",
        price: "Rp 5.000",
        desc: "Teh susu dengan rasa lembut dan creamy.",
        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 21,
        category: "Minuman",
        name: "Kopi Hitam",
        price: "Rp 5.000",
        desc: "Kopi hitam hangat dengan aroma yang kuat.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 22,
        category: "Minuman",
        name: "Kopi Susu",
        price: "Rp 5.000",
        desc: "Perpaduan kopi dan susu yang creamy.",
        image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 23,
        category: "Minuman",
        name: "Good Day",
        price: "Rp 3.000",
        desc: "Minuman Good Day dengan berbagai pilihan rasa.",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 24,
        category: "Minuman",
        name: "Cappuccino",
        price: "Rp 5.000",
        desc: "Minuman cappuccino dengan rasa kopi yang lembut.",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 25,
        category: "Minuman",
        name: "Milo",
        price: "Rp 3.000",
        desc: "Minuman cokelat malt yang nikmat disajikan hangat atau dingin.",
        image: "https://images.unsplash.com/photo-1542990253-a781e04c0082?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 26,
        category: "Minuman",
        name: "Susu",
        price: "Rp 3.000",
        desc: "Susu hangat atau dingin untuk melengkapi pesanan.",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 27,
        category: "Minuman",
        name: "Jeruk",
        price: "Rp 3.000",
        desc: "Minuman jeruk segar dengan rasa manis dan asam.",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 28,
        category: "Minuman",
        name: "Jeruk Panas",
        price: "Rp 3.000",
        desc: "Minuman jeruk hangat yang menyegarkan.",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 29,
        category: "Minuman",
        name: "Jeruk Es",
        price: "Rp 3.000",
        desc: "Es jeruk segar untuk melepas dahaga.",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 30,
        category: "Minuman",
        name: "Nutrisari",
        price: "Rp 3.000",
        desc: "Minuman rasa buah yang segar dan manis.",
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 31,
        category: "Minuman",
        name: "Susu Coklat",
        price: "Rp 3.000",
        desc: "Susu cokelat dengan rasa manis dan creamy.",
        image: "https://images.unsplash.com/photo-1542990253-a781e04c0082?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 32,
        category: "Minuman",
        name: "Susu Vanilla",
        price: "Rp 3.000",
        desc: "Susu vanilla dengan aroma lembut dan manis.",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=400"
    }
];

// Menjalankan Seed Data
const seedData = async () => {
    try {
        if (!process.env.MONGO_URI || process.env.MONGO_URI.includes("<db_username>")) {
            console.error("❌ ERROR: Username atau password belum diubah di dalam file .env!");
            process.exit(1);
        }

        console.log("Menghubungkan ke MongoDB...");
        await mongoose.connect(process.env.MONGO_URI);

        console.log("Berhasil Terhubung. Menghapus data lama (jika ada)...");
        await Menu.deleteMany({});

        console.log("Memasukkan 32 Data Menu Harta Karun Mas ke Database...");
        // Kita tidak memakai ".id" bawaan, biarkan Mongoose membuat "_id" baru otomatis
        const menuTanpaIdBawaan = menuItems.map(({ id, ...rest }) => rest);

        await Menu.insertMany(menuTanpaIdBawaan);

        console.log("✅ SUKSES! 32 Menu Berhasil Pindah Ke MongoDB Atlas!");
        process.exit();
    } catch (error) {
        console.error("Gagal melakukan migrasi:", error);
        process.exit(1);
    }
};

seedData();
