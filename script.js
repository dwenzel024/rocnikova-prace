/* ==========================================================================
   GEOMETRY DASH COMPARING SCRIPT - DAVID WENZEL EDITION
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // Tvoje reálné šílené statistiky
    const myStats = {
        stars: 50472,
        secretCoins: 164, // Maximální počet ve hře
        userCoins: 5470,
        demons: 2240
    };

    const compareBtn = document.getElementById("compare-btn");
    const resultBox = document.getElementById("compare-result");

    compareBtn.addEventListener("click", () => {
        
        const userStars = parseInt(document.getElementById("user-stars").value) || 0;
        const userSecretCoins = parseInt(document.getElementById("user-secret-coins").value) || 0;
        const userUserCoins = parseInt(document.getElementById("user-user-coins").value) || 0;
        const userDemons = parseInt(document.getElementById("user-demons").value) || 0;

        let myPoints = 0;
        let userPoints = 0;
        let ties = 0;

        let htmlResult = "<h3>Výsledek porovnání:</h3><br>";

        // --- KATEGORIE 1: STARS ---
        if (userStars > myStats.stars) {
            htmlResult += `<p>⭐ <strong>Stars:</strong> Cože?! Máš o ${userStars - myStats.stars} hvězd víc než já? Ty u toho snad nespíš!</p>`;
            userPoints++;
        } else if (userStars < myStats.stars) {
            htmlResult += `<p>⭐ <strong>Stars:</strong> Moje vedení! Mám o ${myStats.stars - userStars} hvězd víc. Chce to víc grindu.</p>`;
            myPoints++;
        } else {
            htmlResult += `<p>⭐ <strong>Stars:</strong> Cože?! Naprostá remíza na chlup stejně!</p>`;
            ties++;
        }

        // --- KATEGORIE 2: SECRET COINS ---
        if (userSecretCoins > myStats.secretCoins) {
            htmlResult += `<p>🪙 <strong>Secret Coins:</strong> Hackuješ? Mám maximum (164) a ty tvrdíš, že máš o ${userSecretCoins - myStats.secretCoins} víc? 🤔</p>`;
            userPoints++;
        } else if (userSecretCoins < myStats.secretCoins) {
            if (myStats.secretCoins === 164 && userSecretCoins === 163) {
                htmlResult += `<p>🪙 <strong>Secret Coins:</strong> Těsně! Chybí ti poslední mince do mého maxima (164).</p>`;
            } else {
                htmlResult += `<p>🪙 <strong>Secret Coins:</strong> Mám herní maximum (164). Tobě jich do mě chybí ještě ${myStats.secretCoins - userSecretCoins}.</p>`;
            }
            myPoints++;
        } else {
            htmlResult += `<p>🪙 <strong>Secret Coins:</strong> Máš taky plný počet 164! Všechny secret cesty zdolány. 🤝</p>`;
            ties++;
        }

        // --- KATEGORIE 3: USER COINS ---
        if (userUserCoins > myStats.userCoins) {
            htmlResult += `<p>🌟 <strong>User Coins:</strong> Respekt, prohledáváš custom mapy víc než já (+${userUserCoins - myStats.userCoins}).</p>`;
            userPoints++;
        } else if (userUserCoins < myStats.userCoins) {
            htmlResult += `<p>🌟 <strong>User Coins:</strong> Tady vedu. V online mapách jsem posbíral o ${myStats.userCoins - userUserCoins} stříbrných mincí víc.</p>`;
            myPoints++;
        } else {
            htmlResult += `<p>🌟 <strong>User Coins:</strong> Neuvěřitelné, máme naprosto shodně!</p>`;
            ties++;
        }

        // --- KATEGORIE 4: DEMONS ---
        if (userDemons > myStats.demons) {
            htmlResult += `<p>👹 <strong>Demons:</strong> Smekám klobouk. Porazit přes 2240 demonů a mít ještě o ${userDemons - myStats.demons} víc je neskutečný extrém.</p>`;
            userPoints++;
        } else if (userDemons < myStats.demons) {
            htmlResult += `<p>👹 <strong>Demons:</strong> Tady tě drtím. Mám dokončených o ${myStats.demons - userDemons} demonů víc (včetně Bloodlustu!).</p>`;
            myPoints++;
        } else {
            htmlResult += `<p>👹 <strong>Demons:</strong> Máme úplně stejný počet pokořených demonů! Slušná náhoda.</p>`;
            ties++;
        }

        // --- FINÁLNÍ ZHODNOCENÍ ---
        htmlResult += "<br><hr style='border: 1px solid var(--barva-fialova); margin: 15px 0;'><br>";

        if (userPoints > myPoints) {
            htmlResult += `<p style="color: var(--hlavni-neon); font-weight: bold; font-size: 1.1rem;">Celkově vyhráváš ${userPoints}:${myPoints}! Porazit mě v mých statistikách je herní hřích. Skvělá práce! 👑</p>`;
        } else if (myPoints > userPoints) {
            htmlResult += `<p style="color: var(--barva-oranova); font-weight: bold; font-size: 1.1rem;">Celkově vedu ${myPoints}:${userPoints}! Moje statistiky z let grindování tě poslaly k zemi. 🎯</p>`;
        } else {
            htmlResult += `<p style="color: #ffffff; font-weight: bold; font-size: 1.1rem;">Je to remíza ${myPoints}:${userPoints}! Našli jsme stejného maniaka, jako jsem já. 🤝</p>`;
        }

        // Zobrazíme boxík a plynule odrolujeme
        resultBox.classList.remove("hidden");
        resultBox.innerHTML = htmlResult;
        resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});