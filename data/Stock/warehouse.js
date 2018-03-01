module.exports = {
  breadcrumbs: [{
    label: 'Tableau de bord',
    href: '/dashboard'
  }, {
    label: 'Liste des entrepôts',
    href: '/stock/warehouse/list'
  }, {
    label: 'Entrepôt n°1',
    href: '/stock/warehouse'
  }],
  page: {
    header: {
      icon: 'industry',
      title: 'Entrepôt n°1',
      description: 'WH-01'
    }
  },
  view: {
    warehouse: {
      name: {
        label: 'Nom',
        value: 'Entrepôt n°1',
        type: 'text'
      },
      code: {
        label: 'Code',
        value: 'WH-01',
        type: 'text'
      },
      address: {
        street: {
          label: 'Rue',
          value: '7 allée Jean Lagadic',
          type: 'text'
        },
        postCode: {
          value: 29000,
          label: 'Code postal',
          type: 'text'
        },
        city: {
          value: 'Quimper',
          label: 'Ville',
          type: 'text'
        }
      },
    },
  },
};
