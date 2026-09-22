/**
 * AuroraBg - Ambient animated Aurora canvas background
 */
export function initAuroraBg(canvasId = 'auroraCanvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const handleResize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', handleResize, { passive: true });

  let time = 0;

  // Render smooth wave mesh
  function render() {
    time += 0.003;
    ctx.clearRect(0, 0, width, height);

    // Deep space dark background
    ctx.fillStyle = '#09090b';
    ctx.fillRect(0, 0, width, height);

    // Aurora blob 1 - Cyan/Sky
    const x1 = width * 0.4 + Math.sin(time * 0.7) * (width * 0.15);
    const y1 = height * 0.25 + Math.cos(time * 0.9) * (height * 0.1);
    const rad1 = Math.max(width, height) * 0.45;
    const grad1 = ctx.createRadialGradient(x1, y1, 0, x1, y1, rad1);
    grad1.addColorStop(0, 'rgba(56, 189, 248, 0.16)');
    grad1.addColorStop(0.5, 'rgba(30, 58, 138, 0.08)');
    grad1.addColorStop(1, 'rgba(9, 9, 11, 0)');
    ctx.fillStyle = grad1;
    ctx.fillRect(0, 0, width, height);

    // Aurora blob 2 - Indigo/Violet
    const x2 = width * 0.65 + Math.cos(time * 0.8) * (width * 0.2);
    const y2 = height * 0.35 + Math.sin(time * 0.6) * (height * 0.12);
    const rad2 = Math.max(width, height) * 0.5;
    const grad2 = ctx.createRadialGradient(x2, y2, 0, x2, y2, rad2);
    grad2.addColorStop(0, 'rgba(99, 102, 241, 0.14)');
    grad2.addColorStop(0.5, 'rgba(15, 23, 42, 0.06)');
    grad2.addColorStop(1, 'rgba(9, 9, 11, 0)');
    ctx.fillStyle = grad2;
    ctx.fillRect(0, 0, width, height);

    // Aurora blob 3 - Emerald/Teal hint at bottom
    const x3 = width * 0.5 + Math.sin(time * 0.5) * (width * 0.25);
    const y3 = height * 0.65 + Math.cos(time * 0.7) * (height * 0.15);
    const rad3 = Math.max(width, height) * 0.4;
    const grad3 = ctx.createRadialGradient(x3, y3, 0, x3, y3, rad3);
    grad3.addColorStop(0, 'rgba(16, 185, 129, 0.08)');
    grad3.addColorStop(0.5, 'rgba(15, 23, 42, 0.04)');
    grad3.addColorStop(1, 'rgba(9, 9, 11, 0)');
    ctx.fillStyle = grad3;
    ctx.fillRect(0, 0, width, height);

    requestAnimationFrame(render);
  }

  render();
}
