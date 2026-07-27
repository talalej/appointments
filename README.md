# GitHub Pages klijent

Ovaj folder sadrzi klijentski shell za GitHub Pages.

## Sta ide na GitHub Pages

Objavite SAMO sadrzaj ovog foldera:

- index.html
- config.js

## Koraci

1. Kopirajte `config.example.js` u `config.js`.
2. U `config.js` upisite URL vaseg deployovanog Google Apps Script web app-a.
3. U GitHub repozitorijumu podesite Pages source na `gh-pages` folder (branch koji koristite za kod).

## Primer config.js

window.APP_CONFIG = {
appsScriptWebAppUrl: "https://script.google.com/macros/s/AKfycbxxxxxxx/exec"
};

## Napomena

- Server logika i podaci ostaju u Google Apps Script + Google Sheets.
- GitHub Pages ovde sluzi kao klijentski ulaz (shell) koji ucitava aplikaciju kroz iframe.
