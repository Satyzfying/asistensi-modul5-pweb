import { useState } from 'react';
import { NotesSection } from './components/NotesSection';
import { PostsSection } from './components/PostsSection';
import './App.css';

type Tab = 'notes' | 'posts';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('notes');

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Challenge Modul 5 — React + TypeScript</h1>
        <p className="muted-text" style={{ marginBottom: '1rem' }}>
          Sistem Catatan Lokal (Tahap 1) &amp; Integrasi REST API Posts (Tahap 2)
        </p>
        <nav className="tab-nav">
          <button
            type="button"
            className={`tab-btn ${activeTab === 'notes' ? 'active' : ''}`}
            onClick={() => setActiveTab('notes')}
          >
            Tahap 1: Papan Catatan Lokal
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'posts' ? 'active' : ''}`}
            onClick={() => setActiveTab('posts')}
          >
            Tahap 2: REST API Posts
          </button>
        </nav>
      </header>

      <main>
        {activeTab === 'notes' ? <NotesSection /> : <PostsSection />}
      </main>
    </div>
  );
}
