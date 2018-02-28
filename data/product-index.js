module.exports = {
    template: require('./template-data'),
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
            type: 'text'
        },
        code: {
            label: 'Référence',
            value: 'AWE-INC-0512',
            type: 'text'
        },
        description: {
            label: 'Description',
            value: 'An awesome product that people must buy !',
            type: 'textarea'
        },
        active: {
            label: 'Actif',
            value: true,
            type: 'checkbox'
        }
    },
    create: {
        name: {
            label: 'Nom',
            type: 'text'
        },
        code: {
            label: 'Référence',
            type: 'text'
        },
        description: {
            label: 'Description',
            type: 'textarea'
        },
        options: {
            label: 'Types d\'options',
            type: 'checkboxes',
            values: ['Couleur', 'Packaging', 'Taille', 'Pointure']
        },
        optionsValues_Couleur: {
            label: 'Couleur',
            type: 'checkboxes',
            values: ['Rouge', 'Bleu', 'Jaune', 'Noir', 'Vert']
        },
        optionsValues_Packaging: {
            label: 'Packaging',
            type: 'checkboxes',
            values: ['Édition standard', 'Édition Deluxe', 'Édition limitée']
        },
        optionsValues_Taille: {
            label: 'Taille',
            type: 'checkboxes',
            values: [
                'S',
                'M',
                'L',
                'XL',
                '2XL',
                '3XL'
            ]
        },
        optionsValues_Pointure: {
            label: 'Taille',
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
    },
    variants: {
        'AWE-INC-512-RED-STD': {
            name: {
                label: 'Nom',
                value: 'The awesome and incredible product',
                type: 'text'
            },
            code: {
                label: 'Référence',
                value: 'AWE-INC-512-RED-STD',
                type: 'text'
            },
            description: {
                label: 'Description',
                value: 'An awesome product that people must buy !',
                type: 'textarea'
            },
            active: {
                label: 'Active',
                value: true,
                type: 'checkbox'
            },
            price: {
                label: 'Prix',
                value: '128 €',
                type: 'text'
            },
            color: {
                label: 'Couleur',
                value: 'Rouge',
                type: 'select',
                values: ['Rouge', 'Bleu', 'Jaune']
            },
            packaging: {
                label: 'Packaging',
                value: 'Édition Standard',
                type: 'select',
                values: ['Édition Standard', 'Édition Deluxe']
            }
        },
        'AWE-INC-512-BLU-STD': {
            name: {
                label: 'Nom',
                value: 'The awesome and incredible product',
                type: 'text'
            },
            code: {
                label: 'Référence',
                value: 'AWE-INC-512-BLU-STD',
                type: 'text'
            },
            description: {
                label: 'Description',
                value: 'An awesome product that people must buy !',
                type: 'textarea'
            },
            active: {
                label: 'Active',
                value: true,
                type: 'checkbox'
            },
            price: {
                label: 'Prix',
                value: '138 €',
                type: 'text'
            },
            color: {
                label: 'Couleur',
                value: 'Bleu',
                type: 'select',
                values: ['Rouge', 'Bleu', 'Jaune']
            },
            packaging: {
                label: 'Packaging',
                value: 'Édition Standard',
                type: 'select',
                values: ['Édition Standard', 'Édition Deluxe']
            }
        },
        'AWE-INC-512-YEL-STD': {
            name: {
                label: 'Nom',
                value: 'The awesome and incredible product',
                type: 'text'
            },
            code: {
                label: 'Référence',
                value: 'AWE-INC-512-YEL-STD',
                type: 'text'
            },
            description: {
                label: 'Description',
                value: 'An awesome product that people must buy !',
                type: 'textarea'
            },
            active: {
                label: 'Active',
                value: true,
                type: 'checkbox'
            },
            price: {
                label: 'Prix',
                value: '148 €',
                type: 'text'
            },
            color: {
                label: 'Couleur',
                value: 'Rouge',
                type: 'select',
                values: ['Rouge', 'Bleu', 'Jaune']
            },
            packaging: {
                label: 'Packaging',
                value: 'Édition Standard',
                type: 'select',
                values: ['Édition Standard', 'Édition Deluxe']
            }
        },
        'AWE-INC-512-RED-DLX': {
            name: {
                label: 'Nom',
                value: 'The awesome and incredible product',
                type: 'text'
            },
            code: {
                label: 'Référence',
                value: 'AWE-INC-512-RED-DLX',
                type: 'text'
            },
            description: {
                label: 'Description',
                value: 'An awesome product that people must buy !',
                type: 'textarea'
            },
            active: {
                label: 'Active',
                value: true,
                type: 'checkbox'
            },
            price: {
                label: 'Prix',
                value: '158 €',
                type: 'text'
            },
            color: {
                label: 'Couleur',
                value: 'Rouge',
                type: 'select',
                values: ['Rouge', 'Bleu', 'Jaune']
            },
            packaging: {
                label: 'Packaging',
                value: 'Édition Deluxe',
                type: 'select',
                values: ['Édition Standard', 'Édition Deluxe']
            }
        },
        'AWE-INC-512-BLU-DLX': {
            name: {
                label: 'Nom',
                value: 'The awesome and incredible product',
                type: 'text'
            },
            code: {
                label: 'Référence',
                value: 'AWE-INC-512-BLU-DLX',
                type: 'text'
            },
            description: {
                label: 'Description',
                value: 'An awesome product that people must buy !',
                type: 'textarea'
            },
            active: {
                label: 'Active',
                value: true,
                type: 'checkbox'
            },
            price: {
                label: 'Prix',
                value: '168 €',
                type: 'text'
            },
            color: {
                label: 'Couleur',
                value: 'Bleu',
                type: 'select',
                values: ['Rouge', 'Bleu', 'Jaune']
            },
            packaging: {
                label: 'Packaging',
                value: 'Édition Deluxe',
                type: 'select',
                values: ['Édition Standard', 'Édition Deluxe']
            }
        },
        'AWE-INC-512-YEL-DLX': {
            name: {
                label: 'Nom',
                value: 'The awesome and incredible product',
                type: 'text'
            },
            code: {
                label: 'Référence',
                value: 'AWE-INC-512-YEL-DLX',
                type: 'text'
            },
            description: {
                label: 'Description',
                value: 'An awesome product that people must buy !',
                type: 'textarea'
            },
            active: {
                label: 'Active',
                value: true,
                type: 'checkbox'
            },
            price: {
                label: 'Prix',
                value: '178 €',
                type: 'text'
            },
            color: {
                label: 'Couleur',
                value: 'Rouge',
                type: 'select',
                values: ['Rouge', 'Bleu', 'Jaune']
            },
            packaging: {
                label: 'Packaging',
                value: 'Édition Deluxe',
                type: 'select',
                values: ['Édition Standard', 'Édition Deluxe']
            }
        }
    }
};
