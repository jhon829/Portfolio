import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="thanks-title">감사합니다</h2>
          <p className="thanks-description">
            끝까지 읽어주셔서 감사합니다.<br />
            궁금한 점이 있으시면 편하게 연락 주세요.
          </p>
          <a href="mailto:qwert884@naver.com" className="contact-cta">
            qwert884@naver.com
          </a>
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 김동년</p>
      </footer>
    </section>
  );
};

export default Contact;
