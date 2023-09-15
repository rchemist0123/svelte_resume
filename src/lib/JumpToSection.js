// https://svelte.dev/repl/e073dc93fb3347848062a531271e497f?version=3.24.0
export function scrollIntoView({ target }) {
  let href = target.getAttribute('href');
  const el = document.querySelector(href);
  if (!el) return;
  el.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
}