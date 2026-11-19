import { useState, type FormEvent } from 'react';
import type { Note } from '../types/note';

interface NoteFormProps {
  onAddNote: (noteData: Omit<Note, 'id'>) => void;
}

const CATEGORIES = ['Kuliah', 'Tugas', 'Organisasi', 'Pribadi', 'Lainnya'];

export function NoteForm({ onAddNote }: NoteFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    onAddNote({
      title: title.trim(),
      content: content.trim(),
      category,
    });

    // Reset form setelah submit
    setTitle('');
    setContent('');
    setCategory(CATEGORIES[0]);
  };

  return (
    <form className="card form-box" onSubmit={handleSubmit}>
      <h2>Tambah Catatan Baru</h2>

      <div className="form-group">
        <label htmlFor="note-title">Judul</label>
        <input
          id="note-title"
          type="text"
          placeholder="Contoh: Rangkuman Modul 5 React"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="note-category">Kategori</label>
        <select
          id="note-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="note-content">Isi Catatan</label>
        <textarea
          id="note-content"
          rows={3}
          placeholder="Tulis isi catatan di sini..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Simpan Catatan
      </button>
    </form>
  );
}
