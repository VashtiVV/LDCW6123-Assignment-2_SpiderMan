// redirect to new tab for google search results
function openGoogleSearch(name) {
  const url = `https://www.google.com/search?q=${encodeURIComponent(name)}`;
  window.open(url, '_blank');
}
