/**
 * Organic Mounds — Top-Down Wireframe Grid
 *
 * Each mound is a 2D Gaussian bump at an irregular position.
 * Grid points are displaced RADIALLY toward each mound's center,
 * proportional to that mound's height contribution at that point.
 *
 * From above, this creates concentric convergence zones around each peak —
 * like looking straight down at rolling hills. The peak reads as a point,
 * not a ridge, because displacement pulls from all directions symmetrically.
 *
 * - 10 mounds at hand-picked irregular positions (no grid, no symmetry)
 * - Variable mound sizes and amplitudes for organic feel
 * - Per-mound displacement capped at 55% of distance to that mound (no crossings)
 * - Opacity: peaks 84%, flat ground 1%, norm^3.5 curve
 */
export function initBackgroundGrid() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  const SPACING    = 30;   // grid resolution (px)
  const RADIAL_AMP = 95;   // max radial pull per mound (px)

  /**
   * Mound definitions in normalised viewport coords.
   * [x, y, σ_fraction_of_diagonal, amplitude]
   * Positions chosen to avoid any obvious grid or symmetry.
   */
  const MOUND_DEFS = [
    [0.07, 0.13, 0.14, 0.90],
    [0.43, 0.27, 0.19, 1.00],
    [0.81, 0.08, 0.13, 0.84],
    [0.17, 0.66, 0.17, 0.93],
    [0.64, 0.57, 0.22, 0.97],
    [0.31, 0.88, 0.15, 0.87],
    [0.89, 0.79, 0.16, 0.91],
    [0.94, 0.39, 0.12, 0.80],
    [0.57, 0.16, 0.14, 0.88],
    [0.22, 0.43, 0.18, 0.86],
  ];

  // Pixel-space mound data, recomputed on resize
  let mounds = [];

  function buildMounds(W, H) {
    const D = Math.hypot(W, H);
    mounds = MOUND_DEFS.map(([nx, ny, nσ, a]) => ({
      cx:    nx * W,
      cy:    ny * H,
      sigma: nσ * D,
      sigma2: (nσ * D) ** 2,
      a,
    }));
  }

  /**
   * Projects a flat grid point (gx, gy) by summing radial pulls from all mounds.
   *
   * For each mound i:
   *   - Gaussian height:  zi = aᵢ · exp(−r²ᵢ / (2σ²ᵢ))
   *   - Raw pull:         rawDisp = zi · RADIAL_AMP
   *   - Safe pull:        safeDisp = min(rawDisp, 0.55 · rᵢ)   [no line crossings]
   *   - Direction:        unit vector from (gx,gy) toward mound centre
   *
   * Total height z = Σ zi, clamped to [0,1] for opacity mapping.
   */
  function project(gx, gy) {
    let totalZ = 0;
    let dispX  = 0;
    let dispY  = 0;

    for (const m of mounds) {
      const dx  = gx - m.cx;
      const dy  = gy - m.cy;
      const r2  = dx * dx + dy * dy;
      const r   = Math.sqrt(r2);
      const zi  = m.a * Math.exp(-r2 / (2 * m.sigma2));

      totalZ += zi;

      if (r > 1.0) {
        const rawDisp  = zi * RADIAL_AMP;
        const safeDisp = Math.min(rawDisp, r * 0.55);
        const invR     = 1.0 / r;
        dispX -= dx * invR * safeDisp;  // pull toward center (negate outward direction)
        dispY -= dy * invR * safeDisp;
      }
    }

    return {
      x: gx + dispX,
      y: gy + dispY,
      z: Math.min(1.0, totalZ),
    };
  }

  /** Opacity: peaks near-white, flat near-invisible, sharp norm^3.5 */
  function heightToOpacity(z, sx, sy, W, H) {
    const base = 0.010 + 0.83 * Math.pow(z, 3.5);

    // Gentle vignette toward edges
    const ndx = (sx - W * 0.5) / (W * 0.6);
    const ndy = (sy - H * 0.5) / (H * 0.6);
    const v = Math.max(0.28, 1.0 - Math.min(0.72, Math.sqrt(ndx*ndx + ndy*ndy) * 0.65));

    return Math.max(0.010, base * v);
  }

  function drawGrid() {
    const W = window.innerWidth;
    const H = window.innerHeight;
    ctx.clearRect(0, 0, W, H);
    ctx.lineWidth = 0.85;

    const buffer = RADIAL_AMP + SPACING * 2;
    const cols   = Math.ceil((W + buffer * 2) / SPACING);
    const rows   = Math.ceil((H + buffer * 2) / SPACING);

    // Pre-project all grid points
    const pts = [];
    for (let r = 0; r <= rows; r++) {
      pts[r] = [];
      const gy = r * SPACING - buffer;
      for (let c = 0; c <= cols; c++) {
        pts[r][c] = project(c * SPACING - buffer, gy);
      }
    }

    const M = 40;

    /**
     * Quadratic Bézier midpoint method for smooth curves.
     * Arc from midpoint(prev,curr) → through curr → to midpoint(curr,next).
     * Each arc is stroked individually so opacity tracks local mound height.
     */

    // Horizontal arcs
    for (let r = 0; r <= rows; r++) {
      const row = pts[r];
      for (let c = 0; c < cols - 1; c++) {
        const prev = row[c], curr = row[c + 1], next = row[c + 2];
        if (!next) continue;

        const x1 = (prev.x + curr.x) * 0.5, y1 = (prev.y + curr.y) * 0.5;
        const x2 = (curr.x + next.x) * 0.5, y2 = (curr.y + next.y) * 0.5;

        const mnX = Math.min(x1, curr.x, x2), mxX = Math.max(x1, curr.x, x2);
        const mnY = Math.min(y1, curr.y, y2), mxY = Math.max(y1, curr.y, y2);
        if (mxX < -M || mnX > W+M || mxY < -M || mnY > H+M) continue;

        const op = heightToOpacity(curr.z, curr.x, curr.y, W, H);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(curr.x, curr.y, x2, y2);
        ctx.strokeStyle = `rgba(203,213,225,${op.toFixed(4)})`;
        ctx.stroke();
      }
    }

    // Vertical arcs
    for (let c = 0; c <= cols; c++) {
      for (let r = 0; r < rows - 1; r++) {
        const prev = pts[r][c], curr = pts[r+1][c], next = pts[r+2][c];
        if (!next) continue;

        const x1 = (prev.x + curr.x) * 0.5, y1 = (prev.y + curr.y) * 0.5;
        const x2 = (curr.x + next.x) * 0.5, y2 = (curr.y + next.y) * 0.5;

        const mnX = Math.min(x1, curr.x, x2), mxX = Math.max(x1, curr.x, x2);
        const mnY = Math.min(y1, curr.y, y2), mxY = Math.max(y1, curr.y, y2);
        if (mxX < -M || mnX > W+M || mxY < -M || mnY > H+M) continue;

        const op = heightToOpacity(curr.z, curr.x, curr.y, W, H);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(curr.x, curr.y, x2, y2);
        ctx.strokeStyle = `rgba(203,213,225,${op.toFixed(4)})`;
        ctx.stroke();
      }
    }
  }

  function resize() {
    const W   = window.innerWidth;
    const H   = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);
    buildMounds(W, H);
    drawGrid();
  }

  window.addEventListener('resize', resize);
  resize();
}
