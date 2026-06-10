import LINKS from './links';

export default {
  header: [
    {
      text: 'Product',
      sections: [
        {
          title: 'Lorem ipsum',
          items: [
            {
              title: "Neon's lakebase architecture",
              to: LINKS.architecture,
              description: 'Sed ut perspiciatis unde.',
            },
            {
              title: 'Dolor sit',
              to: LINKS.autoscaling,
              description: 'Nemo enim ipsam voluptatem.',
            },
            {
              title: 'Amet consectetur',
              to: LINKS.readReplicas,
              description: 'Ut enim ad minima veniam.',
            },
            {
              title: 'Adipiscing elit',
              to: LINKS.instantRestore,
              description: 'Quis autem vel eum iure.',
            },
          ],
        },
        {
          title: 'Sed do eiusmod',
          items: [
            {
              title: 'Tempor incididunt',
              to: LINKS.branching,
              description: 'At vero eos et accusamus.',
            },
            {
              title: 'Ut labore',
              to: LINKS.auth,
              description: 'Nam libero tempore soluta.',
            },
            {
              title: 'Et dolore',
              to: LINKS.dataApi,
              description: 'Temporibus autem quibusdam.',
            },
            {
              title: 'Magna aliqua',
              to: LINKS.connectionPooling,
              description: 'Itaque earum rerum hic.',
            },
          ],
        },
      ],
    },
    {
      text: 'Solutions',
      sections: [
        {
          title: 'Enim ad minim',
          items: [
            {
              title: 'Quis nostrud',
              to: `${LINKS.useCases}/serverless-apps`,
              description: 'Cum sociis natoque penatibus.',
            },
            {
              title: 'Exercitation ullamco',
              to: `${LINKS.useCases}/multi-tb`,
              description: 'Aenean commodo ligula eget.',
            },
            {
              title: 'Laboris nisi',
              to: `${LINKS.useCases}/database-per-tenant`,
              description: 'Nullam quis risus eget.',
            },
          ],
        },
        {
          title: 'Ut aliquip',
          items: [
            {
              title: 'Ex ea commodo',
              to: LINKS.platforms,
              description: 'Donec sed odio dui.',
            },
            {
              title: 'Duis aute',
              to: `${LINKS.useCases}/dev-test`,
              description: 'Cras mattis consectetur purus.',
            },
            {
              title: 'Irure dolor',
              to: `${LINKS.useCases}/ai-agents`,
              description: 'Praesent commodo cursus magna.',
            },
          ],
        },
      ],
    },
    {
      text: 'Docs',
      to: LINKS.docs,
    },
    {
      text: 'Pricing',
      to: LINKS.pricing,
    },
    {
      text: 'Resources',
      sections: [
        {
          title: 'In reprehenderit',
          items: [
            {
              title: 'Voluptate velit',
              to: LINKS.blog,
              description: 'Vestibulum ante ipsum primis.',
            },
            {
              title: 'Esse cillum',
              to: LINKS.caseStudies,
              description: 'Sed ut perspiciatis unde.',
            },
            {
              title: 'Dolore eu',
              to: LINKS.changelog,
              description: 'Nemo enim ipsam voluptatem.',
            },
            {
              title: 'Fugiat nulla',
              to: LINKS.discord,
              description: 'Ut enim ad minima veniam.',
            },
            {
              title: 'Pariatur excepteur',
              to: LINKS.startups,
              description: 'Quis autem vel eum iure.',
            },
          ],
        },
        {
          title: 'Sint occaecat',
          items: [
            {
              title: 'Cupidatat non',
              to: LINKS.aboutUs,
              description: 'At vero eos et accusamus.',
            },
            {
              title: 'Lorem ipsum',
              to: LINKS.careers,
              description: 'Nam libero tempore soluta.',
            },
            {
              title: 'Dolor sit',
              to: LINKS.contactSales,
              description: 'Temporibus autem quibusdam.',
            },
            {
              title: 'Amet consectetur',
              to: LINKS.security,
              description: 'Itaque earum rerum hic.',
            },
            {
              title: 'Adipiscing elit',
              to: LINKS.status,
              description: 'Cum sociis natoque penatibus.',
            },
          ],
        },
      ],
    },
  ],
  footer: [
    {
      heading: 'Company',
      items: [
        {
          text: 'About',
          to: LINKS.aboutUs,
        },
        {
          text: 'Blog',
          to: LINKS.blog,
        },
        {
          text: 'Careers',
          to: LINKS.careers,
        },
        {
          text: 'Contact Sales',
          to: LINKS.contactSales,
        },
        {
          text: 'Security',
          to: LINKS.security,
        },
      ],
    },
    {
      heading: 'Resources',
      items: [
        {
          text: 'Docs',
          to: LINKS.docs,
        },
        {
          text: 'Changelog',
          to: LINKS.changelog,
        },
        {
          text: 'Support',
          to: LINKS.support,
        },
        {
          text: 'Community Guides',
          to: LINKS.guides,
        },
        {
          text: 'FAQs',
          to: LINKS.faqs,
        },
        {
          text: 'PostgreSQL Tutorial',
          to: LINKS.postgresqltutorial,
        },
        {
          text: 'Startups',
          to: LINKS.startups,
        },
      ],
    },
    {
      heading: 'Community',
      items: [
        {
          text: 'Discord',
          to: LINKS.discord,
          icon: 'discord-icon',
        },
        {
          text: 'GitHub',
          to: LINKS.github,
          icon: 'github-icon',
        },
        {
          text: 'X.com',
          to: LINKS.twitter,
          icon: 'x-icon',
        },
        {
          text: 'LinkedIn',
          to: LINKS.linkedin,
          icon: 'linkedin-icon',
        },
        {
          text: 'YouTube',
          to: LINKS.youtube,
          icon: 'youtube-icon',
        },
      ],
    },
    {
      heading: 'Compliance',
      items: [
        {
          text: 'CCPA',
          description: 'Aenean commodo ligula eget.',
          to: LINKS.certCCPA,
        },
        {
          text: 'GDPR',
          description: 'Nullam quis risus eget.',
          to: LINKS.certGDPR,
        },
        {
          text: 'ISO 27001',
          description: 'Donec sed odio dui.',
          to: LINKS.certISO27001,
        },
        {
          text: 'ISO 27701',
          description: 'Cras mattis consectetur purus.',
          to: LINKS.certISO27701,
        },
        {
          text: 'SOC 2',
          description: 'Praesent commodo cursus magna.',
          to: LINKS.certSOC2,
        },
        {
          text: 'HIPAA',
          description: 'Vestibulum ante ipsum primis.',
          to: LINKS.certHIPAA,
          links: [
            {
              text: 'Compliance Guide',
              to: LINKS.hipaaCompliance,
            },
            {
              text: 'Neon’s Sub Contractors',
              to: LINKS.hipaaContractors,
            },
          ],
        },
        {
          text: 'Trust Center',
          to: LINKS.trust,
        },
      ],
    },
  ],
};
