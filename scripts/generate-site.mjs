import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const domain = "https://fr-informatique.com";
const phoneDisplay = "06 30 70 30 36";
const phoneHref = "+33630703036";
const email = "fabian.measson.pro@gmail.com";
const towns = ["Beauzac", "Monistrol-sur-Loire", "Yssingeaux", "Le Puy-en-Velay", "Retournac", "Bas-en-Basset", "Sainte-Sigolène"];
const mapsSearchUrl = "https://www.google.com/maps/search/?api=1&query=FR%20Informatique%20Beauzac%2043590";
const businessId = `${domain}/#entreprise`;
const websiteId = `${domain}/#site`;
const siteDescription = "Développeur informatique indépendant à Beauzac : sites vitrines, automatisations, Excel, données et petits outils pour les entreprises de Haute-Loire.";
const lastSignificantUpdate = "2026-09-02";

const HERO_SVG_FILES = {
  website: "sites-vitrine.svg",
  hosting: "hebergement-maintenance-site.svg",
  nodes: "automatisation-n8n.svg",
  automation: "automatisation-taches-entreprise.svg",
  collection: "collecte-donnees-web.svg",
  software: "logiciel-sur-mesure-haute-loire.svg",
  bridge: "api-integration.svg",
  database: "bases-de-donnees-sql.svg",
  spreadsheet: "excel-vba-macros.svg",
  ai: "intelligence-artificielle-entreprise.svg",
  repair: "depannage-informatique-beauzac.svg"
};
const heroSvgDir = path.join(root, "new_svg_services");
const HERO_SVGS = Object.fromEntries(Object.entries(HERO_SVG_FILES).map(([key, file]) => [key, fs.readFileSync(path.join(heroSvgDir, file), "utf8").trim()]));

