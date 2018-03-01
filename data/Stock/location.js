module.exports = {
  breadcrumbs: [{
    label: 'Tableau de bord',
    href: '/dashboard'
  }, {
    label: 'Liste des emplacements',
    href: '/stock/warehouse/list'
  }, {
    label: 'Etagère n°1',
    href: '/stock/location'
  }],
  page: {
    header: {
      icon: 'map marker alternate',
      title: 'Étagère n°1',
      description: 'INT-ET-01'
    }
  },
  view: {
    location: {
      name: {
        label: 'Nom',
        value: 'Étagère n°1',
        type: 'text'
      },
      code: {
        label: 'Code',
        value: 'INT-ET-01',
        type: 'text'
      },
      
    },
  },
};
