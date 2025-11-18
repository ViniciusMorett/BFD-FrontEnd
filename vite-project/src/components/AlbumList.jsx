import { useState, useEffect } from 'react';

function AlbumList() {
  const [albums, setAlbums] = useState([]);        
  const [loading, setLoading] = useState(true);    
  const [error, setError] = useState(null);       

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        if (!response.ok) {
          throw new Error('Erro na resposta da API');
        }
        const data = await response.json();
        setAlbums(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  if (loading) {
    return <p>Carregando álbuns...</p>;
  }

  if (error) {
    return <p>Falha ao buscar os álbuns.</p>;
  }

  return (
    <ul>
      {albums.map(album => (
        <li key={album.id}>{album.title}</li>
      ))}
    </ul>
  );
}

export default AlbumList;