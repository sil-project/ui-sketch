module.exports = {

  breadcrumbs: [{
      label: 'Tableau de bord',
      href: '#'
    },
    {
      label: 'Liste des opérations',
      href: '#'
    },
    {
      label: 'EXP-00C760E',
      href: '#'
    },
  ],
  page: {
    header: {
      icon: 'truck',
      title: 'Expédition ',
      description: 'n° EXP-00C760E'
    }
  },
  view: {

    code: {
      label: 'Référence',
      value: 'EXP-00C760E',
      type: 'text'
    },
    type: {
      label: 'Type d\'opération',
      value: 'Expédition',
      type: 'text'
    },
    expectedAt: {
      label: 'Date prévue',
      value: '2018-02-12',
      type: 'datetime'
    },
    completedAt: {
      label: 'Date effective',
      value: '',
      type: 'datetime'
    },
    state: {
      color: 'grey',
      label: 'plannifié',
      icon: 'calendar check'
    },
    srcLocation: {
      label: 'Origine',
      value: 'Emplacement Interne',
      type: 'select'
    },
    destLocation: {
      label: 'Destination',
      value: 'Emplacement Clients',
      type: 'select'
    },

    partner: {
      firstname: {
        label: 'Prénom',
        value: 'Romain'
      },
      lastname: {
        label: 'NOM',
        value: 'Sanchez'
      },
      email: {
        label: 'Adresse email',
        value: 'romain.sanchez@libre-informatique.fr'
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
    }
  },
  list: {
    actions: [],
    filters: [{
      name: 'name',
      label: 'Nom',
      type: 'text'
    }, {
      name: 'createdAt',
      label: 'Date de création',
      type: 'datetime'
    }, {
      name: 'state',
      label: 'État',
      type: 'select',
      values: ['Valide', 'Brouillon', 'Annulée', 'Archivée']
    }],
    headers: [{
      name: 'name',
      label: 'Nom'
    }, {
      name: 'code',
      label: 'Référence'
    }, {
      name: 'active',
      label: 'Actif'
    }, {
      name: 'createdAt',
      label: 'Créé le'
    }, {
      name: 'unitPrice',
      label: 'Prix unitaire'
    }, {
      name: 'quantity',
      label: 'Quantité'
    }],
    elements: [{
      name: 'The awesome and incredible product 32',
      code: 'AWE-INC-0032',
      active: true,
      createdAt: '2018-02-20 12:42:00',
      unitPrice: '32 €',
      quantity: '<div class="ui input"><input type="number" size="3"></div>'
    }, {
      name: 'The awesome and incredible product 64',
      code: 'AWE-INC-0064',
      active: true,
      createdAt: '2018-02-20 12:42:00',
      unitPrice: '64 €',
      quantity: '<div class="ui input"><input type="number" size="3"></div>'
    }, {
      name: 'The awesome and incredible product 128',
      code: 'AWE-INC-0128',
      active: true,
      createdAt: '2018-02-20 12:42:00',
      unitPrice: '128 €',
      quantity: '<div class="ui input"><input type="number" size="3"></div>'
    }, {
      name: 'The awesome and incredible product 256',
      code: 'AWE-INC-0256',
      active: true,
      createdAt: '2018-02-20 12:42:00',
      unitPrice: '256 €',
      quantity: '<div class="ui input"><input type="number" size="3"></div>'
    }, {
      name: 'The awesome and incredible product 512',
      code: 'AWE-INC-0512',
      active: true,
      createdAt: '2018-02-20 12:42:00',
      unitPrice: '512 €',
      quantity: '<div class="ui input"><input type="number" size="3"></div>'
    }, {
      name: 'The awesome and incredible product 1024',
      code: 'AWE-INC-1024',
      active: false,
      createdAt: '2018-02-14 18:36:00',
      unitPrice: '1024 €',
      quantity: '<div class="ui input"><input type="number" size="3"></div>'
    }]
  }
};
