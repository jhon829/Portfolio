import './WorkStyle.css';

const principles = [
  {
    num: '01',
    title: '타겟부터 정의한다',
    desc: '"누구를 위한 서비스인가"를 먼저 결정합니다. 타겟이 명확해야 기능이 따라옵니다.',
  },
  {
    num: '02',
    title: '직접 만들어 검증한다',
    desc: '기획서만 쓰지 않습니다. 프로토타입을 직접 만들어 빠르게 검증합니다.',
  },
  {
    num: '03',
    title: '데이터로 설득한다',
    desc: '감이 아닌 데이터로 의사결정. Before/After를 수치로 증명합니다.',
  },
  {
    num: '04',
    title: '현장의 목소리를 듣는다',
    desc: '데스크 리서치보다 관계자 인터뷰. 직접 경험 없는 도메인도 현장에서 배웁니다.',
  },
  {
    num: '05',
    title: 'AI를 경험으로 설계한다',
    desc: 'AI 기능을 붙이는 게 아니라, 사용자 경험의 일부로 자연스럽게 녹입니다.',
  },
  {
    num: '06',
    title: '자동화로 반복을 없앤다',
    desc: '수작업 프로세스를 분석하고, 워크플로우로 자동화 파이프라인을 설계합니다.',
  },
];

const WorkStyle = () => {
  return (
    <section className="workstyle">
      <div className="workstyle-container">
        <h2 className="workstyle-heading">제가 일하는 방식에 대해 소개합니다.</h2>
        <div className="workstyle-grid">
          {principles.map((p) => (
            <div key={p.num} className="workstyle-card">
              <span className="workstyle-num">{p.num}</span>
              <h3 className="workstyle-title">{p.title}</h3>
              <p className="workstyle-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkStyle;
