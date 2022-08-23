export default {
  index: {
    new_release: 'Dernière version',
    days_ago: "aujourd'hui | il y a {days} jour | il y a {days} jours",
    description: "Vérifie la fiabilité de n'importe quel site web",
    get_the_addon: "Obtenir l'extension",
    feature: {
      title: 'Un site web semble suspect ?',
      subtitle: 'Découvrez-le en vérifiant',
      domain: {
        title: 'Domaine',
        creation: 'Création',
        change: 'Dernier changement',
        owner: 'Propriétaire',
      },
      communication: {
        title: 'Communication',
        secure: 'Sécurisée',
        subject: 'Sujet',
      },
    },
    download: {
      title: 'Téléchargement',
      description: 'Tous les magasins disponibles',
    },
    opensource: {
      title: [
        { text: 'Nous respectons votre' },
        { text: 'vie privée', highlight: true },
      ],
      description: [
        { text: "C'est pourquoi ce projet est entièrement" },
        { text: 'open source', highlight: true },
      ],
      view: 'Voir le code source',
    },
  },
  footer: { made_by: 'Fait par' },

  legal: {
    title: 'Mentions légales',
    description: 'Internet Society Chapter Belgium vzw/asbl (BE 0728.764.958)',
    who: {
      title: 'Qui sommes-nous ?',
      organisation:
        'est géré par Internet Society Chapter Belgium vzw/asbl, abrégé en "ISOC.be" vzw/asbl (organization à but non lucratif).',
      postal: 'Notre adresse postale est :',
      website: 'Notre site internet est :',
    },
  },
  privacy: {
    title: 'Politique de confidentialité',
    description: "AUCUNE donnée personnelle n'est traitée ni stockée",
    which: {
      title: 'Quelles données personnelles traitons-nous et dans quel but ?',
      privacy: [
        { text: 'Comme nous voulons protéger votre vie privée,' },
        { text: 'AUCUNE', highlight: true },
        {
          text: "donnée personnelle n'est traitée ni stockée sur ce site web.",
        },
        { text: 'AUCUN', highlight: true },
        {
          text: "cookie n'est utilisé.",
        },
      ],
      contact:
        'En cas de question relative au respect de la vie privée ou à la protection des données, veuillez vous adresser à',
    },
  },
  get: {
    redirecting: 'Redirection...',
  },
}