const services = [
  {
    slug: "creation-site-internet-haute-loire.html",
    nav: "Sites vitrines",
    icon: "bi-window",
    title: "Création de site internet sur mesure",
    meta: "Création de site internet vitrine sur mesure en Haute-Loire : Beauzac, Monistrol-sur-Loire, Yssingeaux et partout en France à distance.",
    eyebrow: "Votre entreprise visible en ligne",
    lead: "Vous n’avez pas encore de site, ou votre site actuel ne montre plus la qualité de votre travail ? Je crée un site vitrine clair, rapide et adapté à votre entreprise.",
    plainTitle: "Un site vitrine, c’est quoi ?",
    plain: "C’est un site qui présente votre entreprise, vos prestations, vos réalisations et vos coordonnées. Il aide vos futurs clients à vous trouver, à comprendre ce que vous faites et à vous contacter. Il ne sert pas à vendre directement en ligne.",
    introTitle: "Un site utile avant d’être compliqué",
    intro: [
      "Un prospect entend parler de votre entreprise puis cherche votre nom sur Google. Que trouve-t-il ? Un site vitrine permet de donner immédiatement une image professionnelle et de répondre aux premières questions : que proposez-vous, où intervenez-vous et comment vous joindre ?",
      "Chaque site est développé sur mesure, sans modèle imposé ni outil lourd à administrer. Le contenu, les couleurs et l’organisation sont adaptés à votre activité. Je peux aussi prendre en charge le nom de domaine, l’hébergement, la mise en ligne et la maintenance."
    ],
    examples: [
      ["Artisan", "Présenter votre savoir-faire, vos chantiers et votre zone d’intervention avec des photos faciles à consulter."],
      ["Garage", "Montrer vos prestations, vos horaires, votre adresse et permettre à un client de vous appeler rapidement."],
      ["Petite industrie", "Expliquer simplement vos capacités, vos équipements et les types de demandes que vous traitez."],
      ["Entreprise sans site", "Créer une présence professionnelle pour être trouvée lors d’une recherche locale sur Google."],
      ["Ancien site", "Remplacer une présentation vieillissante, lente ou difficile à lire sur téléphone."],
      ["Indépendant", "Présenter votre offre et rassurer vos prospects avant un premier échange."]
    ],
    deliver: ["Une présentation claire de vos services", "Un affichage adapté aux téléphones, tablettes et ordinateurs", "Les réglages utiles pour aider Google à comprendre votre activité", "Un formulaire de contact et des accès rapides au téléphone ou à l’e-mail", "La mise en ligne, le nom de domaine et l’hébergement si nécessaire", "Des connexions simples à un service extérieur lorsqu’elles apportent une vraie utilité"],
    audiences: [["Artisans et garages", "Pour montrer le travail réalisé et être contacté localement."], ["TPE et petites industries", "Pour présenter un savoir-faire à des clients ou partenaires."], ["Indépendants", "Pour disposer d’une vitrine crédible, claire et personnelle."]],
    benefits: [["bi-search", "Être trouvé", "Une présence claire sur les recherches liées à votre activité."], ["bi-patch-check", "Rassurer", "Une présentation professionnelle accessible à toute heure."], ["bi-phone", "Faciliter le contact", "Vos coordonnées et actions importantes restent évidentes."], ["bi-speedometer2", "Rester rapide", "Un site léger, agréable sur mobile comme sur ordinateur."]],
    tech: "Le site est codé sur mesure. Cela permet d’éviter les fonctions inutiles et de garder une base simple à maintenir. Je m’occupe de la partie technique : vous restez concentré sur votre métier.",
    faq: [
      ["Combien coûte la création d’un site vitrine ?", "Le prix dépend du nombre de pages, du contenu à préparer et des fonctions nécessaires. Après un premier échange gratuit, vous recevez une proposition claire adaptée au projet."],
      ["Dois-je fournir les textes et les photos ?", "Vous pouvez fournir ce que vous avez déjà. Je peux vous aider à organiser et reformuler les textes. Nous identifions ensemble les photos réellement utiles."],
      ["Le site sera-t-il visible sur téléphone ?", "Oui. Chaque site est pensé pour être lisible et simple à utiliser sur téléphone, tablette et ordinateur."],
      ["Pouvez-vous gérer le site après sa mise en ligne ?", "Oui. L’hébergement, la maintenance, les sauvegardes et les petites évolutions peuvent être pris en charge dans la durée."],
      ["Créez-vous des boutiques en ligne ?", "Non. Je me concentre sur les sites vitrines sur mesure, conçus pour présenter une activité et générer des prises de contact."]
    ],
    related: ["hebergement-maintenance-site.html", "automatisation-taches-entreprise.html", "api-integration.html"]
  },
  {
    slug: "hebergement-maintenance-site.html",
    nav: "Hébergement & maintenance",
    icon: "bi-cloud-check",
    title: "Hébergement et maintenance de site web",
    meta: "Hébergement, sauvegardes, maintenance et petites évolutions de sites vitrines pour entreprises de Haute-Loire et partout en France.",
    eyebrow: "Un site suivi après sa mise en ligne",
    lead: "Votre site doit rester accessible, rapide et à jour sans devenir une nouvelle tâche à gérer. Je peux m’occuper de son hébergement et de son suivi technique.",
    plainTitle: "Hébergement et maintenance, simplement",
    plain: "L’hébergement est l’endroit où votre site fonctionne sur internet. La maintenance consiste à le surveiller, le sauvegarder et effectuer les petites mises à jour nécessaires pour qu’il continue de bien fonctionner.",
    introTitle: "Votre site continue de vivre",
    intro: ["Mettre un site en ligne n’est que le début. Il faut renouveler son adresse, conserver des copies de sécurité et vérifier régulièrement que tout fonctionne.", "Je propose un suivi adapté aux sites vitrines que je réalise : un interlocuteur unique pour les questions techniques, les corrections et les petites évolutions de contenu."],
    examples: [["Nom de domaine", "Renouvellement et réglages de l’adresse de votre site."], ["Sauvegardes", "Copies régulières pour pouvoir remettre le site en état si nécessaire."], ["Surveillance", "Vérification de l’accès au site et de son bon fonctionnement."], ["Petites modifications", "Changer un texte, une photo, un horaire ou ajouter une prestation."], ["Sécurité", "Maintenir les éléments techniques utiles et limiter les risques courants."], ["Mise en ligne", "Préparer et publier votre nouveau site sans vous laisser seul face aux réglages."]],
    deliver: ["Hébergement adapté à un site vitrine", "Gestion ou accompagnement pour le nom de domaine", "Certificat de sécurité pour une connexion protégée", "Sauvegardes régulières", "Contrôle du bon fonctionnement", "Petites évolutions définies ensemble"],
    audiences: [["Entreprise sans compétence technique", "Vous voulez un site sans gérer les réglages de serveur."], ["Site vitrine récent", "Vous souhaitez conserver un interlocuteur après la livraison."], ["Activité qui évolue", "Vos services, photos ou horaires doivent être actualisés ponctuellement."]],
    benefits: [["bi-shield-check", "Plus serein", "Les points techniques importants sont suivis."], ["bi-person-check", "Un contact unique", "Vous savez à qui expliquer votre demande."], ["bi-cloud-arrow-down", "Des sauvegardes", "Une copie récente reste disponible en cas de problème."], ["bi-arrow-repeat", "Un site à jour", "Les petites évolutions ne restent pas bloquées."]],
    tech: "Les choix d’hébergement dépendent du trafic attendu et des fonctions du site. Je privilégie des solutions fiables, proportionnées et faciles à maintenir plutôt qu’une installation trop complexe.",
    faq: [["Puis-je vous confier un site que vous n’avez pas créé ?", "Je peux d’abord l’examiner. La reprise dépend de la façon dont il a été construit et des accès disponibles."], ["Le nom de domaine m’appartient-il ?", "Oui. Le nom de domaine doit rester sous votre contrôle. Je peux vous guider pour sa réservation et sa gestion."], ["Que comprend la maintenance ?", "Le périmètre est défini clairement : surveillance, sauvegardes et volume de petites modifications. Vous savez ce qui est inclus avant de vous engager."], ["Puis-je arrêter l’accompagnement ?", "Oui, selon les conditions prévues dans la proposition. Les accès et éléments qui vous appartiennent vous sont restitués."]],
    related: ["creation-site-internet-haute-loire.html", "api-integration.html", "depannage-informatique-beauzac.html"]
  },
  {
    slug: "automatisation-taches-entreprise.html",
    nav: "Automatisation",
    icon: "bi-arrow-repeat",
    title: "Automatisation des tâches répétitives",
    meta: "Automatisation de tâches répétitives pour TPE, artisans et PME en Haute-Loire : moins de saisie, de copier-coller et d’erreurs.",
    eyebrow: "Récupérez du temps chaque semaine",
    lead: "Vous répétez les mêmes clics, saisies ou copier-coller tous les jours ? Commençons par observer votre façon de travailler, puis automatisons seulement ce qui vous fait réellement perdre du temps.",
    plainTitle: "Automatiser, qu’est-ce que cela veut dire ?",
    plain: "C’est confier à un petit programme une suite d’actions prévisibles : lire un fichier, ranger des informations, créer un document ou envoyer une alerte. Vous gardez le contrôle, mais vous ne refaites plus chaque étape à la main.",
    introTitle: "Partir de votre quotidien, pas d’un outil",
    intro: ["Une petite tâche de dix minutes semble anodine. Répétée chaque matin ou pour chaque dossier, elle finit pourtant par prendre plusieurs heures et augmente le risque d’erreur.", "Je vous demande d’abord de me montrer la tâche telle que vous la réalisez. Nous vérifions qu’elle est assez stable pour être automatisée, puis je propose une solution simple et proportionnée."],
    examples: [["Préparer un fichier", "Importer des données, retirer les colonnes inutiles, remettre les dates au bon format puis créer un fichier propre."], ["Classer des documents", "Renommer et ranger automatiquement des factures, photos ou rapports selon des règles définies."], ["Créer des documents", "Générer des fiches, comptes rendus ou courriers à partir d’informations déjà saisies."], ["Éviter la double saisie", "Transmettre une information d’un outil vers un autre lorsqu’une connexion est possible."], ["Recevoir une alerte", "Être prévenu lorsqu’une valeur change, qu’un fichier arrive ou qu’une action reste à traiter."], ["Traiter une liste", "Appliquer la même vérification à des centaines de lignes sans les ouvrir une par une."]],
    deliver: ["Analyse de la tâche et des exceptions possibles", "Petit programme ou automatisation adapté à votre méthode", "Contrôles pour repérer les données manquantes", "Compte rendu clair de ce qui se passe automatiquement", "Test sur des cas réels avant utilisation", "Explications simples pour lancer et surveiller la solution"],
    audiences: [["Artisans", "Devis, photos, dossiers et documents à classer régulièrement."], ["Garages", "Imports, listes de références et informations à transférer."], ["TPE et PME", "Opérations administratives ou de données répétées par plusieurs personnes."]],
    benefits: [["bi-clock", "Gagner du temps", "Les étapes prévisibles sont effectuées plus vite."], ["bi-check2-circle", "Réduire les erreurs", "La même règle est appliquée à chaque traitement."], ["bi-files", "Limiter les copies", "Moins de ressaisie entre fichiers et outils."], ["bi-person-gear", "Garder la main", "Les cas inhabituels restent validés par une personne."]],
    tech: "Selon le besoin, la solution peut utiliser Excel, un script sur mesure, n8n ou une connexion entre logiciels. Ces choix viennent après l’analyse : vous n’avez pas à choisir une technologie avant d’expliquer votre problème.",
    faq: [["Comment savoir si une tâche peut être automatisée ?", "Elle doit généralement suivre des règles assez stables et utiliser des informations accessibles. Un court échange permet d’identifier ce qui est possible et les exceptions à conserver manuellement."], ["Faut-il changer tous mes outils ?", "Non. Le but est souvent de mieux utiliser vos fichiers et logiciels actuels. Un changement n’est proposé que s’il apporte un bénéfice clair."], ["Une petite automatisation est-elle rentable ?", "Souvent, si la tâche revient fréquemment. Nous pouvons estimer le temps passé aujourd’hui et le comparer au coût de la solution."], ["Que se passe-t-il si le format d’un fichier change ?", "La solution peut intégrer des contrôles et signaler un format inattendu. Une adaptation peut être nécessaire si la source change fortement."], ["Puis-je automatiser une tâche à distance ?", "Oui. Beaucoup de projets peuvent être étudiés et réalisés entièrement à distance partout en France."]],
    related: ["excel-vba-macros.html", "automatisation-n8n.html", "intelligence-artificielle-entreprise.html"]
  },
  {
    slug: "automatisation-n8n.html",
    nav: "Automatisations n8n",
    icon: "bi-diagram-3",
    title: "Automatisations n8n sur mesure",
    meta: "Création de workflows n8n : relier des outils, déplacer des informations et déclencher des actions automatiquement pour votre entreprise.",
    eyebrow: "Faire circuler l’information",
    lead: "Vous recevez une information dans un outil puis devez la recopier dans un autre ? Un scénario automatique peut parfois enchaîner ces actions à votre place.",
    plainTitle: "n8n et workflow, en mots simples",
    plain: "n8n est un outil qui permet de construire un enchaînement d’actions. Un workflow, ou scénario, peut par exemple détecter un nouveau formulaire, ranger ses informations dans un tableau puis prévenir la bonne personne.",
    introTitle: "Relier de petites étapes entre elles",
    intro: ["Les informations arrivent souvent par e-mail, formulaire, fichier ou logiciel en ligne. Lorsqu’une personne doit ensuite les transférer manuellement, le délai et les oublis augmentent.", "Je conçois des scénarios ciblés, lisibles et surveillés. Ils ne remplacent pas vos décisions : ils prennent en charge les passages répétitifs entre les étapes."],
    examples: [["Nouveau formulaire", "Ajouter automatiquement la demande à une liste puis envoyer une notification."], ["Fichier reçu", "Détecter un document, le renommer et le placer dans le bon dossier."], ["Information mise à jour", "Reporter un changement dans un autre outil lorsque les deux services l’autorisent."], ["Rappel automatique", "Prévenir qu’une échéance approche ou qu’une étape n’est pas terminée."], ["Rapport régulier", "Rassembler quelques chiffres et envoyer une synthèse à une heure prévue."], ["Document à générer", "Créer un fichier à partir d’informations validées puis le transmettre au bon endroit."]],
    deliver: ["Schéma simple du scénario avant développement", "Connexion aux outils compatibles", "Règles, filtres et contrôles adaptés", "Alertes lorsqu’une étape échoue", "Historique utile pour comprendre les traitements", "Documentation et prise en main"],
    audiences: [["Petites équipes", "Plusieurs outils simples doivent échanger quelques informations."], ["Indépendants", "Vous voulez réduire les manipulations administratives récurrentes."], ["Entreprises à distance", "Le processus utilise surtout des services en ligne et peut être étudié partout en France."]],
    benefits: [["bi-diagram-3", "Un enchaînement clair", "Chaque étape et chaque règle peuvent être expliquées."], ["bi-lightning", "Une action rapide", "Le scénario se lance lorsqu’un événement prévu arrive."], ["bi-bell", "Des alertes", "Une erreur ou un cas inhabituel peut être signalé."], ["bi-arrows-angle-contract", "Une solution ciblée", "On automatise un flux précis, sans reconstruire tout votre système."]],
    tech: "n8n peut être installé sur un hébergement adapté ou utilisé via un service géré. Les connexions dépendent des accès proposés par chaque logiciel. Si n8n n’est pas le meilleur choix, une autre solution plus simple peut être proposée.",
    faq: [["Mes logiciels peuvent-ils tous être reliés ?", "Non. Cela dépend des accès qu’ils proposent. Je vérifie ce point avant de confirmer la solution."], ["Le scénario fonctionne-t-il sans mon ordinateur ?", "Oui s’il est hébergé sur un serveur. Dans d’autres cas, il peut fonctionner sur un poste allumé. Le choix dépend du besoin."], ["Puis-je voir ce que l’automatisation a fait ?", "Oui. Un historique et des messages utiles peuvent être prévus pour suivre les traitements."], ["Que se passe-t-il en cas d’erreur ?", "Le scénario peut s’arrêter proprement, conserver les informations et envoyer une alerte. Les cas sensibles peuvent demander une validation humaine."]],
    related: ["automatisation-taches-entreprise.html", "api-integration.html", "intelligence-artificielle-entreprise.html"]
  },
  {
    slug: "collecte-donnees-web.html",
    nav: "Collecte de données web",
    icon: "bi-cloud-download",
    title: "Collecte et récupération de données",
    meta: "Collecte et scraping de données : récupérer, nettoyer et exporter automatiquement des informations publiques vers Excel, CSV ou une base de données.",
    eyebrow: "Moins de copie depuis internet",
    lead: "Vous consultez régulièrement plusieurs pages pour recopier des tarifs, références ou informations ? Dans certains cas, ces données peuvent être récupérées, nettoyées et rangées automatiquement.",
    plainTitle: "Le scraping, en mots simples",
    plain: "Le scraping désigne la récupération automatique d’informations visibles sur des pages internet. Au lieu d’ouvrir chaque page et de copier chaque ligne, un programme parcourt les pages autorisées puis prépare un fichier exploitable.",
    introTitle: "Transformer des pages en données utiles",
    intro: ["Récupérer une liste une fois peut se faire manuellement. Lorsqu’il faut recommencer chaque semaine, vérifier les changements et regrouper plusieurs sources, la tâche devient longue et sujette aux oublis.", "Je commence par vérifier la source, les règles applicables et la fréquence nécessaire. Les informations sont ensuite nettoyées, classées, dédoublonnées puis exportées dans un format utile."],
    examples: [["Suivre des tarifs", "Récupérer périodiquement des prix autorisés et repérer leurs évolutions."], ["Regrouper des références", "Rassembler des références ou caractéristiques présentes sur plusieurs pages."], ["Informations fournisseurs", "Préparer un tableau à partir de données publiques proposées par vos fournisseurs."], ["Surveiller un changement", "Être averti lorsqu’une information précise évolue sur une page."], ["Nettoyer une liste", "Uniformiser les noms, dates ou unités et supprimer les lignes en double."], ["Exporter le résultat", "Créer automatiquement un fichier Excel, CSV ou alimenter une base de données."]],
    deliver: ["Étude de la source et de la faisabilité", "Récupération ciblée des seules informations nécessaires", "Nettoyage, classement et suppression des doublons", "Contrôles pour repérer les pages incomplètes", "Export vers Excel, CSV ou une base de données", "Planification régulière si la source et les règles le permettent"],
    audiences: [["Acheteurs et artisans", "Vous comparez des références ou informations fournisseurs."], ["Petites industries", "Vous consolidez des catalogues ou caractéristiques techniques."], ["Indépendants", "Vous constituez ou mettez à jour une liste à partir de sources autorisées."]],
    benefits: [["bi-cloud-download", "Collecter plus vite", "Les pages sont parcourues sans copier chaque donnée."], ["bi-funnel", "Garder l’utile", "Seules les colonnes nécessaires sont conservées."], ["bi-intersect", "Retirer les doublons", "Les informations répétées sont repérées et traitées."], ["bi-file-earmark-spreadsheet", "Obtenir un fichier clair", "Le résultat arrive dans un format facile à exploiter."]],
    tech: "Une page internet peut changer de présentation, bloquer les accès automatiques ou proposer une méthode officielle de récupération. La solution doit donc être adaptée à la source et parfois maintenue dans le temps.",
    legal: "Toute récupération de données doit respecter les conditions d’utilisation des sites, les droits sur les contenus, les règles applicables et la réglementation sur les données personnelles. Une faisabilité technique ne signifie pas automatiquement que la collecte est autorisée.",
    faq: [["Peut-on récupérer les informations de n’importe quel site ?", "Non. Il faut tenir compte des règles du site, des droits applicables, des protections en place et de la nature des données."], ["Le résultat peut-il arriver dans Excel ?", "Oui. Un export Excel ou CSV est souvent le format le plus pratique. Une base de données peut convenir pour des volumes plus importants."], ["La collecte peut-elle se répéter automatiquement ?", "Oui lorsque la source l’autorise et reste assez stable. La fréquence doit rester raisonnable."], ["Que se passe-t-il si le site change ?", "La récupération peut nécessiter une adaptation. Des contrôles et alertes permettent de repérer rapidement un résultat inhabituel."], ["Pouvez-vous collecter des données personnelles ?", "Chaque demande doit être examinée au regard de la réglementation et du but poursuivi. Je refuse les collectes qui ne présentent pas un cadre légitime et clair."]],
    related: ["bases-de-donnees-sql.html", "excel-vba-macros.html", "automatisation-taches-entreprise.html"]
  },
  {
    slug: "logiciel-sur-mesure-haute-loire.html",
    nav: "Outils sur mesure",
    icon: "bi-tools",
    title: "Logiciels sur mesure pour TPE et artisans",
    meta: "Développement de petits logiciels et outils métier sur mesure pour artisans, TPE et PME en Haute-Loire ou à distance en France.",
    eyebrow: "Un outil adapté à votre manière de travailler",
    lead: "Vous avez une idée précise mais aucun logiciel existant ne correspond vraiment ? Un petit outil ciblé peut résoudre un problème sans devenir un projet énorme.",
    plainTitle: "Un logiciel sur mesure peut rester petit",
    plain: "Il peut s’agir d’un écran simple avec quelques boutons, conçu pour rechercher des informations, transformer des fichiers ou générer des documents. L’objectif n’est pas de remplacer toute votre gestion, mais de résoudre correctement un besoin limité.",
    introTitle: "Cibler le vrai point de blocage",
    intro: ["Un fichier Excel devient parfois trop compliqué, ou une tâche demande plusieurs outils mal adaptés. Avant de développer, nous réduisons l’idée à son usage essentiel : qui utilise l’outil, avec quelles informations et pour obtenir quel résultat ?", "Je réalise des applications raisonnables pour une entreprise individuelle : un outil interne, une interface de recherche ou un programme de traitement. Les systèmes couvrant toute une entreprise ne correspondent pas à ce positionnement."],
    examples: [["Traiter des fichiers", "Déposer plusieurs fichiers, appliquer les mêmes règles puis récupérer un résultat propre."], ["Rechercher rapidement", "Retrouver une référence ou un dossier sans parcourir de nombreux classeurs."], ["Générer un document", "Créer automatiquement une fiche ou un rapport à partir d’informations saisies."], ["Remplacer un fichier fragile", "Passer d’un tableur devenu trop complexe à une petite interface plus sûre."], ["Classer des informations", "Ajouter des catégories, filtres et contrôles adaptés à votre méthode."], ["Lancer une tâche", "Regrouper plusieurs manipulations habituelles derrière un bouton simple."]],
    deliver: ["Définition précise du besoin prioritaire", "Maquette simple avant le développement complet", "Interface pensée pour les utilisateurs réels", "Contrôles et messages compréhensibles", "Tests avec vos exemples de fichiers", "Installation, explications et corrections prévues"],
    audiences: [["Artisans", "Un outil ciblé pour les documents, chantiers ou références."], ["Petites industries", "Une interface simple autour de données ou fichiers techniques."], ["TPE et indépendants", "Une méthode particulière qu’un logiciel standard gère mal."]],
    benefits: [["bi-bullseye", "Répondre au besoin", "Pas de fonctions inutiles qui compliquent l’usage."], ["bi-person", "Rester simple", "L’interface suit le vocabulaire de votre entreprise."], ["bi-puzzle", "Évoluer par étapes", "Une petite base peut recevoir des améliorations ciblées."], ["bi-cash-coin", "Un projet proportionné", "Le périmètre est limité et expliqué avant de développer."]],
    tech: "L’outil peut fonctionner sur un ordinateur, dans un navigateur ou sur un petit serveur selon les usages. Le choix vient après l’étude des utilisateurs, des données et des sauvegardes nécessaires.",
    faq: [["Un logiciel sur mesure est-il forcément très cher ?", "Non si le besoin est bien limité. Un petit outil qui traite une tâche précise peut rester un projet raisonnable."], ["Pouvez-vous remplacer tout notre logiciel de gestion ?", "Non. Je privilégie les outils ciblés. Un système complet de gestion, de production ou de relation client demande une équipe et un cadre différents."], ["Pourra-t-on faire évoluer l’outil ?", "Oui si cela est prévu dans sa conception. Les évolutions sont ajoutées progressivement après validation de leur utilité."], ["L’outil peut-il fonctionner sur plusieurs postes ?", "C’est possible selon le contexte. Il faut alors étudier les accès simultanés, l’emplacement des données et les sauvegardes."]],
    related: ["automatisation-taches-entreprise.html", "bases-de-donnees-sql.html", "api-integration.html"]
  },
  {
    slug: "api-integration.html",
    nav: "API & intégrations",
    icon: "bi-bezier2",
    title: "Création d’API et connexion d’outils",
    meta: "Création d’API et intégration de services : faire échanger automatiquement des informations entre deux outils pour éviter la double saisie.",
    eyebrow: "Créer un pont entre deux logiciels",
    lead: "Deux outils que vous utilisez ne communiquent pas entre eux ? Il est parfois possible de créer un petit pont pour récupérer ou envoyer les informations automatiquement.",
    plainTitle: "Une API, c’est quoi ?",
    plain: "Une API peut être vue comme un guichet prévu par un logiciel pour échanger des informations avec un autre. Un programme demande une donnée selon des règles précises, puis le service répond dans un format qu’il peut comprendre.",
    introTitle: "Éviter de saisir deux fois la même chose",
    intro: ["Votre logiciel contient déjà une adresse, un statut ou une référence, mais vous devez la recopier ailleurs. Si les deux services offrent les accès nécessaires, une connexion ciblée peut supprimer cette étape.", "Je réalise de petites intégrations clairement délimitées : récupérer une information externe, transmettre une donnée validée ou fournir un accès simple à un outil sur mesure. Je n’interviens pas sur des transformations profondes de systèmes sensibles."],
    examples: [["Récupérer un statut", "Interroger un service externe puis afficher la dernière information disponible."], ["Envoyer une demande", "Transmettre automatiquement les données validées d’un formulaire à un autre outil."], ["Synchroniser une petite liste", "Mettre à jour quelques champs communs entre deux services compatibles."], ["Afficher une donnée externe", "Ajouter sur un site une information utile fournie par un service autorisé."], ["Créer un accès simple", "Permettre à votre petit outil interne de recevoir ou fournir des données clairement définies."], ["Déclencher une action", "Lancer un traitement lorsqu’un service envoie un signal prévu."]],
    deliver: ["Vérification des accès proposés par chaque outil", "Définition des seules informations à échanger", "Création ou utilisation de l’API nécessaire", "Sécurisation des clés et accès", "Gestion des erreurs et des limites du service", "Tests et explication du fonctionnement"],
    audiences: [["TPE avec plusieurs outils", "Une même information est recopiée entre services."], ["Site vitrine", "Une donnée extérieure apporte une fonction simple au projet."], ["Petit outil sur mesure", "Il doit recevoir ou transmettre quelques informations."]],
    benefits: [["bi-arrow-left-right", "Moins de double saisie", "L’information passe automatiquement lorsque c’est possible."], ["bi-shield-lock", "Des accès limités", "Seules les données nécessaires sont autorisées."], ["bi-exclamation-circle", "Des erreurs visibles", "Une réponse manquante peut être détectée et signalée."], ["bi-link-45deg", "Une connexion ciblée", "Le projet reste limité à l’échange réellement utile."]],
    tech: "Une API utilise des adresses et des règles documentées par le service. Certaines sont gratuites, d’autres payantes ou limitées. Leur disponibilité peut évoluer : ces dépendances sont identifiées avant le développement.",
    faq: [["Tous les logiciels proposent-ils une API ?", "Non. Certains ne proposent aucun accès, ou le réservent à une offre payante. La faisabilité doit être vérifiée."], ["Est-ce sécurisé ?", "Les accès peuvent être limités et conservés hors des pages publiques. Le niveau de sécurité doit correspondre à la sensibilité des informations."], ["Que se passe-t-il si un service change ?", "La connexion peut nécessiter une mise à jour. Une maintenance est recommandée pour un échange important."], ["Pouvez-vous modifier profondément notre logiciel de gestion ?", "Non. Je me concentre sur des connexions simples et maîtrisées, pas sur une refonte de systèmes centraux ou particulièrement sensibles."]],
    related: ["automatisation-n8n.html", "logiciel-sur-mesure-haute-loire.html", "creation-site-internet-haute-loire.html"]
  },
  {
    slug: "bases-de-donnees-sql.html",
    nav: "Bases de données",
    icon: "bi-database",
    title: "Bases de données et SQL en entreprise",
    meta: "Création et traitement de bases de données : regrouper, nettoyer, rechercher, importer et exporter vos informations en Haute-Loire.",
    eyebrow: "Retrouver enfin la bonne information",
    lead: "Vos clients, références ou historiques sont dispersés dans plusieurs fichiers ? Je peux vous aider à les regrouper, les nettoyer et les rendre plus faciles à rechercher.",
    plainTitle: "Une base de données, en mots simples",
    plain: "C’est un rangement organisé pour vos informations. Au lieu d’avoir plusieurs copies d’un même client ou catalogue, les données suivent une structure commune. SQL est simplement le langage utilisé pour demander rapidement les bonnes lignes.",
    introTitle: "Passer de fichiers dispersés à une information fiable",
    intro: ["Plusieurs fichiers peuvent contenir des versions différentes des mêmes données. Une recherche devient lente, les doublons se multiplient et personne ne sait quelle liste est la plus récente.", "Je peux créer une structure adaptée, importer les informations existantes, corriger les formats et préparer les recherches ou exports dont vous avez réellement besoin."],
    examples: [["Clients en double", "Repérer les fiches proches et préparer leur regroupement avec des règles prudentes."], ["Catalogue important", "Rechercher rapidement une référence parmi des milliers de lignes."], ["Historique ancien", "Uniformiser des dates, noms et catégories provenant de plusieurs années."], ["Plusieurs sources", "Rassembler des fichiers qui utilisent des colonnes ou formats différents."], ["Recherche ciblée", "Créer une vue ou un export correspondant à une question fréquente."], ["Import régulier", "Ajouter de nouvelles données avec des contrôles avant leur intégration."]],
    deliver: ["Analyse de la qualité et du volume des données", "Structure de base de données adaptée", "Import depuis Excel, CSV ou autres sources accessibles", "Nettoyage, transformation et détection de doublons", "Requêtes SQL pour rechercher et regrouper", "Exports et connexions simples lorsque cela est pertinent"],
    audiences: [["Entreprise avec plusieurs fichiers", "Les informations sont dupliquées ou difficiles à rapprocher."], ["Catalogue de références", "La recherche dans des milliers de lignes devient lente."], ["Activité avec historique", "Les anciennes données doivent être nettoyées et exploitées."]],
    benefits: [["bi-search", "Chercher plus vite", "Retrouver l’information avec des critères clairs."], ["bi-layers", "Regrouper", "Réduire la dispersion entre plusieurs listes."], ["bi-check2-square", "Améliorer la qualité", "Formats incohérents et doublons sont identifiés."], ["bi-box-arrow-up-right", "Exporter facilement", "Préparer seulement les données utiles à un besoin."]],
    tech: "SQL est utilisé en arrière-plan pour interroger la base. Vous n’avez pas besoin de l’apprendre : les recherches peuvent être intégrées dans une interface, un rapport ou un fichier exporté.",
    faq: [["Faut-il remplacer tous nos fichiers Excel ?", "Pas forcément. Excel peut rester pratique pour certaines saisies et analyses. La base devient utile lorsque le volume, les doublons ou les accès rendent les fichiers difficiles à gérer."], ["Pouvez-vous nettoyer automatiquement tous les doublons ?", "Une partie peut être repérée automatiquement, mais les cas ambigus doivent souvent être validés par une personne pour éviter de fusionner de mauvaises fiches."], ["Quelle quantité de données pouvez-vous traiter ?", "De petits fichiers comme des ensembles de plusieurs millions de lignes peuvent être étudiés. La méthode dépend du volume, de la qualité et du résultat attendu."], ["Mes données restent-elles confidentielles ?", "Le stockage et les accès sont définis selon leur sensibilité. Seules les données nécessaires au projet doivent être utilisées."]],
    related: ["excel-vba-macros.html", "collecte-donnees-web.html", "logiciel-sur-mesure-haute-loire.html"]
  },
  {
    slug: "excel-vba-macros.html",
    nav: "Excel & macros",
    icon: "bi-file-earmark-spreadsheet",
    title: "Automatiser Excel avec macros VBA",
    meta: "Automatiser Excel, créer une macro VBA, un complément ou un bouton personnalisé pour traiter vos fichiers et gagner du temps.",
    eyebrow: "Faire en un clic ce que vous répétez chaque semaine",
    lead: "Vous ouvrez le même fichier, supprimez des colonnes, classez les lignes puis créez un nouvel export ? Ces manipulations peuvent souvent être regroupées derrière un bouton.",
    plainTitle: "Macro et VBA, en mots simples",
    plain: "Une macro est une suite d’actions enregistrées dans Excel. VBA est le langage qui permet de créer des règles plus précises : vérifier une cellule, parcourir des lignes, générer un document ou afficher un bouton personnalisé.",
    introTitle: "Conserver Excel, supprimer les manipulations inutiles",
    intro: ["Excel est souple et déjà connu de nombreuses équipes. Mais un fichier qui accumule des copies, formules et opérations manuelles devient fragile et lent à utiliser.", "Je peux automatiser une étape répétitive, sécuriser certaines saisies, créer un complément réutilisable ou proposer un autre petit outil si le tableur a dépassé ses limites."],
    examples: [["Nettoyer un export", "Supprimer les colonnes inutiles, corriger les formats et trier les lignes en un clic."], ["Regrouper des fichiers", "Rassembler chaque semaine plusieurs classeurs dans un tableau unique."], ["Créer des documents", "Générer des fiches ou courriers depuis les lignes sélectionnées."], ["Importer des données", "Lire un fichier reçu et placer ses informations dans les bonnes colonnes."], ["Contrôler la saisie", "Signaler les champs manquants, doublons ou valeurs inhabituelles."], ["Ajouter un bouton", "Lancer une suite de manipulations sans modifier les formules à la main."], ["Créer un complément Excel", "Installer les mêmes fonctions personnalisées dans plusieurs fichiers."], ["Transformer des données", "Découper, rapprocher, renommer ou convertir des centaines de lignes."]],
    deliver: ["Analyse du fichier et des manipulations actuelles", "Macro VBA, bouton ou complément adapté", "Sauvegarde avant les traitements sensibles", "Messages clairs en cas de donnée incorrecte", "Test sur plusieurs fichiers réels", "Mode d’emploi court et possibilité d’évolution"],
    audiences: [["Administration", "Imports, contrôles et documents reviennent chaque semaine."], ["Artisans et garages", "Des listes, tarifs ou suivis reposent déjà sur Excel."], ["Petites industries", "Des exports techniques doivent être transformés et regroupés."]],
    benefits: [["bi-mouse", "Un seul clic", "Plusieurs étapes sont lancées dans le bon ordre."], ["bi-calculator", "Des règles constantes", "Les mêmes calculs et contrôles sont appliqués."], ["bi-file-earmark-arrow-down", "Des exports prêts", "Le fichier final est généré dans le format attendu."], ["bi-people", "Un usage partagé", "Les boutons et consignes rendent le traitement plus simple."]],
    tech: "VBA est intégré aux versions de bureau d’Excel, mais son fonctionnement peut varier selon le système et les règles de sécurité de l’entreprise. Pour certains besoins, Power Query, une formule ou un outil séparé sera plus fiable.",
    faq: [["Pouvez-vous travailler à partir de mon fichier actuel ?", "Oui. Je travaille sur une copie et j’examine d’abord sa structure, ses formules et les exemples réels."], ["La macro fonctionnera-t-elle sur tous les ordinateurs ?", "Cela dépend de la version d’Excel, du système et des règles de sécurité. Les postes concernés sont identifiés avant le développement."], ["Mes données risquent-elles d’être effacées ?", "Les traitements sensibles peuvent commencer par une copie et intégrer des contrôles. Il reste important de disposer de sauvegardes."], ["Quand faut-il quitter Excel ?", "Lorsque plusieurs personnes modifient le même fichier, que les volumes deviennent lourds ou que les règles sont trop complexes, une base de données ou un petit logiciel peut être plus adapté."], ["Pouvez-vous automatiser Excel à distance ?", "Oui. Le fichier et les exemples peuvent généralement être étudiés à distance partout en France."]],
    related: ["automatisation-taches-entreprise.html", "bases-de-donnees-sql.html", "logiciel-sur-mesure-haute-loire.html"]
  },
  {
    slug: "intelligence-artificielle-entreprise.html",
    nav: "IA en entreprise",
    icon: "bi-stars",
    title: "Intelligence artificielle en entreprise",
    meta: "Intelligence artificielle pour TPE et PME : extraire, classer, résumer et rechercher des informations dans vos documents et e-mails.",
    eyebrow: "L’IA appliquée à un besoin précis",
    lead: "Vous recevez des documents ou des e-mails difficiles à traiter avec des règles classiques ? Une intelligence artificielle peut parfois aider à lire, classer ou résumer leur contenu.",
    plainTitle: "L’intelligence artificielle, ici, à quoi sert-elle ?",
    plain: "Elle sert à traiter des contenus moins réguliers qu’un tableau : un texte libre, un document ou un message. Elle peut proposer un classement ou extraire une information, mais son résultat doit être contrôlé lorsqu’une erreur aurait des conséquences.",
    introTitle: "Une aide mesurable, pas une promesse vague",
    intro: ["L’IA n’est utile que si elle améliore une étape concrète. Nous partons donc d’exemples réels, d’un volume à traiter et du niveau de fiabilité attendu.", "Elle peut être utilisée seule dans un petit assistant ou intégrée à une automatisation plus large. Les données envoyées, leur confidentialité, le coût d’utilisation et la validation humaine sont étudiés dès le départ."],
    examples: [["Lire des documents", "Repérer un numéro, une date ou une catégorie dans des documents dont la présentation varie."], ["Classer des e-mails", "Proposer une catégorie ou une priorité à partir du contenu d’un message."], ["Résumer un texte", "Préparer une synthèse courte d’un document long pour accélérer sa lecture."], ["Aider à rédiger", "Créer un premier brouillon à partir d’informations validées, puis le faire relire."], ["Rechercher dans des documents", "Poser une question simple sur un ensemble de notices ou procédures autorisées."], ["Trier des réponses libres", "Regrouper des commentaires ou demandes par thème."], ["Extraire des informations", "Transformer certains éléments d’un texte en colonnes faciles à traiter."], ["Assistant ciblé", "Guider un utilisateur sur un besoin précis à partir de contenus maîtrisés."]],
    deliver: ["Test sur un échantillon réel avant de promettre un résultat", "Choix des informations réellement nécessaires", "Consignes adaptées à votre vocabulaire", "Intégration dans un petit outil ou une automatisation", "Contrôles et validation humaine pour les cas importants", "Suivi du coût, des erreurs et de la qualité"],
    audiences: [["Entreprise avec beaucoup de documents", "Des informations doivent être lues ou classées régulièrement."], ["Service administratif", "Des e-mails ou textes libres arrivent en volume."], ["Petite équipe", "Un assistant ciblé peut accélérer une recherche ou un premier brouillon."]],
    benefits: [["bi-file-text", "Lire plus vite", "Une première extraction ou synthèse accélère le tri."], ["bi-tags", "Mieux classer", "Des catégories peuvent être proposées automatiquement."], ["bi-search", "Retrouver un passage", "La recherche peut s’appuyer sur le sens d’une question."], ["bi-person-check", "Faire valider", "Une personne garde la décision sur les cas importants."]],
    tech: "Une IA produit une réponse probable, pas une vérité garantie. Le choix du service, la conservation des données et les règles de confidentialité doivent être adaptés aux documents traités. Les données sensibles ne sont jamais envoyées sans cadre clair.",
    faq: [["L’IA peut-elle se tromper ?", "Oui. Elle peut mal lire ou inventer une information. C’est pourquoi les résultats importants doivent être contrôlés et les limites mesurées sur vos exemples."], ["Mes documents restent-ils confidentiels ?", "Cela dépend du service choisi et de sa configuration. Nous limitons les données envoyées et examinons les conditions de traitement avant l’utilisation."], ["Faut-il entraîner une IA complète ?", "Rarement pour une petite entreprise. Une solution existante, correctement guidée et reliée à vos documents autorisés, suffit souvent pour tester un cas d’usage."], ["Quel est le coût d’utilisation ?", "Il dépend du volume de textes ou documents traités. Une estimation et des limites peuvent être mises en place."], ["Peut-on intégrer l’IA à une automatisation existante ?", "Oui. Elle peut intervenir sur une étape de lecture ou de classement, puis laisser les règles classiques poursuivre le traitement."]],
    related: ["automatisation-taches-entreprise.html", "automatisation-n8n.html", "logiciel-sur-mesure-haute-loire.html"]
  },
  {
    slug: "depannage-informatique-beauzac.html",
    nav: "Dépannage informatique",
    icon: "bi-pc-display-horizontal",
    title: "Dépannage informatique à Beauzac",
    meta: "Dépannage informatique à Beauzac et alentours : PC lent, Windows, virus, logiciels, installation, sauvegarde et assistance.",
    eyebrow: "Un service local pour vos problèmes courants",
    lead: "Ordinateur lent, problème Windows, logiciel bloqué ou doute après un message suspect ? Le dépannage reste disponible à Beauzac et dans les communes proches.",
    plainTitle: "Une aide informatique compréhensible",
    plain: "Je recherche l’origine du problème, vous explique ce qui peut être fait et vous indique les précautions utiles. Le but n’est pas de multiplier les interventions, mais de retrouver un ordinateur fiable.",
    introTitle: "Dépanner et expliquer",
    intro: ["Une panne peut bloquer le travail ou rendre l’utilisation quotidienne stressante. Je prends en charge les problèmes courants sur PC et logiciels, sur place lorsque c’est nécessaire ou à distance lorsque c’est possible.", "Cette activité locale est proposée aux petites entreprises et aux clients existants. Les demandes de création, d’automatisation et de développement restent le cœur de l’activité de FR Informatique."],
    examples: [["PC lent", "Rechercher les causes possibles, nettoyer et vérifier les éléments utiles."], ["Problème Windows", "Résoudre un blocage, une erreur de démarrage ou un réglage défectueux."], ["Virus ou message suspect", "Vérifier le poste, retirer les menaces identifiées et conseiller sur les précautions."], ["Installation", "Installer ou configurer un logiciel, une imprimante ou un équipement courant."], ["Sauvegarde", "Mettre en place une copie adaptée de vos fichiers importants."], ["Problème logiciel", "Comprendre une erreur, remettre un réglage en état ou proposer une solution de remplacement."], ["Assistance", "Vous guider à distance pour une difficulté qui ne demande pas de déplacement."], ["Conseil", "Choisir une solution adaptée sans ajouter de complexité inutile."]],
    deliver: ["Premier échange pour comprendre la panne", "Diagnostic avant les opérations importantes", "Intervention locale ou assistance à distance", "Explications simples sur les actions réalisées", "Conseils de sauvegarde et de prévention", "Orientation vers un spécialiste si le problème sort du périmètre"],
    audiences: [["Petites entreprises", "Un poste ou logiciel courant bloque votre activité."], ["Artisans et indépendants", "Vous avez besoin d’une aide locale et directe."], ["Clients existants", "Le suivi de vos équipements et problèmes courants continue."]],
    benefits: [["bi-geo-alt", "Un service local", "Intervention autour de Beauzac selon la demande."], ["bi-chat-left-text", "Des explications claires", "Vous comprenez le problème et la solution proposée."], ["bi-wifi", "Une aide à distance", "Certaines difficultés peuvent être réglées sans déplacement."], ["bi-shield-check", "De la prévention", "Sauvegardes et bonnes pratiques peuvent être mises en place."]],
    tech: "Une récupération de données n’est jamais garantie, surtout en cas de panne matérielle. Si un support semble endommagé, il est important d’éviter les essais répétés et de demander un diagnostic rapidement.",
    faq: [["Dans quelles communes intervenez-vous ?", "Principalement à Beauzac et dans un rayon d’environ 40 à 50 km selon la nature de la demande."], ["Pouvez-vous intervenir à distance ?", "Oui pour certains problèmes logiciels, réglages et conseils. Une connexion internet fonctionnelle est généralement nécessaire."], ["Dépannez-vous les Mac et les téléphones ?", "L’activité est principalement orientée vers les PC Windows et les logiciels courants. Décrivez votre équipement lors du premier contact pour vérifier le périmètre."], ["Pouvez-vous récupérer des fichiers perdus ?", "Je peux examiner la situation et tenter des solutions raisonnables, mais aucune récupération ne peut être garantie. Les pannes matérielles graves nécessitent un laboratoire spécialisé."]],
    related: ["automatisation-taches-entreprise.html", "excel-vba-macros.html", "creation-site-internet-haute-loire.html"]
  }
];

