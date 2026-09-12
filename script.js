/* Import tailwind CSS
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
});
*/

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 125) {
    nav.classList.add(
      "py-2",
      "text-sm",
      "shadow-lg",
      "bg-gray-900/70",
      "backdrop-blur"
    );
    nav.classList.remove("py-4", "bg-gray-800");
  } else {
    nav.classList.remove(
      "py-2",
      "text-sm",
      "shadow-lg",
      "bg-gray-900/70",
      "backdrop-blur"
    );
    nav.classList.add("py-4", "bg-gray-800");
  }
});

/* Name spotlight effect */
document.addEventListener("mousemove", (e) => {
  const title = document.getElementById("spotlight-title");
  const rect = title.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  title.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, 0.25), transparent 15%)`;
});
