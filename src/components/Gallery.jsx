import "../styles/gallery.css";

function Gallery() {
    const images = [
        "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
    ];

    return (
        <section id="gallery" className="gallery">
            <h2>Galeri Kami</h2>

            <p className="gallery-subtitle">
                Momen kebersamaan dan sajian terbaik di Warmindoku Katineung
            </p>

            <div className="gallery-grid">
                {images.map((src, index) => (
                    <div className="gallery-item" key={index}>
                        <img
                            src={src}
                            alt={`Galeri Warmindoku ${index + 1}`}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Gallery;