import type { Note } from '../types/note';

interface NoteCardProps {
  note: Note;
  onDelete: (id: string) => void;
}

export function NoteCard({ note, onDelete }: NoteCardProps) {
  return (
    <article className="card note-card">
      <div className="note-card-header">
        <span className="badge">{note.category}</span>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(note.id)}
        >
          Hapus
        </button>
      </div>
      <h3 className="note-title">{note.title}</h3>
      <p className="note-content">{note.content}</p>
    </article>
  );
}
