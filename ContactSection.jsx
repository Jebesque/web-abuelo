import ArtworkCard from './ArtworkCard';

function ArtworkGrid({ items, language, t }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((artwork) => (
        <ArtworkCard key={artwork.id} artwork={artwork} language={language} t={t} />
      ))}
    </div>
  );
}

export default ArtworkGrid;
