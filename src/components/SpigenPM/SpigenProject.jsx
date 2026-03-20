import './SpigenProject.css';

const images = Object.values(
  import.meta.glob('../../assets/portfolio/*.png', { eager: true, query: '?url', import: 'default' })
);

const SpigenProject = () => {
  const anchors = { 0: 'home', 1: 'introduction', 2: 'project' };

  return (
    <div className="spigen-portfolio">
      {images.map((src, i) => (
        <img key={i} id={anchors[i]} src={src} alt={`포트폴리오 ${i + 1}`} />
      ))}
    </div>
  );
};

export default SpigenProject;
