
import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

function NewsFeed() {
  // 1. Tiga state pengendali tampilan
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [source, setSource] = useState('kompas');

  // 2. Fungsi mengambil berita dari API
  const fetchNews = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const url = `https://api.siputzx.my.id/api/berita/${source}`;

const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status}`);
      }

      const json = await res.json();

const clean = (json.data || []).map((d) => ({
    ...d,
    image: d.image || d.image_thumbnail,
    date: d.date || d.time,
    category: d.category || 'CNN'
}));

setNews(clean);

    } catch (err) {
      setError(
        err.message || 'Gagal mengambil berita terkini.'
      );

    } finally {
      setIsLoading(false);
    }
  };

  // 3. Mengambil berita saat komponen pertama kali dibuka
  useEffect(() => {
    fetchNews();
}, [source]);

  // 4. Tampilan berita
  return (
    <div className="news-container">

      <div className="news-toolbar">
    <div>
        <h2>Berita Terkini {source.toUpperCase()}</h2>
        <p>
            Menampilkan {news.length} artikel dari API Siputzx
        </p>
    </div>

    <div className="source-buttons">
        <button
            className={source === 'kompas' ? 'active' : ''}
            onClick={() => setSource('kompas')}
        >
            Kompas
        </button>

        <button
            className={source === 'cnn' ? 'active' : ''}
            onClick={() => setSource('cnn')}
        >
            CNN
        </button>

        <button
            className="btn-refresh"
            onClick={fetchNews}
            disabled={isLoading}
        >
            {isLoading ? '⏳ Memuat...' : '🔄 Segarkan Berita'}
        </button>
    </div>
</div>

      {/* Loading */}
      {isLoading && (
    <div className="spinner-box">
        <div className="css-spinner"></div>
        <p>Mengunduh berita nasional terbaru...</p>
    </div>
)}

      {/* Error */}
      {error && !isLoading && (
        <div className="error-banner">
          <h5>Terjadi Kesalahan Jaringan</h5>
          <p>{error}</p>
          <button onClick={fetchNews}>
            Coba Lagi
          </button>
        </div>
      )}

      {/* Berita berhasil dimuat */}
      {!isLoading && !error && (
        <div className="news-grid">
          {news.map((item, i) => (
            <NewsCard key={i} {...item} />
          ))}
        </div>
      )}

    </div>
  );
}

export default NewsFeed;
