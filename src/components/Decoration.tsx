const images = Array.from({ length: 16 }, (_, i) => `/square/${i + 1}.jpg`);

const Decoration = () => {
  return (
    <div className="images">
      {images.map((url, i) => (
        <div key={i} className="image">
          <img src={url} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Decoration;
