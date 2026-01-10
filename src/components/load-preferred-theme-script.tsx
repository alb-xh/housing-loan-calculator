export function LoadPreferredThemeScript () {
  const code = `if (window?.matchMedia("(prefers-color-scheme: dark)").matches) document.documentElement.classList.add("dark");`;

  return(
    <script 
      id="load-preferred-theme"
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
};
