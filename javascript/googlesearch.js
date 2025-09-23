// Open Google search in new tab for a person
function openGoogleSearch(name) {
  const url = `https://www.google.com/search?q=${encodeURIComponent(name)}`;
  window.open(url, '_blank');
}