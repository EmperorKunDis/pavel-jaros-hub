1. Grafický vizuální koncept (UI/UX)Představ si obrazovku rozdělenou na dynamické bloky. Není to jen nudné menu, je to interaktivní portál.Hlavní rozložení: Obrazovka je rozdělena do mřížky (Grid). Každá ze 4 divizí (Reality, Design, Reko, Správa) má svou "kartu".Barvy: Striktní černobílá (Monochrome) s jemnými odstíny šedé pro hloubku. Akcentní barva se objeví pouze při interakci (např. zlatá/béžová linka při hoveru).Typografie: Velké, tučné nadpisy (Sans-serif) pro názvy divizí, které se prolínají s pozadím.Pozadí: Na pozadí každé karty je vysoce kvalitní, tmavý/tlumený obrázek nebo video smyčka (např. pomalý průlet interiérem pro Design, dronový záběr pro Reality).Vygeneroval jsem pro tebe vizualizaci, jak by taková "Home Page" Hubu mohla vypadat:I apologize, I encountered a temporary issue generating the visual mockup directly. However, I can describe the design concept in detail and provide a wireframe diagram to help visualize the layout and functionality.2. Architektura a Funkcionalita Hubu (PJ Group Hub)Tvůj Hub nebude jen "rozcestník", ale inteligentní vstupní brána. Zde je rozpis klíčových funkcí:A. Hlavní sekce (The Grid)Obrazovka bude rozdělena do Bento Gridu (moderní mřížkové rozložení, viz Apple nebo Microsoft design). Každá buňka reprezentuje jednu z tvých 4 divizí:PJ Reality: Velká karta (např. 2x2) s videem na pozadí (dronový průlet nemovitostí).PJ Design: Menší karta (např. 1x2) s galerií interiérů, která se automaticky posouvá.PJ Rekonstrukce: Karta (1x1) s efektem "Před a Po" (slider při hoveru).PJ Správa: Karta (1x1) s minimalistickou ikonou/grafem a textem "Váš klid".Interakce:Hover Effect: Když najedeš myší na kartu, ostatní se mírně ztmaví a aktivní karta se "nafoukne" (scale up) a zobrazí detailní popis + tlačítko "Vstoupit".Custom Cursor: Kurzor myši se změní na kruh s textem "Prozkoumat" (Explore) při najetí na aktivní zóny.B. Inteligentní FunkceGlobální Vyhledávání (Super Search):Uprostřed nahoře bude minimalistická lupa.Když uživatel napíše "byt Praha", Hub prohledá databázi PJ Reality.Když napíše "návrh kuchyně", Hub ho navede na PJ Design.Jazyková Mutace (i18n):Jelikož máš v projektu složky i18n (cs, en, de, ru...), Hub automaticky detekuje jazyk prohlížeče a přesměruje uživatele na správnou jazykovou verzi podwebu.Jednotný Kontaktní Formulář:"Rychlá poptávka" – plovoucí tlačítko vpravo dole. Otevře modální okno, kde si uživatel vybere, co potřebuje (prodat, navrhnout, rekonstruovat), a zpráva se odešle správnému oddělení.3. Wireframe a Tok Dat (Mermaid Diagram)Zde je technický nákres, jak bude Hub fungovat jako "orchestrátor" mezi tvými službami:Fragment kódugraph TD
    User((Uživatel)) -->|Přístup| HUB[PJ Group HUB<br/>Next.js + Framer Motion]
    
    subgraph "Frontend Layer (Interaktivní UI)"
        HUB -->|Volba: Koupě/Prodej| RealityCard[Karta: PJ Reality]
        HUB -->|Volba: Interiér| DesignCard[Karta: PJ Design]
        HUB -->|Volba: Stavba| RekoCard[Karta: PJ Rekonstrukce]
        HUB -->|Volba: Péče| SpravaCard[Karta: PJ Správa]
    end

    subgraph "Logic & Routing Layer"
        RealityCard -->|Click| RedirectReality[pavel-jaros-reality<br/>(Subdoména /reality)]
        DesignCard -->|Click| RedirectDesign[pavel-jaros-design<br/>(Subdoména /design)]
        RekoCard -->|Click| RedirectReko[pavel-jaros-rekonstrukce<br/>(Subdoména /reko)]
        SpravaCard -->|Click| RedirectSprava[pavel-jaros-sprava<br/>(Subdoména /sprava)]
    end

    subgraph "Shared Services"
        Search[Global Search API]
        Contact[Unified Contact Form]
    end

    HUB -.-> Search
    HUB -.-> Contact
4. Návrh obsahu pro Bento Grid (Konkrétní texty a vizuály)SekceHlavní text (H1)Subtext (Hover)Vizualizace (Pozadí)AkceRealityPremium Real Estate"Exkluzivní nemovitosti v Praze a okolí."Video: Zpomalený záběr na moderní vilu (černobílý filtr).Zjistit více ->DesignInterior Architecture"Nadčasový design a smysl pro detail."Obrázek: Minimalistický interiér (Beton, Dřevo).Prohlédnout portfolio ->RekoConstruction & Reconstruction"Realizace staveb od A do Z."Animace: Lineární nákres (blueprint), který se mění v reálnou fotku.Naše realizace ->SprávaProperty Management"Správa a údržba vašich investic."Grafika: Abstraktní 3D tvar (klíč nebo budova).Služby správy ->Co budeš potřebovat pro implementaci?Aby tento "Super Moderní Hub" fungoval plynule, doporučuji použít tyto knihovny (všechny jsou kompatibilní s tvým Next.js stackem):Framer Motion: Pro plynulé animace karet a přechody stránek.Lucide React: Pro moderní, tenké ikony.Tailwind CSS: Pro styling (již máš).clsx / tailwind-merge: Pro dynamické třídy při interakcích.