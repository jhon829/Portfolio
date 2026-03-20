import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const PAGE_WIDTH = 1920;
const PAGE_HEIGHT = 1080;

export async function captureFullPage() {
  const navbar = document.querySelector('.navbar');
  if (navbar) navbar.style.display = 'none';

  try {
    const sections = document.querySelectorAll('main > section');
    if (sections.length === 0) return;

    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [PAGE_WIDTH, PAGE_HEIGHT],
    });

    for (let i = 0; i < sections.length; i++) {
      if (i > 0) pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT], 'landscape');

      const canvas = await html2canvas(sections[i], {
        windowWidth: PAGE_WIDTH,
        scale: 1,
        useCORS: true,
        backgroundColor: '#FFFFFF',
        logging: false,
      });

      const pageCanvas = document.createElement('canvas');
      pageCanvas.width = PAGE_WIDTH;
      pageCanvas.height = PAGE_HEIGHT;

      const ctx = pageCanvas.getContext('2d');
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, PAGE_WIDTH, PAGE_HEIGHT);

      // 섹션을 1920 너비에 맞추고 세로 중앙 정렬
      const scale = PAGE_WIDTH / canvas.width;
      const scaledHeight = canvas.height * scale;
      const yOffset = Math.max(0, (PAGE_HEIGHT - scaledHeight) / 2);

      ctx.drawImage(canvas, 0, yOffset, PAGE_WIDTH, scaledHeight);

      const pageData = pageCanvas.toDataURL('image/jpeg', 0.92);
      pdf.addImage(pageData, 'JPEG', 0, 0, PAGE_WIDTH, PAGE_HEIGHT);
    }

    pdf.save('김동년_포트폴리오.pdf');
  } finally {
    if (navbar) navbar.style.display = '';
  }
}
