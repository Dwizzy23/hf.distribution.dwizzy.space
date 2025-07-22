function startConversion() {
  const link = document.getElementById("link").value;
  const format = document.querySelector('input[name="format"]:checked').value;
  const status = document.getElementById("status");

  if (!link || !link.includes("youtube")) {
    status.innerText = "⚠️ Wprowadź poprawny link z YouTube!";
    return;
  }

  status.innerText = `⏳ Pobieranie ${format.toUpperCase()}...`;

  // Tu podłączysz backend (np. przez fetch do lokalnego serwera Flask)
  setTimeout(() => {
    status.innerText = `✅ Zakończono pobieranie w formacie ${format.toUpperCase()}`;
  }, 2000);
}
