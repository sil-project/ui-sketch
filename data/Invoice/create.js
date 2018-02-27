module.exports = {
  breadcrumbs: [{
      label: 'Tableau de bord',
      href: '#'
    },
    {
      label: 'Facturation',
      href: '#'
    },
    {
      label: 'Nouvelle facture',
      href: '#'
    }
  ],
  page: {
    header: {
      icon: 'calculator',
      title: 'Librinfo',
      description: 'CU456200'
    }
  },
  view: {
    code: {
      label: 'Code',
      value: 'FA0000025'
    },
    company_name: {
      label: 'name',
      value: 'Libre Informatique SARL',
      form: {
        type: 'text'
      }
    },
    siret: {
      label: 'Siret',
      value: '732 829 320',
      form: {
        type: 'text'
      }
    },
    address: {
      label: 'Address',
      value: '7 allée Jean Lagadic 29000 Quimper',
      form: {
        type: 'text'
      }
    },
    vat_number: {
      label: 'VAT number',
      value: 'FR 28 732 829 320',
      form: {
        type: 'text'
      }
    },
    currency: {
      label: 'Currency',
      value: 'Euro',
      form: {
        type: 'select',
        values: ['Euro', 'USD', 'GBP']
      },
    },
    status: {
      label: 'Status',
      value: 'Draft'
    },
    tax_rate: {
      label: 'Tax rate',
      value: '19,6',
      unit: '%',
      form: {
        type: 'text'
      }
    },
    due_date: {
      label: 'Limit',
      value: '30',
      unit: 'days',
      form: {
        type: 'number'
      }
    },
    payment_terms: {
      label: 'Conditions',
      value: 'A penalty of 10% of the amount will be charged for each week after the initial delay',
      form: {
        type: 'textarea'
      }
    },
    customer_firstname: {
      label: 'First name',
      value: 'Patrick',
      form: {
        type: 'text'
      }
    },
    customer_lastname: {
      label: 'Last name',
      value: 'Puydebas',
      form: {
        type: 'text'
      }
    }
  }
};