const bySlug = Object.fromEntries(services.map((service) => [service.slug, service]));

const SERVICE_LAYOUT = {
  "creation-site-internet-haute-loire.html": "A",
  "hebergement-maintenance-site.html": "B",
  "automatisation-taches-entreprise.html": "C",
  "automatisation-n8n.html": "A",
  "collecte-donnees-web.html": "B",
  "logiciel-sur-mesure-haute-loire.html": "C",
  "api-integration.html": "A",
  "bases-de-donnees-sql.html": "B",
  "excel-vba-macros.html": "C",
  "intelligence-artificielle-entreprise.html": "A",
  "depannage-informatique-beauzac.html": "B"
};

const LAYOUTS = {
  A: { order: ["lead", "examples", "deliver", "story", "audience", "benefit", "tech", "zone", "faq", "related"], dividerAfter: ["lead", "audience"], examplesVariant: "grid", benefitVariant: "grid", audienceVariant: "grid" },
  B: { order: ["story", "lead", "benefit", "examples", "deliver", "audience", "tech", "faq", "zone", "related"], dividerAfter: ["story", "audience"], examplesVariant: "rows", benefitVariant: "split", audienceVariant: "grid" },
  C: { order: ["audience", "lead", "examples", "deliver", "story", "benefit", "tech", "faq", "zone", "related"], dividerAfter: ["audience", "story"], examplesVariant: "grid", benefitVariant: "grid", audienceVariant: "split" }
};

