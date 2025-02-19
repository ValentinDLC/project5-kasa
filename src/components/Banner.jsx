function Banner({ title, alt, imageUrl }) {
  return (
    <div className="banner">
      <img src={imageUrl} alt={alt} />
      <h1>{title}</h1>
    </div>
  );
}

export default Banner;
