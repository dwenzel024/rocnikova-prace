document.getElementById('compare-btn').addEventListener('click', function() {
    const myStats = {
        stars: 50472,
        secretCoins: 164,
        userCoins: 5470,
        demons: 2240
    };

    const userStars = parseInt(document.getElementById('user-stars').value) || 0;
    const userSecretCoins = parseInt(document.getElementById('user-secret-coins').value) || 0;
    const userUserCoins = parseInt(document.getElementById('user-user-coins').value) || 0;
    const userDemons = parseInt(document.getElementById('user-demons').value) || 0;

    let score = 0;
    let htmlOutput = "";

    if (userStars >= myStats.stars) {
        htmlOutput += `<div class="result-line">⭐ <strong>Stars:</strong> Máš ${userStars} (Já: ${myStats.stars}). Klobouk dolů, překonal jsi mě!</div>`;
        score++;
    } else {
        htmlOutput += `<div class="result-line">⭐ <strong>Stars:</strong> Máš ${userStars} (Já: ${myStats.stars}). Chce to ještě trochu grindu.</div>`;
    }

    if (userSecretCoins >= myStats.secretCoins) {
        htmlOutput += `<div class="result-line">🪙 <strong>Secret Coins:</strong> Máš ${userSecretCoins} (Já: ${myStats.secretCoins}). Máš plný počet, dobrá práce!</div>`;
        score++;
    } else {
        htmlOutput += `<div class="result-line">🪙 <strong>Secret Coins:</strong> Máš ${userSecretCoins} (Já: ${myStats.secretCoins}). Zkus prohledat hlavní levely lépe.</div>`;
    }

    if (userUserCoins >= myStats.userCoins) {
        htmlOutput += `<div class="result-line">✨ <strong>User Coins:</strong> Máš ${userUserCoins} (Já: ${myStats.userCoins}). Slušná porce odehraných custom map!</div>`;
        score++;
    } else {
        htmlOutput += `<div class="result-line">✨ <strong>User Coins:</strong> Máš ${userUserCoins} (Já: ${myStats.userCoins}). Online levely tě zatím moc neberou, co?</div>`;
    }

    if (userDemons >= myStats.demons) {
        htmlOutput += `<div class="result-line">👹 <strong>Demons:</strong> Máš ${userDemons} (Já: ${myStats.demons}). Ty jsi absolutní monstrum, respekt!</div>`;
        score++;
    } else {
        htmlOutput += `<div class="result-line">👹 <strong>Demons:</strong> Máš ${userDemons} (Já: ${myStats.demons}). Tady tě čeká ještě hodně utrpení.</div>`;
    }

    let finalVerdict = "";
    if (score === 4) {
        finalVerdict = "Porazil jsi mě ve všem. Ty jsi nový bůh Geometry Dash! 👑";
    } else if (score >= 2) {
        finalVerdict = "Držíš se skvěle, v něčem vedeš ty, v něčem já. Dobrý souboj! ⚔️";
    } else {
        finalVerdict = "Zatím vládnu já. Zapni hru a utíkej trénovat! 🚀";
    }

    htmlOutput += `<div class="result-summary">${finalVerdict}</div>`;

    const resultBox = document.getElementById('compare-result');
    resultBox.innerHTML = htmlOutput;
    resultBox.classList.remove('hidden');
});