// Certains blocs n’ont un texte lisible que sur un seul des deux fonds (clair/sombre) :
// on force donc leur fond plutôt que de les laisser alterner librement.
const FIXED_BAND = { deliver: false, tech: true, faq: true, zone: false };

function header(current = "") {
  const serviceLinks = services.map((service) => `<a href="${service.slug}"${current === service.slug ? ' aria-current="page"' : ""}>${service.nav}</a>`).join("");
  return `<a class="skip-link" href="#contenu">Aller au contenu</a>
  <div class="intro-decode" aria-hidden="true"><span class="intro-text">FR Informatique</span></div>
  <div class="progress-top" aria-hidden="true"></div>
  <aside class="signal-rail" aria-hidden="true"><svg viewBox="0 0 60 700" preserveAspectRatio="none"><path class="track" d="M30 5V185H18V355H42V525H30V695"/><path class="progress" d="M30 5V185H18V355H42V525H30V695"/><circle class="node" cx="30" cy="80" r="4"/><circle class="node" cx="18" cy="355" r="4"/><circle class="node" cx="30" cy="620" r="4"/><text class="label" x="3" y="84">BESOIN</text><text class="label" x="25" y="350">SOLUTION</text><text class="label" x="3" y="624">PROJET</text></svg></aside>
  <header class="site-header">
    <div class="header-inner">
      <a class="logo brand" href="index.html" aria-label="FR Informatique, accueil"><span class="dot" aria-hidden="true"></span><span><b>FR Informatique</b><small>Beauzac · Haute-Loire</small></span></a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Ouvrir le menu"><span></span><span></span><span></span></button>
      <nav class="site-nav" id="site-nav" aria-label="Navigation principale">
        <ul class="nav-list">
          <li><a href="index.html"${current === "index.html" ? ' aria-current="page"' : ""}>Accueil</a></li>
          <li><details class="nav-services"><summary>Services</summary><div class="nav-panel">${serviceLinks}</div></details></li>
          <li><a href="realisations.html"${current === "realisations.html" ? ' aria-current="page"' : ""}>Réalisations</a></li>
          <li><a href="a-propos.html"${current === "a-propos.html" ? ' aria-current="page"' : ""}>À propos</a></li>
          <li><a href="contact.html"${current === "contact.html" ? ' aria-current="page"' : ""}>Contact</a></li>
          <li><a class="nav-cta" href="tel:${phoneHref}">${phoneDisplay}</a></li>
        </ul>
      </nav>
    </div>
  </header>`;
}

function circuit() {
  return `<div class="hero-scope" aria-hidden="true"><svg viewBox="0 0 640 500" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-linecap="round" stroke-linejoin="round"><path class="circuit-path draw-on-scroll" d="M38 250H210V98H430V190H602" stroke="#058298" stroke-width="2"/><path class="circuit-path draw-on-scroll" d="M92 392H284V250H505V418H610" stroke="#6a35c9" stroke-width="2"/><path class="circuit-path draw-on-scroll" d="M210 98V42H340" stroke="#4fd6e6" stroke-width="1.5"/><path class="circuit-path draw-on-scroll" d="M284 250V145H365" stroke="#9d6ef0" stroke-width="1.5"/><path class="circuit-path draw-on-scroll" d="M505 418V470H590" stroke="#058298" stroke-width="1.5"/><rect x="430" y="154" width="76" height="72" rx="8" stroke="#4fd6e6" stroke-width="2"/><path d="M446 141V154M464 141V154M482 141V154M500 141V154M446 226V239M464 226V239M482 226V239M500 226V239" stroke="#4fd6e6" stroke-width="2"/></g><g fill="#9d6ef0"><circle cx="38" cy="250" r="6"/><circle cx="210" cy="98" r="6"/><circle cx="430" cy="98" r="6"/><circle cx="92" cy="392" r="6"/><circle cx="284" cy="250" r="6"/><circle cx="505" cy="418" r="6"/></g><g fill="#4fd6e6"><circle cx="340" cy="42" r="5"/><circle cx="365" cy="145" r="5"/><circle cx="590" cy="470" r="5"/></g><g class="circuit-pulses"></g></svg></div>`;
}

function themeKey(service) {
  const slug = typeof service === "string" ? service : service.slug;
  if (slug.includes("creation-site")) return "website";
  if (slug.includes("hebergement")) return "hosting";
  if (slug.includes("automatisation-n8n")) return "nodes";
  if (slug.includes("automatisation-taches")) return "automation";
  if (slug.includes("collecte")) return "collection";
  if (slug.includes("logiciel")) return "software";
  if (slug.includes("api")) return "bridge";
  if (slug.includes("bases-de-donnees")) return "database";
  if (slug.includes("excel")) return "spreadsheet";
  if (slug.includes("intelligence")) return "ai";
  return "repair";
}

function themeVisual(service, extraClass = "") {
  const key = themeKey(service);
  const idSuffix = extraClass ? `-${extraClass.replace(/[^a-z0-9-]/gi, "-")}` : "";
  const gradientId = `g-${key}${idSuffix}`;
  const glowId = `glow-${key}${idSuffix}`;
  const shapes = {
    website: `<rect x="92" y="92" width="336" height="230" rx="12"/><path d="M92 132H428M118 112h1m18 0h1m18 0h1M130 176h150M130 207h245M130 238h190"/><rect x="304" y="160" width="82" height="62" rx="5"/><path d="M178 350h164M210 322v28m100-28v28"/>`,
    hosting: `<path d="M172 180a88 88 0 0 1 168-18 64 64 0 0 1 2 128H166a56 56 0 0 1 6-110Z"/><rect x="152" y="310" width="216" height="54" rx="7"/><path d="M184 337h80m67 0h1M260 290v20M230 255l30 35 30-35"/>`,
    nodes: `<path d="M115 145 255 92l146 71-68 150-170 18Z"/><path d="m115 145 218 168M255 92l-92 239m238-168-286-18m218 168L255 92"/><circle cx="115" cy="145" r="13"/><circle cx="255" cy="92" r="13"/><circle cx="401" cy="163" r="13"/><circle cx="333" cy="313" r="13"/><circle cx="163" cy="331" r="13"/><circle cx="255" cy="211" r="18"/>`,
    automation: `<rect x="66" y="78" width="112" height="80" rx="10"/><rect x="84" y="96" width="112" height="80" rx="10"/><rect x="102" y="114" width="112" height="80" rx="10"/><path d="M228 154h32m0 0-10-10m10 10-10 10"/><circle cx="330" cy="225" r="72" stroke-dasharray="10 9"/><path d="m366 163 14 2-6 13"/><path d="M410 340h36m0 0-10-10m10 10-10 10"/><circle cx="452" cy="340" r="32"/><path d="m435 340 12 12 26-28"/>`,
    collection: `<rect x="82" y="83" width="168" height="118" rx="9"/><rect x="270" y="83" width="168" height="118" rx="9"/><path d="M103 112h105m-105 30h74m114-30h105m-105 30h70M166 201l56 72h76l56-72M222 273v76h76v-76"/><path d="M246 312h28"/>`,
    software: `<rect x="84" y="75" width="352" height="274" rx="12"/><path d="M84 119h352M111 97h1m20 0h1m20 0h1M122 167h120v134H122zM272 167h126M272 205h92M272 243h108M272 281h70"/><path d="m147 235 22 22 47-55"/>`,
    bridge: `<rect x="70" y="143" width="122" height="132" rx="12"/><rect x="328" y="143" width="122" height="132" rx="12"/><path d="M192 180h136m-136 58h136m-109-82-27 24 27 24m82 10 27 24-27 24"/><circle cx="131" cy="209" r="25"/><circle cx="389" cy="209" r="25"/>`,
    database: `<ellipse cx="260" cy="102" rx="130" ry="43"/><path d="M130 102v82c0 24 58 43 130 43s130-19 130-43v-82M130 184v82c0 24 58 43 130 43s130-19 130-43v-82M130 266v58c0 24 58 43 130 43s130-19 130-43v-58"/><path d="M338 201h90m-22-22 22 22-22 22"/>`,
    spreadsheet: `<rect x="86" y="69" width="348" height="294" rx="10"/><path d="M86 125h348M160 69v294m91-238v238m91-238v238M86 184h348M86 243h348M86 302h348"/><path d="m188 211 30 30 72-83"/><rect x="350" y="311" width="62" height="30" rx="4"/>`,
    ai: `<path d="M260 72c-52 0-91 37-91 85-38 8-61 36-61 72 0 45 35 76 79 76 14 35 40 55 73 55s59-20 73-55c44 0 79-31 79-76 0-36-23-64-61-72 0-48-39-85-91-85Z"/><path d="M260 72v288M169 157l91 52 91-52m-73 63 55 85m-91-96-55 96"/><circle cx="260" cy="72" r="8"/><circle cx="169" cy="157" r="8"/><circle cx="351" cy="157" r="8"/><circle cx="260" cy="209" r="11"/><circle cx="187" cy="305" r="8"/><circle cx="333" cy="305" r="8"/><circle cx="260" cy="360" r="8"/>`,
    repair: `<rect x="78" y="78" width="364" height="235" rx="12"/><path d="M78 261h364M207 313v43m106-43v43m-144 0h182"/><path d="M125 180h58l22-48 43 99 30-66 22 42h94"/><circle cx="394" cy="207" r="8"/>`
  };
  return `<div class="theme-visual theme-${key} ${extraClass}" aria-hidden="true"><svg viewBox="0 0 520 430" fill="none"><defs><linearGradient id="${gradientId}" x1="60" y1="40" x2="460" y2="390" gradientUnits="userSpaceOnUse"><stop stop-color="#4fd6e6"/><stop offset="1" stop-color="#9d6ef0"/></linearGradient><filter id="${glowId}" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g class="visual-grid" opacity=".18" stroke="#6c6f97"><path d="M40 50H480M40 110H480M40 170H480M40 230H480M40 290H480M40 350H480M100 30V400M180 30V400M260 30V400M340 30V400M420 30V400"/></g><g class="visual-main" stroke="url(#${gradientId})" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${shapes[key]}</g><g class="visual-orbits" fill="#4fd6e6" filter="url(#${glowId})"><circle cx="66" cy="66" r="4"/><circle cx="454" cy="364" r="4"/></g></svg></div>`;
}

function serviceStoryVisual(service) {
  const key = themeKey(service);
  return `<div class="theme-visual theme-${key} content-theme-visual" aria-hidden="true">${HERO_SVGS[key]}</div>`;
}

function serviceStory(service) {
  const stories = {
    website: ["Une activité peu visible", "Une présentation claire", "Des contacts plus simples"],
    hosting: ["Un site sans suivi", "Sauvegardes et surveillance", "Un site disponible"],
    nodes: ["Des outils séparés", "Un scénario n8n les relie", "L’information circule"],
    automation: ["Des copier-coller répétés", "Des règles font le travail", "Du temps récupéré"],
    collection: ["Des pages vérifiées une à une", "Une collecte autorisée", "Un fichier propre"],
    software: ["Une méthode mal couverte", "Un petit outil ciblé", "Une action simplifiée"],
    bridge: ["Deux outils isolés", "Un pont API contrôlé", "Moins de double saisie"],
    database: ["Des fichiers dispersés", "Les données sont regroupées", "La recherche devient rapide"],
    spreadsheet: ["Des manipulations manuelles", "Un bouton dans Excel", "Le fichier est prêt"],
    ai: ["Des documents à parcourir", "L’IA assiste le traitement", "Le résultat reste contrôlé"],
    repair: ["Un poste bloqué", "Un diagnostic méthodique", "Le travail peut reprendre"]
  };
  const steps = stories[themeKey(service)];
  return `<div class="service-story" data-reveal><div class="service-story-art">${serviceStoryVisual(service)}</div><div class="service-story-copy"><span class="eyebrow">Le principe en un coup d’œil</span><h3>Du problème quotidien à une solution facile à utiliser.</h3><p>Ce schéma ne décrit pas une technologie : il montre simplement ce qui change pour vous.</p><ol class="story-steps">${steps.map((step, index) => `<li class="story-step"><span>${String(index + 1).padStart(2, "0")}</span><strong>${step}</strong></li>`).join("")}</ol></div></div>`;
}

function signalDivider(service) {
  const key = themeKey(service);
  const paths = {
    website: "M0 24H250l22-14 34 28 28-14H760l28-14 38 28 30-14H1200",
    hosting: "M0 24H220q35-24 70 0t70 0H840q35 24 70 0t70 0h220",
    nodes: "M0 24H180L225 8l52 32 70-16h180l55-16 68 32 60-16h490",
    automation: "M0 24h210l24-18 24 36 24-18h275l24-18 24 36 24-18h571",
    collection: "M0 10h300l60 28h480l60-28h300",
    software: "M0 24h280v-13h120v26h120V24h680",
    bridge: "M0 35h310q90-45 180 0h220q90-45 180 0h310",
    database: "M0 24h260q45-25 90 0t90 0h320q45 25 90 0t90 0h260",
    spreadsheet: "M0 24h220v-14h100v28h100V24h360v-14h100v28h100V24h220",
    ai: "M0 24h300l35-18 35 36 35-18h390l35-18 35 36 35-18h300",
    repair: "M0 24h240l18-18 25 36 26-18h891"
  };
  return `<div class="signal-divider" aria-hidden="true"><svg viewBox="0 0 1200 48" preserveAspectRatio="none"><path class="draw-on-scroll" d="${paths[key]}"/><circle cx="8" cy="24" r="3"/><circle cx="1192" cy="24" r="3"/></svg></div>`;
}

