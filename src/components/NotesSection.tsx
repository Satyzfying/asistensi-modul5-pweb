import { useEffect, useState } from 'react';
import type { Note } from '../types/note';
import { NoteForm } from './NoteForm';
import { NoteCard } from './NoteCard';

const STORAGE_KEY = 'modul5_notes_data';

const DEFAULT_NOTES: Note[] = [
  {
    id: 'note-1',
    title: 'Pelajari State & Props React',
    content: 'Pahami cara kerja useState, passing props, dan controlled components untuk form input.',
    category: 'Kuliah',
  },
  {
    id: 'note-2',
    title: 'Kerjakan Challenge Modul 5',
    content: 'Selesaikan Tahap 1 Papan Catatan Lokal dan siapkan struktur folder untuk Tahap 2.',
    category: 'Tugas',
  },
  {
    id: 'note-3',
    title: 'Beli Kopi untuk Asistensi',
    content: 'Siapkan konsumsi dan cek koneksi sebelum take video penjelasan hasil kodingan.',
    category: 'Pribadi',
  },
];

export function NotesSection() {
  // Lazy initializer: baca localStorage sekali saat pertama kali mount
  const [notes, setNotes] = useState<Note[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Note[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
      return DEFAULT_NOTES;
    } catch {
      return DEFAULT_NOTES;
    }
  });

  const [searchQuery, setSearchQuery] = useState('');

  // Simpan otomatis ke localStorage setiap state notes berubah
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (noteData: Omit<Note, 'id'>) => {
    const newNote: Note = {
      id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
      ...noteData,
    };
    setNotes((prev) => [newNote, ...prev]);
  };

  const handleDeleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  // Filter berdasarkan judul (case-insensitive)
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="section-stack">
      {/* Form Input Catatan Baru */}
      <NoteForm onAddNote={handleAddNote} />

      {/* Bar Pencarian / Filter Judul */}
      <div className="card search-bar">
        <label htmlFor="search-input">
          <strong>Cari Catatan</strong>
        </label>
        <input
          id="search-input"
          type="text"
          placeholder="Ketik judul catatan yang ingin dicari..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <span className="muted-text">
          Menampilkan {filteredNotes.length} dari {notes.length} catatan
        </span>
      </div>

      {/* Grid Daftar Catatan */}
      {filteredNotes.length > 0 ? (
        <div className="card-grid">
          {filteredNotes.map((note) => (
            <NoteCard key={note.id} note={note} onDelete={handleDeleteNote} />
          ))}
        </div>
      ) : (
        <div className="card empty-state">
          <p>Tidak ada catatan yang sesuai dengan kata kunci pencarian.</p>
        </div>
      )}
    </section>
  );
}
