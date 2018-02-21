module.exports = {
  breadcrumbs: [{
      label: 'Tableau de bord',
      href: '#'
    },
    {
      label: 'Liste des produits',
      href: '#'
    },
    {
      label: 'AWE-INC-0512',
      href: '#'
    }
  ],
  page: {
    header: {
      icon: 'archive',
      title: 'The awesome and incredible product',
      description: 'An awesome product that people must buy !'
    }
  },
  view: {
    name: {
      label: 'Nom',
      value: 'The awesome and incredible product',
      form: {
        type: 'text'
      }
    },
    code: {
      label: 'Référence',
      value: 'AWE-INC-0512',
      form: {
        type: 'text'
      }
    },
    description: {
      label: 'Description',
      value: 'An awesome product that people must buy !',
      form: {
        type: 'textarea'
      }
    },
    active: {
      label: 'Actif',
      value: true,
      form: {
        type: 'checkbox'
      }
    }
  },
  create: {
    name: {
      label: 'Nom',
      form: {
        type: 'text'
      }
    },
    code: {
      label: 'Référence',
      form: {
        type: 'text'
      }
    },
    description: {
      label: 'Description',
      form: {
        type: 'textarea'
      }
    },
    options: {
      label: 'Types d\'options',
      form: {
        type: 'checkboxes',
        values: ['Couleur', 'Packaging', 'Taille', 'Pointure']
      }
    },
    optionsValues_Couleur: {
      label: 'Couleur',
      form: {
        type: 'checkboxes',
        values: ['Rouge', 'Bleu', 'Jaune', 'Noir', 'Vert']
      }
    },
    optionsValues_Packaging: {
      label: 'Packaging',
      form: {
        type: 'checkboxes',
        values: ['Édition standard', 'Édition Deluxe', 'Édition limitée']
      }
    },
    optionsValues_Taille: {
      label: 'Taille',
      form: {
        type: 'checkboxes',
        values: [
          'S',
          'M',
          'L',
          'XL',
          '2XL',
          '3XL'
        ]
      }
    },
    optionsValues_Pointure: {
      label: 'Taille',
      form: {
        type: 'checkboxes',
        values: [
          '36',
          '37',
          '38',
          '39',
          '40',
          '41',
          '42',
          '43',
          '44',
          '45'
        ]
      }
    }
  },
  variants: {
    'AWE-INC-512-RED-STD': {
      name: {
        label: 'Nom',
        value: 'The awesome and incredible product',
        form: {
          type: 'text'
        }
      },
      code: {
        label: 'Référence',
        value: 'AWE-INC-512-RED-STD',
        form: {
          type: 'text'
        }
      },
      description: {
        label: 'Description',
        value: 'An awesome product that people must buy !',
        form: {
          type: 'textarea'
        }
      },
      active: {
        label: 'Active',
        value: true,
        form: {
          type: 'checkbox'
        }
      },
      price: {
        label: 'Prix',
        value: '128 €',
        form: {
          type: 'text'
        }
      },
      color: {
        label: 'Couleur',
        value: 'Rouge',
        form: {
          type: 'select',
          values: ['Rouge', 'Bleu', 'Jaune']
        }
      },
      packaging: {
        label: 'Packaging',
        value: 'Édition Standard',
        form: {
          type: 'select',
          values: ['Édition Standard', 'Édition Deluxe']
        }
      }
    },
    'AWE-INC-512-BLU-STD': {
      name: {
        label: 'Nom',
        value: 'The awesome and incredible product',
        form: {
          type: 'text'
        }
      },
      code: {
        label: 'Référence',
        value: 'AWE-INC-512-BLU-STD',
        form: {
          type: 'text'
        }
      },
      description: {
        label: 'Description',
        value: 'An awesome product that people must buy !',
        form: {
          type: 'textarea'
        }
      },
      active: {
        label: 'Active',
        value: true,
        form: {
          type: 'checkbox'
        }
      },
      price: {
        label: 'Prix',
        value: '138 €',
        form: {
          type: 'text'
        }
      },
      color: {
        label: 'Couleur',
        value: 'Bleu',
        form: {
          type: 'select',
          values: ['Rouge', 'Bleu', 'Jaune']
        }
      },
      packaging: {
        label: 'Packaging',
        value: 'Édition Standard',
        form: {
          type: 'select',
          values: ['Édition Standard', 'Édition Deluxe']
        }
      }
    },
    'AWE-INC-512-YEL-STD': {
      name: {
        label: 'Nom',
        value: 'The awesome and incredible product',
        form: {
          type: 'text'
        }
      },
      code: {
        label: 'Référence',
        value: 'AWE-INC-512-YEL-STD',
        form: {
          type: 'text'
        }
      },
      description: {
        label: 'Description',
        value: 'An awesome product that people must buy !',
        form: {
          type: 'textarea'
        }
      },
      active: {
        label: 'Active',
        value: true,
        form: {
          type: 'checkbox'
        }
      },
      price: {
        label: 'Prix',
        value: '148 €',
        form: {
          type: 'text'
        }
      },
      color: {
        label: 'Couleur',
        value: 'Rouge',
        form: {
          type: 'select',
          values: ['Rouge', 'Bleu', 'Jaune']
        }
      },
      packaging: {
        label: 'Packaging',
        value: 'Édition Standard',
        form: {
          type: 'select',
          values: ['Édition Standard', 'Édition Deluxe']
        }
      }
    },
    'AWE-INC-512-RED-DLX': {
      name: {
        label: 'Nom',
        value: 'The awesome and incredible product',
        form: {
          type: 'text'
        }
      },
      code: {
        label: 'Référence',
        value: 'AWE-INC-512-RED-DLX',
        form: {
          type: 'text'
        }
      },
      description: {
        label: 'Description',
        value: 'An awesome product that people must buy !',
        form: {
          type: 'textarea'
        }
      },
      active: {
        label: 'Active',
        value: true,
        form: {
          type: 'checkbox'
        }
      },
      price: {
        label: 'Prix',
        value: '158 €',
        form: {
          type: 'text'
        }
      },
      color: {
        label: 'Couleur',
        value: 'Rouge',
        form: {
          type: 'select',
          values: ['Rouge', 'Bleu', 'Jaune']
        }
      },
      packaging: {
        label: 'Packaging',
        value: 'Édition Deluxe',
        form: {
          type: 'select',
          values: ['Édition Standard', 'Édition Deluxe']
        }
      }
    },
    'AWE-INC-512-BLU-DLX': {
      name: {
        label: 'Nom',
        value: 'The awesome and incredible product',
        form: {
          type: 'text'
        }
      },
      code: {
        label: 'Référence',
        value: 'AWE-INC-512-BLU-DLX',
        form: {
          type: 'text'
        }
      },
      description: {
        label: 'Description',
        value: 'An awesome product that people must buy !',
        form: {
          type: 'textarea'
        }
      },
      active: {
        label: 'Active',
        value: true,
        form: {
          type: 'checkbox'
        }
      },
      price: {
        label: 'Prix',
        value: '168 €',
        form: {
          type: 'text'
        }
      },
      color: {
        label: 'Couleur',
        value: 'Bleu',
        form: {
          type: 'select',
          values: ['Rouge', 'Bleu', 'Jaune']
        }
      },
      packaging: {
        label: 'Packaging',
        value: 'Édition Deluxe',
        form: {
          type: 'select',
          values: ['Édition Standard', 'Édition Deluxe']
        }
      }
    },
    'AWE-INC-512-YEL-DLX': {
      name: {
        label: 'Nom',
        value: 'The awesome and incredible product',
        form: {
          type: 'text'
        }
      },
      code: {
        label: 'Référence',
        value: 'AWE-INC-512-YEL-DLX',
        form: {
          type: 'text'
        }
      },
      description: {
        label: 'Description',
        value: 'An awesome product that people must buy !',
        form: {
          type: 'textarea'
        }
      },
      active: {
        label: 'Active',
        value: true,
        form: {
          type: 'checkbox'
        }
      },
      price: {
        label: 'Prix',
        value: '178 €',
        form: {
          type: 'text'
        }
      },
      color: {
        label: 'Couleur',
        value: 'Rouge',
        form: {
          type: 'select',
          values: ['Rouge', 'Bleu', 'Jaune']
        }
      },
      packaging: {
        label: 'Packaging',
        value: 'Édition Deluxe',
        form: {
          type: 'select',
          values: ['Édition Standard', 'Édition Deluxe']
        }
      }
    }
  }
};