function zoneVisual() {
  return `<div class="zone-visual" data-reveal><div class="zone-schematic" aria-hidden="true"><svg viewBox="0 0 520 230" fill="none"><style>.zone-sweep{transform-origin:260px 115px;animation:zoneSweep 10s linear infinite}@keyframes zoneSweep{to{transform:rotate(1turn)}}.zone-pulse{transform-box:fill-box;transform-origin:center;animation:zonePulse 3s ease-in-out infinite}@keyframes zonePulse{50%{transform:scale(1.35);opacity:.4}}</style><defs><radialGradient id="zone-glow" cx="50%" cy="50%" r="60%"><stop offset="0" stop-color="#4fd6e6" stop-opacity=".4"/><stop offset="1" stop-color="#4fd6e6" stop-opacity="0"/></radialGradient></defs><g class="zone-rings"><circle class="zone-ring" cx="260" cy="115" r="40"/><circle class="zone-ring" cx="260" cy="115" r="74"/><circle class="zone-ring" cx="260" cy="115" r="106"/></g><path class="zone-sweep" d="M260 115 260 9A106 106 0 0 1 351 46Z" fill="url(#zone-glow)" stroke="none"/><g class="zone-links"><path class="draw-on-scroll" d="M260 115 92 54M260 115 430 46M260 115 450 132M260 115 390 197M260 115 118 198M260 115 70 127"/></g><g class="zone-nodes"><circle cx="92" cy="54" r="5"/><circle cx="430" cy="46" r="5"/><circle cx="450" cy="132" r="5"/><circle cx="390" cy="197" r="5"/><circle cx="118" cy="198" r="5"/><circle cx="70" cy="127" r="5"/></g><g class="zone-home" transform="translate(260 115)"><circle class="zone-pulse" r="9"/><circle r="15" fill="none" stroke="rgba(79,214,230,.55)" stroke-width="1.4"/><path d="M-15 0h5M10 0h5M0-15v5M0 10v5" stroke="rgba(79,214,230,.55)" stroke-width="1.4"/></g></svg></div><ul class="town-list">${towns.map((town) => `<li>${town}</li>`).join("")}<li>France à distance</li></ul><a class="map-link" href="${mapsSearchUrl}" target="_blank" rel="noopener noreferrer"><i class="bi bi-map"></i> Rechercher FR Informatique sur Google Maps</a><small>Beauzac au centre : chaque anneau représente une distance de déplacement croissante.</small></div>`;
}

function zoneNote() {
  return `<p class="zone-note"><i class="bi bi-geo-alt"></i> Basé à Beauzac, j’interviens dans un rayon d’environ 40 à 50 km (${towns.slice(1).join(", ")}…) et à distance partout en France. <a class="text-link" href="index.html#zone">Voir la zone d’intervention</a></p>`;
}

function contactGuide() {
  return `<div class="contact-guide" data-reveal><svg viewBox="0 0 520 72" preserveAspectRatio="none" aria-hidden="true"><path class="draw-on-scroll" d="M18 36H502"/><circle cx="18" cy="36" r="6"/><circle cx="260" cy="36" r="6"/><circle cx="502" cy="36" r="6"/></svg><ol><li><span>01</span><strong>Vous racontez</strong><small>Une tâche, un fichier ou une idée.</small></li><li><span>02</span><strong>Je vérifie</strong><small>Ce qui est réaliste et vraiment utile.</small></li><li><span>03</span><strong>Vous décidez</strong><small>Avec un périmètre expliqué clairement.</small></li></ol></div>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div><div class="footer-brand">FR <span>INFORMATIQUE</span></div><p>Développeur indépendant à Beauzac, proche des petites entreprises de Haute-Loire. Projets réalisables à distance partout en France.</p></div>
        <div><h2>Services principaux</h2><ul>${services.slice(0, 6).map((s) => `<li><a href="${s.slug}">${s.nav}</a></li>`).join("")}</ul></div>
        <div><h2>Navigation</h2><ul><li><a href="realisations.html">Réalisations</a></li><li><a href="a-propos.html">À propos</a></li><li><a href="contact.html">Contact</a></li><li><a href="tel:${phoneHref}">${phoneDisplay}</a></li><li><a href="mailto:${email}">${email}</a></li></ul></div>
      </div>
      <div class="footer-bottom"><span>© ${new Date().getFullYear()} FR Informatique. Tous droits réservés.</span><span>Sites vitrines · Automatisations · Outils sur mesure · Dépannage local</span><span><a href="mentions-legales.html">Mentions légales</a> · <a href="politique-confidentialite.html">Confidentialité</a></span></div>
    </div>
  </footer><a class="scroll-top" href="#" aria-label="Retour en haut"><i class="bi bi-arrow-up" aria-hidden="true"></i></a>`;
}

function head({ title, description, url, schema, image = "hero-bg.webp", imageWidth = 2400, imageHeight = 1600, imageAlt = "FR Informatique, développeur indépendant à Beauzac" }) {
  const fullTitle = title.includes("FR Informatique") ? title : `${title} | FR Informatique`;
  const canonical = `${domain}/${url === "index.html" ? "" : url}`;
  const imageUrl = `${domain}/assets/img/${image}`;
  const fontsUrl = "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,400&family=Space+Grotesk:wght@400;500;600;700&display=swap";
  const iconsUrl = "assets/vendor/bootstrap-icons/bootstrap-icons.subset.css";
  return `<!doctype html><html lang="fr"><head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; connect-src 'self' https://formspree.io https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com; form-action 'self' https://formspree.io">
  <meta name="referrer" content="strict-origin-when-cross-origin">
  <title>${fullTitle}</title><meta name="description" content="${description}"><meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"><meta name="theme-color" content="#14163f"><meta name="author" content="Fabian Measson, FR Informatique">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="website"><meta property="og:locale" content="fr_FR"><meta property="og:site_name" content="FR Informatique"><meta property="og:title" content="${fullTitle}"><meta property="og:description" content="${description}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${imageUrl}"><meta property="og:image:width" content="${imageWidth}"><meta property="og:image:height" content="${imageHeight}"><meta property="og:image:alt" content="${imageAlt}">
  <meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${fullTitle}"><meta name="twitter:description" content="${description}"><meta name="twitter:image" content="${imageUrl}"><meta name="twitter:image:alt" content="${imageAlt}">
  <link rel="icon" type="image/x-icon" href="favicon.ico"><link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"><link rel="icon" type="image/png" sizes="48x48" href="favicon-48x48.png"><link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png"><link rel="manifest" href="site.webmanifest">
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="${fontsUrl}"><link rel="stylesheet" href="${fontsUrl}" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="${fontsUrl}"></noscript>
  <link rel="preload" as="style" href="${iconsUrl}"><link rel="stylesheet" href="${iconsUrl}" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="${iconsUrl}"></noscript>
  <link rel="stylesheet" href="assets/css/site.css">
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-JCKQWLBHGE"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-JCKQWLBHGE');</script>
  <meta name="google-site-verification" content="google36ba2abbe09ba6bb.html">
  <script type="application/ld+json">${JSON.stringify(schema)}</script></head>`;
}

const localBusiness = {
  "@context": "https://schema.org", "@type": "ProfessionalService", "@id": businessId, name: "FR Informatique", alternateName: "FR Informatique Beauzac", url: domain,
  description: siteDescription, slogan: "Des outils simples pour faire gagner du temps aux petites entreprises.",
  image: [`${domain}/assets/img/hero-bg.webp`, `${domain}/assets/img/profile-img.jpg`],
  logo: { "@type": "ImageObject", url: `${domain}/apple-touch-icon.png`, width: 180, height: 180 },
  founder: { "@type": "Person", name: "Fabian Measson" }, telephone: phoneHref, email,
  address: { "@type": "PostalAddress", addressLocality: "Beauzac", postalCode: "43590", addressRegion: "Haute-Loire", addressCountry: "FR" },
  geo: { "@type": "GeoCoordinates", latitude: 45.2028, longitude: 4.2075 },
  priceRange: "€€",
  areaServed: [...towns.map((name) => ({ "@type": "City", name })), { "@type": "AdministrativeArea", name: "Haute-Loire" }, { "@type": "Country", name: "France", description: "Pour les projets réalisables à distance" }],
  hasMap: mapsSearchUrl,
  contactPoint: { "@type": "ContactPoint", telephone: phoneHref, email, contactType: "customer service", availableLanguage: "French", areaServed: "FR" },
  knowsAbout: ["Création de sites vitrines", "Automatisation de tâches", "Excel et VBA", "Collecte de données", "Petits logiciels sur mesure", "Bases de données", "Intelligence artificielle en entreprise", "Dépannage informatique"],
  sameAs: ["https://www.facebook.com/FRIinformatique"]
};

const websiteSchema = {
  "@context": "https://schema.org", "@type": "WebSite", "@id": websiteId, url: `${domain}/`, name: "FR Informatique", description: siteDescription, inLanguage: "fr-FR", publisher: { "@id": businessId }
};

function contactSection() {
  return `<section class="section section-soft contact-section" id="contact"><div class="wrap contact-grid">
    <div class="contact-copy" data-reveal><span class="eyebrow">Parlons de votre besoin</span><h2>Expliquez simplement comment vous travaillez.</h2><p>Pas besoin de connaître le nom de la technologie. Décrivez la tâche, le problème ou l’idée avec vos mots. Je vous dirai franchement si une solution raisonnable semble possible.</p>${contactGuide()}<ul class="contact-list"><li><a href="tel:${phoneHref}"><i class="bi bi-telephone"></i>${phoneDisplay}</a></li><li><a href="mailto:${email}"><i class="bi bi-envelope"></i>${email}</a></li><li><a href="https://wa.me/33630703036" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp"></i>Écrire sur WhatsApp</a></li><li><a href="${mapsSearchUrl}" target="_blank" rel="noopener noreferrer"><i class="bi bi-geo-alt"></i>FR Informatique à Beauzac sur Google Maps</a></li></ul></div>
    <form class="contact-form" action="https://formspree.io/f/xeojgzyk" method="post" data-reveal><div class="form-row"><div class="field"><label for="name">Votre nom</label><input id="name" name="name" autocomplete="name" required></div><div class="field"><label for="email">Votre e-mail</label><input id="email" name="email" type="email" autocomplete="email" required></div></div><div class="field"><label for="subject">Votre entreprise ou le sujet</label><input id="subject" name="subject" required></div><div class="field"><label for="message">Que faites-vous aujourd’hui, et qu’aimeriez-vous simplifier ?</label><textarea id="message" name="message" required></textarea></div><button class="btn btn-primary btn-glow" type="submit">Envoyer ma demande <i class="bi bi-arrow-right"></i></button><p class="form-note">Réponse personnalisée. Vos coordonnées servent uniquement à vous répondre.</p><div class="form-status" aria-live="polite"></div></form>
  </div></section>`;
}

function serviceCard(service) {
  return `<a class="service-card" href="${service.slug}" data-reveal><i class="bi ${service.icon} service-card-icon" aria-hidden="true"></i><h3>${service.nav}</h3><p>${service.lead}</p><span class="text-link">Découvrir le service</span></a>`;
}

