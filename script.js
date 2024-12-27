
// Funktion, um eine zufällige Zahl zwischen 1 und 5 zu generieren
function getRandomStock() {
  return Math.floor(Math.random() * 5) + 1; // Zahl zwischen 1 und 5
}

document.addEventListener("DOMContentLoaded", () => {
    const sizeButtons = document.querySelectorAll(".size-btn");
    const sizeMessage = document.querySelector(".verfügbar");
    const cartButton = document.querySelector(".add-to-cart");
    const cartMessage = document.querySelector(".cart-message");
    const cartCounter = document.getElementById("cart-counter"); // Warenkorb-Zähler
		const popup = document.getElementById("cart-popup");
		const popupSize = document.getElementById("popup-product-size");
    let selectedSize = null;
    let cartCount = 0; // Initialer Warenkorb-Wert

    // Größe auswählen
    sizeButtons.forEach(button => {
        button.addEventListener("click", () => {
            sizeButtons.forEach(btn => btn.classList.remove("selected")); // Entferne vorherige Auswahl
            button.classList.add("selected"); // Füge 'selected'-Klasse zum geklickten Button hinzu
            selectedSize = button.dataset.size; // Größe aus dem Datenattribut übernehmen

            // Verfügbarkeitsanzeige aktualisieren
            const stock = getRandomStock();
            if (sizeMessage) {
                sizeMessage.textContent = `Nur noch ${stock} Stück in Größe ${selectedSize} verfügbar.`;
            }
        });
    });

    // "In den Warenkorb"-Button
    cartButton.addEventListener("click", () => {
        if (selectedSize) {
            cartCount++; // Erhöhe den Warenkorb-Zähler
            cartCounter.textContent = cartCount; // Aktualisiere die Anzeige

           
      // Aktualisiere die Details im Pop-up
            popupSize.textContent = `Größe: ${selectedSize}`;

            // Zeige das Pop-up an
            popup.style.display = "block";

            // Verstecke das Pop-up nach 3 Sekunden automatisch
            setTimeout(() => {
                popup.style.display = "none";
            }, 3000);
        } else {
            cartMessage.textContent = "Bitte wählen Sie eine Größe aus, bevor Sie das Produkt in den Warenkorb legen.";
            cartMessage.style.visibility = "visible";
            cartMessage.style.color = "red"; // Fehlermeldung in rot
        }
    });
});
