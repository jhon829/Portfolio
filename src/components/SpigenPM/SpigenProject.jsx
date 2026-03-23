import './SpigenProject.css';

const imageEntries = Object.entries(
  import.meta.glob('../../assets/portfolio/*.png', { eager: true, query: '?url', import: 'default' })
);
const images = imageEntries
  .sort(([a], [b]) => {
    const numA = parseInt(a.match(/(\d+)\.png$/)[1]);
    const numB = parseInt(b.match(/(\d+)\.png$/)[1]);
    return numA - numB;
  })
  .map(([, src]) => src);

const SpigenProject = () => {
  const anchors = { 0: 'cover', 1: 'summary', 2: 'project', 16: 'strength' };

  return (
    <div className="spigen-portfolio">
      {images.map((src, i) => (
        <img key={i} id={anchors[i]} src={src} alt={`포트폴리오 ${i + 1}`} />
      ))}
    </div>
  );
};

export default SpigenProject;
