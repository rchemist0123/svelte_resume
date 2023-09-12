// https://svelte.dev/repl/e073dc93fb3347848062a531271e497f?version=3.24.0
export function scrollIntoView({ target }) {
  const el = document.querySelector(target.getAttribute('href'));
  if (!el) return;
  el.scrollIntoView({
    behavior: 'smooth'
  });
}