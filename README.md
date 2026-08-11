# Westlaan 181

Statische verkooppagina voor de woning aan Westlaan 181 in Roeselare.

## Lokaal bekijken

Open `index.html` rechtstreeks in een browser. Er is geen buildstap of pakketinstallatie nodig.

## Inhoud aanpassen

- Pas het telefoonnummer en e-mailadres aan in `index.html`.
- Zet bijkomende foto's in de map `img/` en voeg ze in `index.html` toe aan het juiste niveau (`.gallery-level`), binnen een `.gallery-grid`. Genereer ook een kleine JPG met dezelfde bestandsnaam in `_thumbs/` (max. 400px breed) — de galerij toont die thumbnail meteen en laadt pas de volledige foto uit `img/` (via `data-full`) zodra iemand erop klikt.
- Het contactformulier is een demo. Koppel voor publicatie een dienst zoals Formspree, Basin of Web3Forms, of gebruik een eigen backend.

## Publiceren via GitHub Pages

1. Maak een nieuwe GitHub-repository en push deze map naar de standaardbranch.
2. Open op GitHub **Settings > Pages**.
3. Kies bij **Build and deployment** voor **Deploy from a branch**.
4. Selecteer de standaardbranch en de map `/ (root)`.
5. De pagina verschijnt daarna op `https://<gebruikersnaam>.github.io/<repository>/`.

GitHub Pages is gratis voor publieke repositories. Controleer de actuele GitHub-limieten en voorwaarden wanneer de site wordt gepubliceerd.

## Later een `.be`-domein gebruiken

Reserveer het domein bij een Belgische registrar. Voeg het daarna in GitHub toe onder **Settings > Pages > Custom domain**. De registrar moet vervolgens naar GitHub Pages verwijzen:

- Gebruik voor `www` een CNAME-record naar `<gebruikersnaam>.github.io`.
- Gebruik voor het hoofddomein de A/AAAA-records die GitHub op dat moment documenteert.
- Activeer **Enforce HTTPS** zodra GitHub het certificaat heeft uitgegeven.

Voeg pas na registratie een bestand `CNAME` toe met uitsluitend de gekozen domeinnaam. Zo blijft de mock-up nu onafhankelijk van een nog niet gereserveerd domein.