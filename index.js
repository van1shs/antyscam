<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Regulamin | Anty Scam</title>
    <style>
        :root {
            --bg-color: #0f0f0f;
            --container-bg: #1a1a1a;
            --primary-red: #ff3b3b;
            --text-main: #ffffff;
            --text-secondary: #b3b3b3;
        }

        body {
            font-family: 'Inter', 'Segoe UI', Roboto, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-main);
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden; /* Blokuje skrolowanie całej strony */
        }

        .panel {
            background-color: var(--container-bg);
            width: 90%;
            max-width: 600px;
            border-radius: 15px;
            border: 1px solid #333;
            display: flex;
            flex-direction: column;
            max-height: 85vh; /* Wysokość panelu */
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .header {
            padding: 25px;
            text-align: center;
            border-bottom: 2px solid var(--primary-red);
        }

        .header h1 {
            margin: 0;
            font-size: 1.8rem;
            letter-spacing: 1px;
            color: var(--primary-red);
            text-transform: uppercase;
        }

        /* OKNO ZE SCROLLEM */
        .content {
            padding: 25px;
            overflow-y: auto; /* Włącza skrolowanie pionowe */
            flex-grow: 1;
            background: linear-gradient(180deg, #1a1a1a 0%, #161616 100%);
        }

        /* STYLIZACJA PASKA PRZEWIJANIA (SCROLLBAR) */
        .content::-webkit-scrollbar {
            width: 6px;
        }
        .content::-webkit-scrollbar-track {
            background: #111;
        }
        .content::-webkit-scrollbar-thumb {
            background: var(--primary-red);
            border-radius: 10px;
        }

        .section {
            margin-bottom: 25px;
        }

        .section h2 {
            color: var(--primary-red);
            font-size: 1.1rem;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
        }

        .section p, .section li {
            color: var(--text-secondary);
            line-height: 1.6;
            font-size: 0.95rem;
        }

        ul {
            padding-left: 20px;
            margin: 0;
        }

        li {
            margin-bottom: 8px;
        }

        .footer {
            padding: 15px;
            text-align: center;
            font-size: 0.8rem;
            color: #555;
            border-top: 1px solid #222;
        }
    </style>
</head>
<body>

    <div class="panel">
        <div class="header">
            <h1>Regulamin Serwera</h1>
        </div>

        <div class="content">
            <div class="section">
                <h2>§1. Wstęp</h2>
                <p>Dołączając na serwer akceptujesz wszystkie poniższe zasady. Nieznajomość regulaminu nie zwalnia z odpowiedzialności.</p>
            </div>

            <div class="section">
                <h2>§2. Kultura osobista</h2>
                <ul>
                    <li>Szanuj innych użytkowników oraz administrację.</li>
                    <li>Zakaz wyzywania, nękania i toksycznego zachowania.</li>
                    <li>Zakaz szerzenia nienawiści, rasizmu i homofobii.</li>
                    <li>Dbaj o czystość czatu, nie nadużywaj Caps Locka.</li>
                </ul>
            </div>

            <div class="section">
                <h2>§3. Bezpieczeństwo i Scam</h2>
                <ul>
                    <li>Surowy zakaz wysyłania linków typu SCAM/Phishing.</li>
                    <li>Zakaz reklamowania innych serwerów bez zgody.</li>
                    <li>Nie podawaj swoich danych osobowych nikomu na serwerze.</li>
                    <li>Zgłaszaj wszelkie podejrzane osoby do administracji.</li>
                </ul>
            </div>

            <div class="section">
                <h2>§4. Treści zakazane</h2>
                <p>Zabrania się wysyłania treści NSFW (pornografii), treści drastycznych (gore) oraz materiałów łamiących prawo RP.</p>
            </div>

            <div class="section">
                <h2>§5. Kary</h2>
                <p>Administracja ma prawo do nadania kary (Warn, Mute, Kick, Ban) w zależności od stopnia przewinienia, nawet jeśli dany czyn nie jest dokładnie opisany w regulaminie.</p>
            </div>

            </div>

        <div class="footer">
            &copy; Anty Scam Team | Weryfikacja
        </div>
    </div>

</body>
</html>
