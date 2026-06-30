import { useContext, useMemo, useState } from "react";
import { MenuContext } from "../context/MenuContext.jsx";
import "../styles/services.css";

function Services() {
    const { menuItems, loading, error } = useContext(MenuContext);
    const [activeCategory, setActiveCategory] = useState("Makanan");
    const [showAll, setShowAll] = useState(false);

    const filteredMenuItems = useMemo(() => {
        return menuItems.filter((item) => item.category === activeCategory);
    }, [menuItems, activeCategory]);

    const displayedMenuItems = showAll
        ? filteredMenuItems
        : filteredMenuItems.slice(0, 6);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setShowAll(false);
    };

    if (loading) {
        return (
            <section id="menu" className="services">
                <h2>Katalog Menu Favorit</h2>
                <p className="menu-subtitle">
                    Pilihan menu terbaik yang wajib Anda coba di Warmindoku Katineung
                </p>
                <div className="service-container">
                    <p className="menu-message">Loading menu...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="menu" className="services">
                <h2>Katalog Menu Favorit</h2>
                <p className="menu-subtitle">
                    Pilihan menu terbaik yang wajib Anda coba di Warmindoku Katineung
                </p>
                <div className="service-container">
                    <p className="menu-message menu-error">Error: {error}</p>
                </div>
            </section>
        );
    }

    return (
        <section id="menu" className="services">
            <h2>Katalog Menu Favorit</h2>
            <p className="menu-subtitle">
                Pilih kategori makanan atau minuman favorit Anda di Warmindoku Katineung
            </p>

            <div className="menu-category-tabs" role="tablist" aria-label="Kategori menu">
                <button
                    type="button"
                    className={`category-tab ${activeCategory === "Makanan" ? "active" : ""}`}
                    onClick={() => handleCategoryChange("Makanan")}
                    role="tab"
                    aria-selected={activeCategory === "Makanan"}
                >
                    Makanan
                </button>

                <button
                    type="button"
                    className={`category-tab ${activeCategory === "Minuman" ? "active" : ""}`}
                    onClick={() => handleCategoryChange("Minuman")}
                    role="tab"
                    aria-selected={activeCategory === "Minuman"}
                >
                    Minuman
                </button>
            </div>

            <p className="category-title">
                {activeCategory === "Makanan" ? "Menu Makanan" : "Menu Minuman"}
            </p>

            <div className="service-container">
                {displayedMenuItems.map((item) => (
                    <div className="card" key={item.id}>
                        {item.image && (
                            <img
                                src={item.image}
                                alt={item.name}
                                className="menu-image"
                                loading="lazy"
                            />
                        )}
                        <h3>{item.name}</h3>
                        <p className="price">{item.price}</p>
                    </div>
                ))}
            </div>

            {filteredMenuItems.length === 0 && (
                <p className="menu-message">
                    Menu {activeCategory.toLowerCase()} belum tersedia.
                </p>
            )}

            {filteredMenuItems.length > 6 && !showAll && (
                <button
                    type="button"
                    className="menu-toggle-button"
                    onClick={() => setShowAll(true)}
                >
                    Lihat Semua Menu {activeCategory}
                </button>
            )}

            {showAll && filteredMenuItems.length > 6 && (
                <button
                    type="button"
                    className="menu-toggle-button menu-toggle-secondary"
                    onClick={() => setShowAll(false)}
                >
                    Sembunyikan Menu
                </button>
            )}

            <div className="wa-order-cta">
                <h3>Lapar? Langsung Pesan!</h3>
                <p>
                    Tidak perlu aplikasi ojol! Anda bisa langsung memesan menu favorit
                    kami dengan cepat dan mudah melalui WhatsApp.
                </p>
                <a
                    href="https://wa.me/6283182489324?text=Halo%20Warmindo%20Katineung,%20saya%20mau%20pesan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-order"
                >
                    <span>📱</span> Pesan via WhatsApp
                </a>
            </div>
        </section>
    );
}

export default Services;
