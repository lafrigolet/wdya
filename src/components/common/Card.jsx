// src/components/ui/Card.jsx
export default function Card({ className = "", children }) {
  return (
    <div className={`rounded-xl border p-6 bg-white shadow ${className}`}>
      {children}
    </div>
  );
}
