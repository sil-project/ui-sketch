module.exports = {
    breadcrumbs: [
        {
            label: 'Tableau de bord',
            href: '/'
        }, {
            label: 'Liste des commandes',
            href: '/order/list'
        }, {
            label: 'CMD00000512',
            href: '/order'
        }
    ],
    page: {
        header: {
            icon: 'tasks',
            title: 'Order #CMD00000512',
            description: ''
        }
    },
    view: {
        code: {
            label: 'Référence',
            value: 'CMD00000512',
            form: {
                type: 'hidden'
            }
        },
        source: {
            label: 'Source',
            value: 'VEL - Vente en ligne',
            form: {
                type: 'select',
                values: ['N/A', 'VEL - Vente en ligne', 'VPC - Vente par correspondance', 'VSP - Vente sur place']
            }
        },
        state: {
            label: 'Brouillon',
            color: 'yellow'
        }
    },
    account: {
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
        }
    },
    invoiceAddress: {
        street: {
            label: 'Rue',
            value: '7 allée Jean Lagadic',
            form: {
                type: 'text'
            }
        },
        postCode: {
            value: 29000,
            label: 'Code postal',
            form: {
                type: 'text'
            }
        },
        city: {
            value: 'Quimper',
            label: 'Ville',
            form: {
                type: 'text'
            }
        }
    },
    deliveryAddress: {
        street: {
            label: 'Rue',
            value: '7 allée Jean Lagadic',
            form: {
                type: 'text'
            }
        },
        postCode: {
            value: 29000,
            label: 'Code postal',
            form: {
                type: 'text'
            }
        },
        city: {
            value: 'Quimper',
            label: 'Ville',
            form: {
                type: 'text'
            }
        }
    },
    list: {
        options: {
            actions: []
        },
        filters: [
            {
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
                form: {
                    values: ['Valide', 'Brouillon', 'Annulé', 'Archivé']
                }
            }, {
                name: 'active',
                label: 'Actif',
                type: 'checkbox'
            }
        ],
        headers: [
            {
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
            }
        ],
        elements: [
            {
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
            }
        ]
    }
};
