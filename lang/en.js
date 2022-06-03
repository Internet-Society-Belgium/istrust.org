export default {
  index: {
    new_release: 'Latest release',
    days_ago: 'today | {days} day ago | {days} days ago',
    description: 'Verify the trustability of any website',
    get_the_addon: 'Get the add-on',
    feature: {
      title: 'A website seems suspicious ?',
      subtitle: 'Find out by checking',
      domain: {
        title: 'Domain',
        creation: 'Creation',
        change: 'Last change',
        owner: 'Owner',
      },
      communication: {
        title: 'Communication',
        secure: 'Secure',
        subject: 'Subject',
      },
    },
    download: {
      title: 'Download',
      description: 'All available stores',
    },
    opensource: {
      title: [
        { text: 'We respect your' },
        { text: 'privacy', highlight: true },
      ],
      description: [
        { text: "That's why this project is fully" },
        { text: 'open source', highlight: true },
      ],
      view: 'View source code',
    },
  },
  footer: { made_by: 'Made by' },
  legal: {
    title: 'Legal mention',
    description: 'Internet Society Chapter Belgium vzw/asbl (BE 0728.764.958)',
    who: {
      title: 'Who are we ?',
      organisation:
        'is operated by Internet Society Chapter Belgium vzw/asbl, in short "ISOC.be" vzw/asbl (non-profit organization).',
      postal: 'Our postal address is:',
      website: 'Our website address is:',
    },
  },
  privacy: {
    title: 'Privacy policy',
    description: 'NO personal data is processed nor stored',
    which: {
      title: 'Which personal data do we process and for which purpose',
      privacy: [
        { text: 'As we want to protect your privacy,' },
        { text: 'NO', highlight: true },
        {
          text: 'personal data is processed nor stored on this website.',
        },
        { text: 'NO', highlight: true },
        {
          text: 'cookie is used.',
        },
      ],
      contact:
        'In case of question related to privacy or data protection, please contact',
    },
  },
}
