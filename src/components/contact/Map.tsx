export default function Map() {
  return (
    <div className="w-full h-64">
      <iframe
        title="Map"
        className="w-full h-full rounded border"
        src="https://www.google.com/maps?q=Ambalkulam%2C%20Kilinochchi&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}