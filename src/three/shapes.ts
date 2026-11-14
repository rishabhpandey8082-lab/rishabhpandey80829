/** Point-cloud targets that the GPU particle system morphs between as you scroll. */
const rnd = Math.random;
const gauss = () => (rnd() + rnd() + rnd() + rnd() - 2) / 2;

type Fill = (i: number, out: Float32Array) => void;
const build = (n: number, fill: Fill) => {
  const a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) fill(i, a.subarray(i * 3, i * 3 + 3) as unknown as Float32Array);
  return a;
};
const set = (o: Float32Array, x: number, y: number, z: number) => { o[0] = x; o[1] = y; o[2] = z; };

/** 0 · Hero: glowing sphere wrapped by three tilted orbit rings */
export const coreShape = (n: number) =>
  build(n, (i, o) => {
    if (i % 100 < 60) {
      const u = rnd() * 2 - 1, th = rnd() * Math.PI * 2, s = Math.sqrt(1 - u * u), r = 2.4 * (0.96 + rnd() * 0.08);
      set(o, r * s * Math.cos(th), r * u, r * s * Math.sin(th));
    } else {
      const k = i % 3, a = rnd() * Math.PI * 2, r = 3.3 + k * 0.55 + gauss() * 0.04;
      let x = r * Math.cos(a), y = r * Math.sin(a), z = gauss() * 0.05;
      const tx = [0.5, 1.25, -0.85][k];
      const y1 = y * Math.cos(tx) - z * Math.sin(tx), z1 = y * Math.sin(tx) + z * Math.cos(tx);
      const ty = k * 1.1;
      const x2 = x * Math.cos(ty) + z1 * Math.sin(ty), z2 = -x * Math.sin(ty) + z1 * Math.cos(ty);
      set(o, x2, y1, z2);
    }
  });

/** 1 · About: a skyline of market columns */
export const skylineShape = (n: number) => {
  const G = 15, SP = 0.52;
  const h = (x: number, z: number) => 0.5 + 1.7 * (0.5 + 0.5 * Math.sin(x * 0.95) * Math.cos(z * 0.8)) + 1.9 * Math.exp(-(x * x + z * z) * 0.06);
  return build(n, (_i, o) => {
    const cx = (Math.floor(rnd() * G) - (G - 1) / 2) * SP, cz = (Math.floor(rnd() * G) - (G - 1) / 2) * SP;
    const ht = h(cx, cz);
    set(o, cx + (rnd() - 0.5) * 0.3, rnd() * ht - 2.2, cz + (rnd() - 0.5) * 0.3);
  });
};

/** 2 · Skills: a (2,3) torus knot */
export const knotShape = (n: number) =>
  build(n, (_i, o) => {
    const t = rnd() * Math.PI * 2, p = 2, q = 3, r = Math.cos(q * t) + 2.1;
    const x = r * Math.cos(p * t), y = r * Math.sin(p * t), z = -Math.sin(q * t) * 1.3;
    const a = rnd() * Math.PI * 2, rr = 0.34 * Math.sqrt(rnd());
    set(o, x * 1.05 + Math.cos(a) * rr, y * 1.05 + Math.sin(a) * rr, z * 1.05 + (rnd() - 0.5) * rr);
  });

/** 3 · Projects: spiral galaxy */
export const galaxyShape = (n: number) =>
  build(n, (i, o) => {
    const arm = i % 3, r = Math.pow(rnd(), 0.62) * 6.2;
    const ang = r * 0.85 + arm * 2.094 + gauss() * (0.15 + r * 0.05);
    let x = r * Math.cos(ang), z = r * Math.sin(ang), y = gauss() * 0.22 * (1.2 - r / 7);
    if (r < 0.9) y *= 3;
    const t = 0.95;
    set(o, x, y * Math.cos(t) - z * Math.sin(t), y * Math.sin(t) + z * Math.cos(t));
  });

/** 4 · Certificates: DNA double helix with rungs */
export const helixShape = (n: number) =>
  build(n, (i, o) => {
    const t = rnd() * Math.PI * 5, y = (t / (Math.PI * 5) - 0.5) * 8, R = 1.7;
    if (i % 10 < 7) {
      const s = i % 2, a = t + s * Math.PI;
      set(o, R * Math.cos(a) + gauss() * 0.08, y, R * Math.sin(a) + gauss() * 0.08);
    } else {
      const k = rnd() * 2 - 1;
      set(o, R * Math.cos(t) * k, y, R * Math.sin(t) * k);
    }
  });

/** 5 · Contact: rasterised text */
export const textShape = (n: number, text: string, width: number) => {
  const W = 1400, H = 340;
  const c = document.createElement("canvas");
  c.width = W; c.height = H;
  const g = c.getContext("2d")!;
  g.fillStyle = "#fff";
  g.font = "800 250px Sora, 'Arial Black', sans-serif";
  g.textAlign = "center"; g.textBaseline = "middle";
  g.fillText(text, W / 2, H / 2 + 8);
  const d = g.getImageData(0, 0, W, H).data;
  const pts: number[] = [];
  for (let y = 0; y < H; y += 2) for (let x = 0; x < W; x += 2) if (d[(y * W + x) * 4 + 3] > 128) pts.push(x, y);
  const s = width / W;
  if (!pts.length) return coreShape(n);
  return build(n, (_i, o) => {
    const k = Math.floor(rnd() * (pts.length / 2)) * 2;
    set(o, (pts[k] - W / 2) * s + (rnd() - 0.5) * 0.03, -(pts[k + 1] - H / 2) * s + (rnd() - 0.5) * 0.03, gauss() * 0.18);
  });
};

export const randoms = (n: number) => {
  const a = new Float32Array(n * 4);
  for (let i = 0; i < a.length; i++) a[i] = rnd();
  return a;
};
