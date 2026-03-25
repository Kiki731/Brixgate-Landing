const easedScrollTo = (targetY: number, duration = 900) => {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime: number | null = null;

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

export const scrollToForm = () => {
  const el = document.getElementById("waitlist-form");
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    easedScrollTo(top);
  }
};

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    easedScrollTo(top);
  }
};