function homepage() {
  const description = "Développeur informatique indépendant en Haute-Loire : sites vitrines, automatisation, Excel, données, logiciels et IA pour TPE et artisans.";
  const schema = [websiteSchema, { ...localBusiness, description, hasOfferCatalog: { "@type": "OfferCatalog", name: "Services pour entreprises", itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.nav, url: `${domain}/${s.slug}` } })) } }];
  const primary = services.filter((s) => s.slug !== "depannage-informatique-beauzac.html");
  return `${head({ title: "Développeur informatique en Haute-Loire | FR Informatique", description, url: "index.html", schema })}<body data-page-act="0">${header("index.html")}<main id="contenu">
  <section class="hero"><div class="hero-bg"><picture><source media="(max-width:760px)" srcset="assets/img/hero-bg-mobile.webp"><img src="assets/img/hero-bg.webp" width="1920" height="1280" alt="" fetchpriority="high"></picture></div><div class="wrap hero-grid"><div class="hero-content"><span class="eyebrow typewriter">Développeur indépendant · Beauzac, Haute-Loire</span><h1>Des outils simples pour faire gagner du temps à votre entreprise.</h1><p class="hero-lead">Sites vitrines sur mesure, automatisation de tâches, Excel, collecte de données et petits logiciels adaptés aux artisans, indépendants, garages, petites industries et PME.</p><div class="hero-actions"><a class="btn btn-primary btn-glow decode" href="contact.html">Expliquer mon besoin <i class="bi bi-arrow-right"></i></a><a class="btn btn-secondary" href="#services">Voir les services</a></div><ul class="trust-line"><li>Environ 40 à 50 km autour de Beauzac</li><li>Projets à distance partout en France</li><li>Un interlocuteur unique</li></ul></div></div>${circuit()}<span class="hero-note">Solutions concrètes pour petites entreprises</span></section>
  <section class="section" id="services"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Services pour les professionnels</span><h2>Votre problème d’abord. La technique ensuite.</h2></div><p>Vous n’avez pas besoin de savoir s’il faut une macro, une API ou un autre outil. Montrez simplement la tâche ou le blocage : je cherche la solution la plus claire et la plus proportionnée.</p></div><div class="service-grid">${primary.map(serviceCard).join("")}</div><aside class="field-story" data-reveal><figure class="field-story-image zoom-in" data-parallax="0.018"><img src="assets/img/artisan-outil-numerique.webp" width="1536" height="1024" alt="Artisan utilisant un outil numérique sur mesure" loading="lazy"></figure><div class="field-story-copy"><span class="eyebrow">L’informatique reste au service du terrain</span><h3>Un bon outil ne change pas votre métier. Il retire ce qui vous ralentit.</h3><p>L’écran n’est pas le but : il doit simplement rendre une tâche plus courte, plus sûre ou plus facile à transmettre.</p><ul><li><i class="bi bi-check2"></i> Vos habitudes utiles sont conservées</li><li><i class="bi bi-check2"></i> Les étapes répétitives sont simplifiées</li><li><i class="bi bi-check2"></i> Le résultat reste compréhensible</li></ul></div></aside></div></section>
  <section class="section section-soft" id="problemes"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Situations très concrètes</span><h2>Vous perdez du temps sur ce genre de tâches ?</h2></div><p>Une petite manipulation répétée chaque jour finit souvent par coûter plusieurs heures. Certaines peuvent être raccourcies, fiabilisées ou entièrement automatisées.</p></div><div class="section-visual-story">${themeVisual("automatisation-taches-entreprise.html", "home-section-visual")}<p>Une information entre, plusieurs étapes se déclenchent, puis un résultat propre ressort. Le schéma bouge, mais l’idée reste simple : retirer les manipulations prévisibles.</p></div><div class="problem-grid">${[
    "Vous recopiez les mêmes informations d’un fichier vers un autre ?", "Vous réalisez la même manipulation tous les matins ?", "Vous remplissez plusieurs fichiers Excel avec les mêmes données ?", "Vous récupérez manuellement des prix ou références sur internet ?", "Vous renommez et classez régulièrement de nombreux fichiers ?", "Vous envoyez souvent les mêmes documents ou les mêmes e-mails ?", "Deux outils vous obligent à saisir deux fois la même information ?", "Votre fichier Excel devient lent, fragile ou compliqué à utiliser ?", "Vous aimeriez qu’un rapport ou un document se crée automatiquement ?", "Aucun logiciel existant ne correspond exactement à votre besoin ?"
  ].map((text) => `<div class="problem-item" data-reveal><i class="bi bi-check-circle"></i><p>${text}</p></div>`).join("")}</div><div class="hero-actions"><a class="btn btn-primary" href="automatisation-taches-entreprise.html">Voir ce qui peut être automatisé</a><a class="btn btn-secondary" href="excel-vba-macros.html">Simplifier un fichier Excel</a></div></div></section>
  <section class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Une méthode simple</span><h2>Comprendre avant de développer.</h2></div><p>Une solution utile commence par votre façon de travailler aujourd’hui. Le périmètre reste lisible, réaliste et adapté à une petite structure.</p></div><div class="process-visual" aria-hidden="true"><svg viewBox="0 0 1120 170" preserveAspectRatio="none"><path class="draw-on-scroll" d="M20 85H210C250 85 250 35 290 35h245c40 0 40 100 80 100h205c40 0 40-50 80-50h200"/><circle cx="20" cy="85" r="7"/><circle cx="290" cy="35" r="7"/><circle cx="615" cy="135" r="7"/><circle cx="1100" cy="85" r="7"/></svg></div><div class="process-grid"><div class="process-step" data-reveal><span class="step-num">01 · ÉCHANGE</span><h3>Vous montrez le problème</h3><p>Un fichier, quelques captures ou une démonstration suffisent souvent pour commencer.</p></div><div class="process-step" data-reveal><span class="step-num">02 · PROPOSITION</span><h3>Je simplifie le besoin</h3><p>Nous distinguons l’indispensable du secondaire et vérifions les limites avant de coder.</p></div><div class="process-step" data-reveal><span class="step-num">03 · SOLUTION</span><h3>Vous testez sur du réel</h3><p>La solution est expliquée, testée avec vos exemples puis ajustée dans le périmètre prévu.</p></div></div></div></section>
  <section class="section section-soft" id="realisations"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Exemples de sites vitrines</span><h2>Des réalisations locales et sur mesure.</h2></div><p>Trois sites conçus pour présenter clairement une activité et faciliter la prise de contact, dont une refonte complète d’un site existant.</p></div><div class="project-grid"><a class="project-card" href="https://jackup-auto.fr/" target="_blank" rel="noopener noreferrer" data-reveal><div class="project-image"><img src="assets/img/jackup-auto-card.webp" width="1600" height="796" alt="Site vitrine réalisé pour Jack Up Auto" loading="lazy"></div><div class="project-copy"><span class="eyebrow">Garage automobile</span><h3>Jack Up Auto</h3><p>Présentation des prestations, du garage et des informations de contact.</p></div></a><a class="project-card" href="https://petiot-chaudronnerie.fr/" target="_blank" rel="noopener noreferrer" data-reveal><div class="project-image"><img src="assets/img/petiot-chaudronnerie-card.webp" width="1600" height="792" alt="Site vitrine réalisé pour Petiot Chaudronnerie" loading="lazy"></div><div class="project-copy"><span class="eyebrow">Artisan chaudronnier</span><h3>Petiot Chaudronnerie</h3><p>Mise en valeur du savoir-faire, des services et des réalisations.</p></div></a><a class="project-card project-card-wide" href="realisations.html#meca-europe" data-reveal><div class="project-image"><img src="assets/img/meca-europe-new.webp" width="1600" height="791" alt="Nouveau site internet réalisé pour Meca Europe" loading="lazy"></div><div class="project-copy"><span class="eyebrow">Refonte · Mécanique générale</span><h3>Meca Europe</h3><p>Une ancienne vitrine transformée en site moderne, clair et adapté au mobile.</p><span class="text-link">Comparer l’avant et l’après</span></div></a></div><div class="hero-actions"><a class="btn btn-primary btn-glow decode" href="realisations.html">Découvrir les réalisations en détail</a></div></div></section>
  <section class="section" id="zone"><div class="wrap"><div class="zone-panel"><div><span class="eyebrow">Proximité et travail à distance</span><h2>Basé à Beauzac, disponible bien au-delà.</h2><p>Je me déplace principalement dans un rayon d’environ 40 à 50 km autour de Beauzac. Les projets de site, données, Excel, automatisation ou logiciel qui ne nécessitent pas de présence sur place peuvent être réalisés partout en France.</p></div>${zoneVisual()}</div></div></section>
  <section class="section section-soft" id="a-propos"><div class="wrap about-grid"><div class="about-photo" data-reveal><img src="assets/img/profile-img.jpg" width="720" height="900" alt="Fabian Measson, développeur informatique indépendant à Beauzac" loading="lazy"></div><div class="about-copy" data-reveal><span class="eyebrow">Un interlocuteur direct</span><h2>Un développeur indépendant, pas une grosse agence.</h2><p>Je m’appelle Fabian : geek assumé, plutôt du genre à bidouiller un outil pour le plaisir. J’accompagne les petites entreprises avec une approche directe, sans jargon, jusqu’à ce petit moment de satisfaction où le client m’appelle pour dire que ça fonctionne enfin.</p><p>Vous échangez avec la personne qui analyse et réalise le projet. Si la demande est trop grande, trop sensible ou sort de mon périmètre, je vous le dis clairement.</p><a class="text-link" href="a-propos.html">Découvrir ma façon de travailler</a></div></div></section>
  <section class="section"><div class="wrap"><div class="minor-service" data-reveal><div><span class="eyebrow">Service secondaire, toujours disponible</span><h2>Dépannage informatique local</h2><p>PC lent, Windows, virus, installation, sauvegarde ou problème logiciel : le dépannage reste proposé à Beauzac et dans les communes proches, notamment pour les petites entreprises et les clients existants.</p></div><a class="btn btn-secondary" href="depannage-informatique-beauzac.html">Voir le dépannage</a></div></div></section>
  <section class="section section-soft"><div class="narrow"><div class="section-head"><div><span class="eyebrow">Questions fréquentes</span><h2>Avant un premier échange</h2></div></div><div class="faq-list">${[
    ["Je ne sais pas de quelle technologie j’ai besoin. Est-ce un problème ?", "Pas du tout. Expliquez ce que vous faites aujourd’hui, ce qui prend du temps et le résultat souhaité. Le choix technique vient ensuite."], ["Travaillez-vous seulement avec les entreprises de Beauzac ?", "Non. Je privilégie la Haute-Loire et les communes dans un rayon d’environ 40 à 50 km, mais de nombreux projets peuvent être menés entièrement à distance partout en France."], ["Prenez-vous en charge de très gros projets informatiques ?", "Je me concentre sur des sites vitrines, automatisations et petits outils ciblés. Je ne me présente pas comme une agence capable de remplacer tout le système de gestion d’une entreprise."], ["Comment démarre un projet ?", "Par un échange simple et sans jargon. Vous pouvez montrer un fichier, décrire une tâche ou envoyer quelques exemples. Je vérifie ensuite la faisabilité et propose un périmètre clair."]
  ].map(([q,a]) => `<details><summary>${q}</summary><div class="faq-answer"><p>${a}</p></div></details>`).join("")}</div></div></section>
  ${contactSection()}</main>${footer()}<script src="assets/js/site.js"></script></body></html>`;
}

