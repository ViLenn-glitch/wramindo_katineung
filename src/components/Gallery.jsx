import "../styles/gallery.css";

function Gallery() {
    const images = [
        "/gallery/1.jpeg",
        "/gallery/2.jpeg",
        "/gallery/3.jpeg"
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
                            alt={`Galeri Warmindoku Katineung ${index + 1}`}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Gallery;