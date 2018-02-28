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
      type: 'text'
    },
    siret: {
      label: 'Siret',
      value: '732 829 320',
      type: 'text'
    },
    address: {
      label: 'Address',
      value: '7 allée Jean Lagadic 29000 Quimper',
      type: 'text'
    },
    vat_number: {
      label: 'VAT number',
      value: 'FR 28 732 829 320',
      type: 'text'
    },
    currency: {
      label: 'Currency',
      value: 'Euro',
      type: 'select',
      values: ['Euro', 'USD', 'GBP']
    },
    status: {
      label: 'Status',
      value: 'Draft'
    },
    tax_rate: {
      label: 'Tax rate',
      value: '19,6',
      unit: '%',
      type: 'text'
    },
    due_date: {
      label: 'Limit',
      value: '30',
      unit: 'days',
      type: 'number'
    },
    payment_terms: {
      label: 'Conditions',
      value: 'A penalty of 10% of the amount will be charged for each week after the initial delay',
      type: 'textarea'
    },
    customer_firstname: {
      label: 'First name',
      value: 'Patrick',
      type: 'text'
    },
    customer_lastname: {
      label: 'Last name',
      value: 'Puydebas',
      type: 'text'
    }
  }
};
