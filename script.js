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
