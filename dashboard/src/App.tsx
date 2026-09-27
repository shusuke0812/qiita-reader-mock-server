import { useState, useEffect } from 'react'
import './App.css'

interface Item {
  id: string;
  likes_count: number;
  tags: {
    name: string;
  }[];
  title: string;
  updated_at: string;
  url: string;
  user: {
    id: string;
    name: string;
    profile_image_url: string;
  }
}

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          '/api/items?page=1&per_page=20&query=',
        );
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const data = (await response.json()) as Item[];
        setItems(data);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Unknow error');
      }
    }
    void fetchItems();
  }, []);

  return (
    <main>
      <h1>Qiita Mock Server</h1>
      <h2>GET /items</h2>
      {error && <p>Error: {error}</p>}
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </main>
  )
}

export default App