function standardSchema(name, description, slug, pageType = "WebPage") {
  const pageUrl = `${domain}/${slug}`;
  return [localBusiness, websiteSchema, { "@context": "https://schema.org", "@type": pageType, "@id": `${pageUrl}#page`, name, description, url: pageUrl, inLanguage: "fr-FR", isPartOf: { "@id": websiteId }, about: { "@id": businessId } }, { "@context": "https://schema.org", "@type": "BreadcrumbList", "@id": `${pageUrl}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: `${domain}/` }, { "@type": "ListItem", position: 2, name, item: pageUrl }] }];
}

function realisationsPage() {
  const slug = "realisations.html";
  const description = "Découvrez les sites vitrines réalisés par FR Informatique pour des entreprises de Haute-Loire : Meca Europe, Jack Up Auto, Petiot Chaudronnerie.";
  return `${head({ title: "Réalisations de sites vitrines Haute-Loire", description, url: slug, schema: standardSchema("Réalisations FR Informatique", description, slug, "CollectionPage"), image: "meca-europe-new.webp", imageWidth: 1600, imageHeight: 791, imageAlt: "Comparaison avant et après de la refonte du site Meca Europe" })}<body data-page-act="2">${header(slug)}<main id="contenu">
  <section class="service-hero page-identity-hero"><div class="wrap"><ol class="breadcrumb"><li><a href="index.html">Accueil</a></li><li>Réalisations</li></ol><span class="eyebrow typewriter">Des projets locaux et utiles</span><h1>Des sites vitrines conçus autour d’un vrai métier.</h1><p class="service-lead">Une entreprise de mécanique générale, un garage et un artisan chaudronnier n’ont pas les mêmes clients ni les mêmes choses à montrer. Chaque site commence donc par l’activité réelle, pas par un modèle tout fait.</p><div class="hero-actions"><a class="btn btn-primary btn-glow decode" href="contact.html">Parler de mon projet</a><a class="btn btn-secondary" href="creation-site-internet-haute-loire.html">Comprendre l’offre</a></div></div>${themeVisual("creation-site-internet-haute-loire.html", "service-theme-visual")}</section>
  <section class="section"><div class="wrap"><div class="section-head"><span class="eyebrow">Trois entreprises, trois réponses</span><h2>Le site doit ressembler à l’entreprise qu’il présente.</h2><p>Ces réalisations montrent une même exigence : expliquer rapidement le métier, rassurer le visiteur et rendre le contact évident sur téléphone comme sur ordinateur.</p></div><div class="showcase-list">
    <article class="showcase-project showcase-project-featured" id="meca-europe"><div class="before-after" data-before-after><div class="before-after-stage"><img class="after-image" src="assets/img/meca-europe-new.webp" width="1600" height="791" alt="Nouveau site internet réalisé pour Meca Europe"><div class="before-image"><img src="assets/img/meca-europe-old.webp" width="1440" height="980" alt="Ancien site internet de Meca Europe avant refonte"></div><span class="compare-label compare-label-before">Avant</span><span class="compare-label compare-label-after">Après</span><span class="compare-handle" aria-hidden="true"><i class="bi bi-chevron-left"></i><i class="bi bi-chevron-right"></i></span><input type="range" min="0" max="100" value="34" aria-label="Comparer l’ancienne et la nouvelle version du site Meca Europe"></div><p class="compare-help"><i class="bi bi-arrows"></i> Faites glisser pour comparer la refonte</p></div><div class="showcase-copy"><span class="eyebrow">Refonte complète · Riotord</span><h2>Meca Europe</h2><p>L’ancien site présentait l’essentiel, mais sa mise en page et sa navigation ne correspondaient plus aux usages actuels. La refonte donne davantage de place au métier, aux pièces réalisées et au parc machines.</p><ul class="deliver-list"><li>Nouvelle identité visuelle plus professionnelle</li><li>Navigation claire entre pièces de série, pièces unitaires et parc machines</li><li>Lecture adaptée au téléphone et accès direct à la demande de devis</li></ul><div class="project-links"><a class="btn btn-primary decode" href="https://meca-europe.fr/" target="_blank" rel="noopener noreferrer">Voir le nouveau site</a><a class="text-link" href="http://mecaeurope.free.fr/" target="_blank" rel="noopener noreferrer">Voir l’ancienne version</a></div></div></article>
    <article class="showcase-project"><div class="showcase-screen zoom-in" data-parallax="0.025"><span class="browser-dots"><i></i><i></i><i></i></span><img src="assets/img/jackup-auto-card.webp" width="1600" height="796" alt="Site vitrine réalisé pour Jack Up Auto" loading="lazy"></div><div class="showcase-copy"><span class="eyebrow">Garage automobile</span><h2>Jack Up Auto</h2><p>Le visiteur comprend les prestations du garage, trouve les informations pratiques et peut appeler sans chercher. L’interface met le métier au premier plan et reste simple sur mobile.</p><ul class="deliver-list"><li>Présentation claire des prestations</li><li>Accès rapide au téléphone et à l’adresse</li><li>Affichage adapté aux petits écrans</li></ul><a class="btn btn-primary decode" href="https://jackup-auto.fr/" target="_blank" rel="noopener noreferrer">Voir le site</a></div></article>
    <article class="showcase-project flip"><div class="showcase-screen zoom-in" data-parallax="0.025"><span class="browser-dots"><i></i><i></i><i></i></span><img src="assets/img/petiot-chaudronnerie-card.webp" width="1600" height="792" alt="Site vitrine réalisé pour Petiot Chaudronnerie" loading="lazy"></div><div class="showcase-copy"><span class="eyebrow">Artisan chaudronnier</span><h2>Petiot Chaudronnerie</h2><p>Le site présente le savoir-faire, les domaines d’intervention et les réalisations. Les images aident le prospect à comprendre immédiatement le type de travail proposé.</p><ul class="deliver-list"><li>Mise en valeur des réalisations</li><li>Explication accessible du savoir-faire</li><li>Prise de contact sans détour</li></ul><a class="btn btn-primary decode" href="https://petiot-chaudronnerie.fr/" target="_blank" rel="noopener noreferrer">Voir le site</a></div></article>
  </div></div></section>${signalDivider("creation-site-internet-haute-loire.html")}
  <section class="section section-soft"><div class="wrap"><div class="section-head"><span class="eyebrow">Ce qui ne se voit pas au premier regard</span><h2>Un beau site doit surtout être agréable à utiliser.</h2><p>La présentation visuelle compte, mais elle sert toujours la compréhension, la rapidité et la prise de contact.</p></div><div class="benefit-grid"><article class="benefit-card"><i class="bi bi-phone"></i><h3>Lecture mobile</h3><p>Les textes, boutons et images restent confortables sur téléphone.</p></article><article class="benefit-card"><i class="bi bi-speedometer2"></i><h3>Chargement rapide</h3><p>Les éléments inutiles sont évités pour ne pas faire patienter le visiteur.</p></article><article class="benefit-card"><i class="bi bi-search"></i><h3>Structure compréhensible</h3><p>Les pages aident les visiteurs et Google à identifier les services.</p></article><article class="benefit-card"><i class="bi bi-person-check"></i><h3>Contact évident</h3><p>Le prospect sait toujours comment passer à l’étape suivante.</p></article></div></div></section>
  <section class="section"><div class="wrap two-col"><div><span class="eyebrow">Votre futur site</span><h2 class="content-title">Il n’a pas besoin d’être énorme pour être convaincant.</h2></div><div class="timeline"><div class="tl-step"><span class="tl-num">01 · ÉCOUTE</span><h3>Comprendre le métier</h3><p>Vos clients, vos prestations, votre zone et les questions les plus fréquentes.</p></div><div class="tl-step"><span class="tl-num">02 · CONTENU</span><h3>Organiser les réponses</h3><p>Une structure simple qui guide le prospect sans termes compliqués.</p></div><div class="tl-step"><span class="tl-num">03 · CRÉATION</span><h3>Donner une identité</h3><p>Une présentation sur mesure, cohérente avec votre entreprise.</p></div><div class="tl-step"><span class="tl-num">04 · MISE EN LIGNE</span><h3>Tester puis publier</h3><p>Vérification sur différents écrans avant de rendre le site public.</p></div></div></div></section>
  <section class="section section-soft"><div class="wrap"><div class="cta-panel"><div><span class="eyebrow">Une activité à présenter ?</span><h2>Parlons de ce que vos futurs clients doivent comprendre.</h2><p>Vous pouvez venir avec quelques photos, un ancien site ou simplement une explication de votre métier.</p></div><div class="cta-actions"><a class="btn btn-primary btn-glow decode" href="contact.html">Commencer le projet</a><a class="btn btn-secondary" href="tel:${phoneHref}">${phoneDisplay}</a></div></div></div></section>
  </main>${footer()}<script src="assets/js/site.js"></script></body></html>`;
}

function aboutPage() {
  const slug = "a-propos.html";
  const description = "Découvrez FR Informatique, développeur indépendant basé à Beauzac : une approche simple, locale et adaptée aux artisans, TPE et PME.";
  return `${head({ title: "À propos de FR Informatique, développeur à Beauzac", description, url: slug, schema: standardSchema("À propos de FR Informatique", description, slug, "AboutPage"), image: "profile-img.jpg", imageWidth: 720, imageHeight: 900, imageAlt: "Fabian Measson, développeur indépendant FR Informatique à Beauzac" })}<body data-page-act="1">${header(slug)}<main id="contenu">
  <section class="service-hero page-identity-hero"><div class="wrap"><ol class="breadcrumb"><li><a href="index.html">Accueil</a></li><li>À propos</li></ol><span class="eyebrow typewriter">Un interlocuteur, pas un service client</span><h1>Le développeur qui vous répond est aussi celui qui écrit le code.</h1><p class="service-lead">Je transforme une tâche répétitive, un blocage ou une idée en solution simple à utiliser. Sans jargon, et avec une vraie envie de comprendre ce qui vous ferait gagner du temps.</p><div class="hero-actions"><a class="btn btn-primary btn-glow decode" href="contact.html">Me présenter votre besoin</a><a class="btn btn-secondary" href="realisations.html">Voir les réalisations</a></div></div>${themeVisual("logiciel-sur-mesure-haute-loire.html", "service-theme-visual")}</section>
  <section class="section"><div class="wrap about-grid about-page-grid"><div class="about-photo reveal-left"><img src="assets/img/profile-img.jpg" width="720" height="900" alt="Fabian Measson, développeur informatique indépendant à Beauzac" loading="lazy"><span class="profile-tag">Fabian · Beauzac</span></div><div class="about-copy reveal-right"><span class="eyebrow">Qui se trouve derrière FR Informatique ?</span><h2>Un geek, avant d’être un prestataire.</h2><p>Je m’appelle Fabian, je suis développeur et technicien informatique basé à Beauzac, en Haute-Loire. Et si je dois être honnête : je fais ce métier parce que je suis geek jusqu’au bout des ongles. J’ai toujours aimé comprendre comment les choses fonctionnent, bidouiller, chercher une solution jusqu’à ce qu’elle tienne enfin debout. Entre deux projets, on me trouve plutôt devant un jeu vidéo ou en train de tester un nouvel outil, juste pour le plaisir.</p><p>Cette passion, je la mets directement au service des artisans, garages, indépendants, petites industries et PME que j’accompagne. Ce qui me motive vraiment, ce n’est pas de vendre le plus gros projet possible : c’est ce moment très concret où un client m’appelle pour dire que l’outil fonctionne, qu’il a gagné du temps, ou qu’il est enfin fier de son site. Cette satisfaction-là, après une livraison réussie, c’est honnêtement ce qui me fait continuer.</p><p>Je reste donc un interlocuteur direct et humain : la personne qui vous écoute est la même qui code, teste et livre. Si une demande dépasse ce que je peux raisonnablement faire seul, je vous le dis clairement, sans détour.</p></div></div></section>${signalDivider("logiciel-sur-mesure-haute-loire.html")}
  <section class="section section-soft"><div class="wrap"><div class="section-head"><span class="eyebrow">Ma façon de travailler</span><h2>Clair avant d’être technique.</h2><p>Une collaboration doit rester facile à suivre, même si vous ne connaissez aucun mot de développement.</p></div><div class="value-grid"><article class="value-card"><span>01</span><h3>Écouter le quotidien</h3><p>Vous montrez la tâche ou expliquez le problème avec vos mots.</p></article><article class="value-card"><span>02</span><h3>Dire ce qui est réaliste</h3><p>Les possibilités, limites et dépendances sont expliquées avant de commencer.</p></article><article class="value-card"><span>03</span><h3>Rester proportionné</h3><p>Un petit problème mérite souvent un petit outil bien ciblé.</p></article><article class="value-card"><span>04</span><h3>Faire tester sur du réel</h3><p>Vos vrais exemples servent à vérifier que la solution est utile.</p></article></div></div></section>
  <section class="section"><div class="wrap two-col"><div><span class="eyebrow">Le bon périmètre</span><h2 class="content-title">Des projets ciblés, pas des promesses démesurées.</h2>${themeVisual("automatisation-n8n.html", "inline-theme-visual")}</div><div><h3>Les demandes adaptées</h3><ul class="deliver-list"><li>Site vitrine sur mesure</li><li>Automatisation d’une tâche répétitive</li><li>Petit outil interne ou traitement de fichiers</li><li>Macro Excel ou complément ciblé</li><li>Collecte et nettoyage de données autorisées</li><li>Connexion simple entre plusieurs outils</li></ul><h3 style="margin-top:2.5rem">Les projets qui demandent une autre organisation</h3><p class="section-intro">Un système complet couvrant toute l’entreprise, un logiciel industriel critique ou une transformation profonde d’un outil central nécessite généralement une équipe et un cadre différents.</p></div></div></section>
  <section class="section section-soft"><div class="wrap">${zoneNote()}</div></section>
  <section class="section"><div class="wrap"><div class="cta-panel light-cta"><div><span class="eyebrow">Faisons connaissance</span><h2>Expliquez-moi simplement ce que vous aimeriez améliorer.</h2><p>Un premier échange suffit souvent pour savoir si la piste est raisonnable.</p></div><div class="cta-actions"><a class="btn btn-primary btn-glow decode" href="contact.html">Écrire à FR Informatique</a><a class="btn btn-secondary" href="tel:${phoneHref}">${phoneDisplay}</a></div></div></div></section>
  </main>${footer()}<script src="assets/js/site.js"></script></body></html>`;
}

function contactPage() {
  const slug = "contact.html";
  const description = "Contactez FR Informatique à Beauzac pour un site vitrine, une automatisation, Excel, un petit logiciel ou un dépannage informatique local.";
  const faq = [["Que faut-il préparer avant de vous contacter ?", "Rien de technique. Un exemple de fichier, quelques captures ou une explication de la tâche actuelle sont déjà très utiles."], ["Le premier échange est-il réservé aux entreprises de Haute-Loire ?", "Non. Les projets réalisables à distance peuvent être étudiés partout en France."], ["Puis-je vous appeler pour savoir si mon idée est possible ?", "Oui. Décrivez le résultat attendu et la façon dont vous travaillez aujourd’hui. Je vous indiquerai les premières pistes et les informations manquantes."], ["Sous quel délai vais-je recevoir une réponse ?", "Je réponds personnellement dès que possible. Pour une demande urgente de dépannage local, le téléphone reste le moyen le plus direct."]];
  const schema = [...standardSchema("Contact FR Informatique", description, slug, "ContactPage"), { "@context": "https://schema.org", "@type": "FAQPage", "@id": `${domain}/${slug}#faq`, mainEntity: faq.map(([q,a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }];
  return `${head({ title: "Contacter FR Informatique à Beauzac", description, url: slug, schema })}<body data-page-act="0">${header(slug)}<main id="contenu">
  <section class="service-hero page-identity-hero"><div class="wrap"><ol class="breadcrumb"><li><a href="index.html">Accueil</a></li><li>Contact</li></ol><span class="eyebrow typewriter">Pas besoin de préparer un cahier technique</span><h1>Racontez-moi simplement ce que vous voulez améliorer.</h1><p class="service-lead">Une tâche trop longue, un fichier compliqué, un site à créer ou une idée de petit outil ? Commencez par décrire la situation actuelle.</p><div class="hero-actions"><a class="btn btn-primary btn-glow decode" href="#formulaire">Écrire mon message</a><a class="btn btn-secondary" href="tel:${phoneHref}">Appeler le ${phoneDisplay}</a></div></div>${themeVisual("api-integration.html", "service-theme-visual")}</section>
  <section class="section" id="formulaire"><div class="wrap contact-grid contact-page-grid"><div class="contact-copy reveal-left"><span class="eyebrow">Contact direct</span><h2>Vous échangez avec la personne qui réalisera le projet.</h2><p>Décrivez ce que vous faites aujourd’hui et ce qui devrait être plus simple. Les mots techniques ne sont pas nécessaires.</p>${contactGuide()}<ul class="contact-list"><li><a href="tel:${phoneHref}"><i class="bi bi-telephone"></i>${phoneDisplay}</a></li><li><a href="mailto:${email}"><i class="bi bi-envelope"></i>${email}</a></li><li><a href="https://wa.me/33630703036" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp"></i>Écrire sur WhatsApp</a></li><li><a href="${mapsSearchUrl}" target="_blank" rel="noopener noreferrer"><i class="bi bi-geo-alt"></i>FR Informatique à Beauzac sur Google Maps</a></li></ul></div>
  <form class="contact-form light-form reveal-right" action="https://formspree.io/f/xeojgzyk" method="post"><div class="form-row"><div class="field"><label for="contact-name">Votre nom</label><input id="contact-name" name="name" autocomplete="name" required></div><div class="field"><label for="contact-email">Votre e-mail</label><input id="contact-email" name="email" type="email" autocomplete="email" required></div></div><div class="field"><label for="contact-subject">Votre entreprise ou le sujet</label><input id="contact-subject" name="subject" required></div><div class="field"><label for="contact-message">Que faites-vous aujourd’hui, et qu’aimeriez-vous simplifier ?</label><textarea id="contact-message" name="message" required></textarea></div><button class="btn btn-primary btn-glow decode" type="submit">Envoyer ma demande</button><p class="form-note">Vos informations servent uniquement à répondre à votre demande.</p><div class="form-status" aria-live="polite"></div></form></div></section>${signalDivider("api-integration.html")}
  <section class="section section-soft"><div class="wrap"><div class="section-head"><span class="eyebrow">Pour aller plus vite</span><h2>Quelques éléments peuvent aider, s’ils sont faciles à partager.</h2></div><div class="example-grid"><article class="example-card"><span class="num">01</span><h3>Un exemple réel</h3><p>Un fichier anonymisé, une capture ou un document proche de ce que vous traitez.</p></article><article class="example-card"><span class="num">02</span><h3>La fréquence</h3><p>Chaque jour, chaque semaine ou seulement à certaines périodes.</p></article><article class="example-card"><span class="num">03</span><h3>Le résultat souhaité</h3><p>Le fichier, le message ou l’écran que vous aimeriez obtenir à la fin.</p></article></div></div></section>
  <section class="section"><div class="wrap">${zoneNote()}</div></section>
  <section class="section section-soft"><div class="narrow"><div class="section-head"><span class="eyebrow">Avant de contacter</span><h2>Questions fréquentes</h2></div><div class="faq-list">${faq.map(([q,a]) => `<details><summary>${q}</summary><div class="faq-answer"><p>${a}</p></div></details>`).join("")}</div></div></section>
  </main>${footer()}<script src="assets/js/site.js"></script></body></html>`;
}

function leadBlock(service, soft) {
  return `<section class="section${soft ? " section-soft" : ""}"><div class="wrap lead-panel"><h2>${service.introTitle}</h2><div class="lead-copy" data-reveal>${service.intro.map((p) => `<p>${p}</p>`).join("")}<div class="plain-definition"><strong>${service.plainTitle}</strong><p>${service.plain}</p></div></div></div></section>`;
}

function examplesBlock(service, variant, soft) {
  const gridClass = variant === "rows" ? "example-grid is-rows" : "example-grid";
  return `<section class="section${soft ? " section-soft" : ""}"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Exemples concrets</span><h2>Dans quelles situations cela peut vous aider ?</h2></div><p>Chaque entreprise fonctionne différemment. Ces exemples permettent de reconnaître un besoin, puis la solution est adaptée à vos fichiers, vos outils et vos habitudes.</p></div><div class="${gridClass}">${service.examples.map(([title,text], i) => `<article class="example-card" data-reveal><span class="num">${String(i+1).padStart(2,"0")}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}</div></div></section>`;
}

function deliverBlock(service, soft) {
  return `<section class="section${soft ? " section-soft" : ""}"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Ce que je peux mettre en place</span><h2>Une solution limitée au besoin utile.</h2></div><p>Le contenu exact est défini après avoir vu vos exemples. L’objectif est de livrer quelque chose de compréhensible, testable et réellement utilisé.</p></div><ul class="deliver-list">${service.deliver.map((item) => `<li>${item}</li>`).join("")}</ul></div></section>`;
}

function storySection(service, soft) {
  return `<section class="section${soft ? " section-soft" : ""}"><div class="wrap">${serviceStory(service)}</div></section>`;
}

function audienceBlock(service, variant, soft) {
  const gridClass = variant === "split" ? "audience-grid is-split" : "audience-grid";
  return `<section class="section${soft ? " section-soft" : ""}"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Pour quelles entreprises ?</span><h2>Une approche pensée pour les petites structures.</h2></div><p>Le projet reste proportionné au temps gagné, au nombre d’utilisateurs et à l’importance de la tâche.</p></div><div class="${gridClass}">${service.audiences.map(([title,text]) => `<article class="audience-card" data-reveal><h3>${title}</h3><p>${text}</p></article>`).join("")}</div></div></section>`;
}

const BENEFIT_HEADINGS = {
  website: "Ce que cela change pour votre image en ligne.",
  hosting: "Ce que cela change pour la fiabilité de votre site.",
  nodes: "Ce que ce scénario change au quotidien.",
  automation: "Ce que cette automatisation change au quotidien.",
  collection: "Ce que cette collecte change au quotidien.",
  software: "Ce que cet outil change au quotidien.",
  bridge: "Ce que cette connexion change au quotidien.",
  database: "Ce que cela change pour vos recherches.",
  spreadsheet: "Ce que cela change dans votre usage d’Excel.",
  ai: "Ce que cela change dans le traitement de vos documents.",
  repair: "Ce que cela change une fois le problème réglé."
};

function benefitBlock(service, variant, soft) {
  const gridClass = variant === "split" ? "benefit-grid is-split" : "benefit-grid";
  const heading = BENEFIT_HEADINGS[themeKey(service)];
  return `<section class="section${soft ? " section-soft" : ""}"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Bénéfices</span><h2>${heading}</h2></div></div><div class="${gridClass}">${service.benefits.map(([icon,title,text]) => `<article class="benefit-card" data-reveal><i class="bi ${icon}" aria-hidden="true"></i><h3>${title}</h3><p>${text}</p></article>`).join("")}</div></div></section>`;
}

function techBlock(service, soft) {
  return `<section class="section${soft ? " section-soft" : ""}"><div class="narrow"><span class="eyebrow">La partie technique, sans jargon</span><h2 class="content-title">Vous n’avez pas à choisir l’outil.</h2><p class="section-intro" style="margin-top:24px">${service.tech}</p>${service.legal ? `<div class="legal-note" style="margin-top:28px"><strong>Un point indispensable :</strong> ${service.legal}</div>` : ""}</div></section>`;
}

function zoneBlockSection(soft) {
  return `<section class="section${soft ? " section-soft" : ""}"><div class="wrap">${zoneNote()}</div></section>`;
}

function faqBlock(service, soft) {
  return `<section class="section${soft ? " section-soft" : ""}"><div class="narrow"><div class="section-head"><div><span class="eyebrow">FAQ</span><h2>Questions fréquentes sur ${service.nav.toLowerCase()}</h2></div></div><div class="faq-list">${service.faq.map(([q,a]) => `<details><summary>${q}</summary><div class="faq-answer"><p>${a}</p></div></details>`).join("")}</div></div></section>`;
}

function relatedBlock(service, related, soft) {
  return `<section class="section${soft ? " section-soft" : ""}"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Services complémentaires</span><h2>Votre besoin touche peut-être plusieurs sujets.</h2></div><p>Les pages sont reliées pour vous aider à passer du problème concret vers les solutions qui peuvent réellement se compléter.</p></div><div class="related-grid">${related.map((s) => `<a class="related-card" href="${s.slug}" data-reveal><i class="bi ${s.icon} service-card-icon"></i><h3>${s.nav}</h3><p>${s.lead}</p><span class="text-link">Voir cette solution</span></a>`).join("")}</div></div></section>`;
}

function mentionsLegalesPage() {
  const slug = "mentions-legales.html";
  const description = "Mentions légales du site FR Informatique : identité de l’éditeur, hébergement, propriété intellectuelle et droit applicable.";
  return `${head({ title: "Mentions légales", description, url: slug, schema: standardSchema("Mentions légales de FR Informatique", description, slug, "WebPage") })}<body data-page-act="0">${header(slug)}<main id="contenu">
  <section class="service-hero page-identity-hero"><div class="wrap"><ol class="breadcrumb" aria-label="Fil d’Ariane"><li><a href="index.html">Accueil</a></li><li aria-current="page">Mentions légales</li></ol><span class="eyebrow typewriter">Informations légales</span><h1>Mentions légales</h1><p class="service-lead">Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, voici les informations relatives à l’éditeur de ce site, à son hébergement et à l’usage de son contenu.</p></div>${themeVisual("hebergement-maintenance-site.html", "service-theme-visual")}</section>
  <section class="section"><div class="narrow">
  <h2>Éditeur du site</h2>
  <p>Le site fr-informatique.com est édité à titre indépendant par Fabian Measson, développeur informatique.</p>
  <ul class="deliver-list"><li>Adresse : Beauzac (43590), Haute-Loire, France</li><li>Téléphone : ${phoneDisplay}</li><li>E-mail : ${email}</li><li>SIRET : à compléter par l’éditeur</li></ul>
  <h2>Directeur de la publication</h2>
  <p>Fabian Measson, également responsable de la conception, du développement et de la maintenance de l’ensemble des pages de ce site.</p>
  <h2>Hébergement</h2>
  <p>Ce site est hébergé par GitHub, Inc. (service GitHub Pages), 88 Colin P Kelly Jr Street, San Francisco, CA 94107, États-Unis. Le code source et le contenu du site sont gérés via un dépôt Git dédié.</p>
  <h2>Propriété intellectuelle</h2>
  <p>L’ensemble des textes, schémas, illustrations et éléments visuels présents sur ce site est la propriété de FR Informatique, sauf mention contraire explicite. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable, est interdite. Les visuels des réalisations présentées restent la propriété de leurs auteurs respectifs et sont utilisés avec l’accord des clients concernés.</p>
  <h2>Données personnelles</h2>
  <p>Le traitement des données transmises via le formulaire de contact, ainsi que les outils de mesure d’audience utilisés sur ce site, sont détaillés dans la <a class="text-link" href="politique-confidentialite.html">politique de confidentialité</a>.</p>
  <h2>Liens vers des sites tiers</h2>
  <p>Ce site peut contenir des liens vers des sites de réalisations, des réseaux sociaux ou des services externes (Google Maps, WhatsApp, Formspree). FR Informatique n’exerce aucun contrôle sur ces sites tiers et décline toute responsabilité quant à leur contenu ou leur politique de confidentialité.</p>
  <h2>Droit applicable</h2>
  <p>Le présent site et les présentes mentions légales sont soumis au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.</p>
  </div></section>
  <section class="section section-soft"><div class="wrap"><div class="cta-panel"><div><span class="eyebrow">Une question sur ces informations ?</span><h2>Contactez FR Informatique directement.</h2></div><div class="cta-actions"><a class="btn btn-primary btn-glow decode" href="contact.html">Contacter</a><a class="btn btn-secondary" href="tel:${phoneHref}">${phoneDisplay}</a></div></div></div></section>
  </main>${footer()}<script src="assets/js/site.js"></script></body></html>`;
}

function politiqueConfidentialitePage() {
  const slug = "politique-confidentialite.html";
  const description = "Politique de confidentialité de FR Informatique : données collectées, finalités, sous-traitants, cookies et droits RGPD.";
  return `${head({ title: "Politique de confidentialité", description, url: slug, schema: standardSchema("Politique de confidentialité de FR Informatique", description, slug, "WebPage") })}<body data-page-act="0">${header(slug)}<main id="contenu">
  <section class="service-hero page-identity-hero"><div class="wrap"><ol class="breadcrumb" aria-label="Fil d’Ariane"><li><a href="index.html">Accueil</a></li><li aria-current="page">Politique de confidentialité</li></ol><span class="eyebrow typewriter">Vos données, en toute transparence</span><h1>Politique de confidentialité</h1><p class="service-lead">Cette page explique quelles données sont collectées sur ce site, pourquoi, combien de temps elles sont conservées et comment exercer vos droits.</p></div>${themeVisual("collecte-donnees-web.html", "service-theme-visual")}</section>
  <section class="section"><div class="narrow">
  <h2>Responsable du traitement</h2>
  <p>Fabian Measson, éditeur du site fr-informatique.com, est responsable du traitement des données décrites ci-dessous. Vous pouvez le contacter à l’adresse ${email} pour toute question relative à vos données personnelles.</p>
  <h2>Données collectées</h2>
  <p>Deux sources de données existent sur ce site :</p>
  <ul class="deliver-list"><li>Le formulaire de contact : nom, e-mail, sujet et message, transmis via le service Formspree afin de vous répondre.</li><li>La mesure d’audience : pages consultées, provenance approximative et type d’appareil, via Google Analytics.</li></ul>
  <h2>Finalités</h2>
  <p>Ces données sont utilisées uniquement pour répondre à vos demandes de contact et pour comprendre, de façon agrégée, comment ce site est consulté afin de l’améliorer. Elles ne sont ni vendues ni utilisées à des fins publicitaires.</p>
  <h2>Base légale</h2>
  <p>Le traitement des messages de contact repose sur l’exécution de mesures précontractuelles prises à votre demande. La mesure d’audience repose sur l’intérêt légitime de FR Informatique à comprendre la fréquentation de son site.</p>
  <h2>Destinataires et sous-traitants</h2>
  <p>Les messages du formulaire de contact sont traités par Formspree Inc. (États-Unis). Les statistiques de fréquentation sont traitées par Google LLC (États-Unis) via Google Analytics. Ces prestataires peuvent impliquer un transfert de données hors de l’Union européenne, encadré par leurs propres garanties contractuelles.</p>
  <h2>Durée de conservation</h2>
  <p>Les messages de contact sont conservés le temps nécessaire au traitement de votre demande, puis archivés ou supprimés dans un délai raisonnable. Les données de mesure d’audience sont conservées selon les durées par défaut de Google Analytics.</p>
  <h2>Cookies et mesure d’audience</h2>
  <p>Google Analytics dépose des cookies destinés à mesurer la fréquentation du site. Vous pouvez vous opposer à ce suivi en configurant votre navigateur pour refuser les cookies, ou en installant le module de désactivation proposé par Google.</p>
  <h2>Vos droits</h2>
  <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation et d’opposition concernant vos données personnelles. Pour exercer ces droits, écrivez à ${email}. Vous disposez également du droit d’introduire une réclamation auprès de la CNIL (cnil.fr).</p>
  <h2>Sécurité</h2>
  <p>Ce site est servi en HTTPS et ne stocke aucune donnée personnelle en base de données propre : les échanges transitent directement vers les prestataires mentionnés ci-dessus.</p>
  </div></section>
  <section class="section section-soft"><div class="wrap">${zoneNote()}</div></section>
  </main>${footer()}<script src="assets/js/site.js"></script></body></html>`;
}

function notFoundPage() {
  const slug = "404.html";
  const description = "Cette page n’existe plus ou l’adresse est incorrecte. Retrouvez les services, les réalisations et les coordonnées de FR Informatique à Beauzac.";
  return `${head({ title: "Page introuvable | FR Informatique", description, url: slug, schema: [localBusiness, websiteSchema] })}<body data-page-act="0">${header()}<main id="contenu">
  <section class="service-hero page-identity-hero"><div class="wrap"><span class="eyebrow typewriter">Erreur 404</span><h1>Cette page n’existe pas ou plus.</h1><p class="service-lead">Le lien suivi est peut-être ancien ou mal orthographié. Vous retrouverez ci-dessous l’ensemble des services, ainsi qu’un accès direct à l’accueil et au contact.</p><div class="hero-actions"><a class="btn btn-primary btn-glow decode" href="index.html">Retour à l’accueil</a><a class="btn btn-secondary" href="contact.html">Contacter FR Informatique</a></div></div>${themeVisual("depannage-informatique-beauzac.html", "service-theme-visual")}</section>
  <section class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">Services</span><h2>Vous cherchiez peut-être l’une de ces pages ?</h2></div><p>Sites vitrines, automatisation, Excel, données, logiciels sur mesure ou dépannage local : voici l’ensemble des services proposés par FR Informatique.</p></div><div class="service-grid">${services.map(serviceCard).join("")}</div></div></section>
  <section class="section section-soft"><div class="wrap">${zoneNote()}</div></section>
  </main>${footer()}<script src="assets/js/site.js"></script></body></html>`;
}

function servicePage(service) {
  const serviceUrl = `${domain}/${service.slug}`;
  const serviceId = `${serviceUrl}#service`;
  const schema = [
    localBusiness,
    websiteSchema,
    { "@context": "https://schema.org", "@type": "Service", "@id": serviceId, name: service.title, serviceType: service.nav, description: service.meta, url: serviceUrl, provider: { "@id": businessId }, audience: { "@type": "BusinessAudience", audienceType: "Artisans, indépendants, TPE et PME" }, areaServed: [...towns.map((name) => ({ "@type": "City", name })), { "@type": "AdministrativeArea", name: "Haute-Loire" }, { "@type": "Country", name: "France", description: "Pour les projets réalisables à distance" }] },
    { "@context": "https://schema.org", "@type": "WebPage", "@id": `${serviceUrl}#page`, name: service.title, description: service.meta, url: serviceUrl, inLanguage: "fr-FR", isPartOf: { "@id": websiteId }, about: { "@id": serviceId }, mainEntity: { "@id": serviceId } },
    { "@context": "https://schema.org", "@type": "FAQPage", "@id": `${serviceUrl}#faq`, mainEntity: service.faq.map(([q,a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", "@id": `${serviceUrl}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: `${domain}/` }, { "@type": "ListItem", position: 2, name: service.nav, item: serviceUrl }] }
  ];
  const related = service.related.map((slug) => bySlug[slug]).filter(Boolean);
  const layout = LAYOUTS[SERVICE_LAYOUT[service.slug] || "A"];
  const builders = {
    lead: (soft) => leadBlock(service, soft),
    examples: (soft) => examplesBlock(service, layout.examplesVariant, soft),
    deliver: (soft) => deliverBlock(service, soft),
    story: (soft) => storySection(service, soft),
    audience: (soft) => audienceBlock(service, layout.audienceVariant, soft),
    benefit: (soft) => benefitBlock(service, layout.benefitVariant, soft),
    tech: (soft) => techBlock(service, soft),
    zone: (soft) => zoneBlockSection(soft),
    faq: (soft) => faqBlock(service, soft),
    related: (soft) => relatedBlock(service, related, soft)
  };
  let prevSoft = false;
  const body = layout.order.map((key) => {
    const soft = key in FIXED_BAND ? FIXED_BAND[key] : !prevSoft;
    prevSoft = soft;
    const html = builders[key](soft);
    return layout.dividerAfter.includes(key) ? html + signalDivider(service) : html;
  }).join("");
  return `${head({ title: service.title, description: service.meta, url: service.slug, schema })}<body data-page-act="1">${header(service.slug)}<main id="contenu">
  <section class="service-hero"><div class="service-hero-bg"><picture><source media="(max-width:760px)" srcset="assets/img/bg-services-mobile.webp"><img src="assets/img/bg-services.webp" width="1920" height="1280" alt="" fetchpriority="high"></picture></div><div class="wrap"><ol class="breadcrumb" aria-label="Fil d’Ariane"><li><a href="index.html">Accueil</a></li><li aria-current="page">${service.nav}</li></ol><span class="eyebrow typewriter">${service.eyebrow}</span><h1>${service.title}</h1><p class="service-lead">${service.lead}</p><div class="hero-actions"><a class="btn btn-primary btn-glow decode" href="#contact">Expliquer mon besoin</a><a class="btn btn-secondary" href="tel:${phoneHref}">Appeler le ${phoneDisplay}</a></div></div>${themeVisual(service, "service-theme-visual")}</section>
  <div class="wrap service-summary"><div class="summary-item"><strong>Pour qui ?</strong><span>Artisans, indépendants, garages, TPE et PME</span></div><div class="summary-item"><strong>Zone locale</strong><span>40 à 50 km autour de Beauzac</span></div><div class="summary-item"><strong>À distance</strong><span>Projets réalisables partout en France</span></div></div>
  ${body}
  <section class="section section-soft"><div class="wrap"><div class="cta-panel"><div><span class="eyebrow">Une question, une tâche ou une idée ?</span><h2>Montrez-moi simplement ce qui vous fait perdre du temps.</h2><p>Un premier échange permet de vérifier si une solution réaliste existe, sans vous demander de parler technique.</p></div><div class="cta-actions"><a class="btn btn-primary btn-glow decode" href="#contact">Décrire mon besoin</a><a class="btn btn-secondary" href="tel:${phoneHref}">${phoneDisplay}</a></div></div></div></section>
  ${contactSection()}</main>${footer()}<script src="assets/js/site.js"></script></body></html>`;
}

fs.writeFileSync(path.join(root, "index.html"), homepage(), "utf8");
for (const service of services) fs.writeFileSync(path.join(root, service.slug), servicePage(service), "utf8");
fs.writeFileSync(path.join(root, "realisations.html"), realisationsPage(), "utf8");
fs.writeFileSync(path.join(root, "a-propos.html"), aboutPage(), "utf8");
fs.writeFileSync(path.join(root, "contact.html"), contactPage(), "utf8");
fs.writeFileSync(path.join(root, "404.html"), notFoundPage(), "utf8");
fs.writeFileSync(path.join(root, "mentions-legales.html"), mentionsLegalesPage(), "utf8");
fs.writeFileSync(path.join(root, "politique-confidentialite.html"), politiqueConfidentialitePage(), "utf8");
const sitemapPages = ["index.html", "realisations.html", "a-propos.html", "contact.html", "mentions-legales.html", "politique-confidentialite.html", ...services.map((service) => service.slug)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapPages.map((page) => `  <url><loc>${page === "index.html" ? `${domain}/` : `${domain}/${page}`}</loc><lastmod>${lastSignificantUpdate}</lastmod></url>`).join("\n")}\n</urlset>\n`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap, "utf8");
console.log(`Generated index.html, ${services.length} service pages, 5 dedicated navigation pages, 404.html and sitemap.xml.`);
