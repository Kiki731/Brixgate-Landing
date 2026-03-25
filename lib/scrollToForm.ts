export const scrollToForm = () => {
  const el = document.getElementById("waitlist-form");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
