module.exports = {
    breadcrumbs: [
        {
            label: 'Tableau de bord',
            href: '/'
        }, {
            label: 'Nouvelle commande',
            href: '/order/create'
        }
    ],
    page: {
        header: {
            icon: 'tasks',
            title: 'Nouvelle commande',
            description: 'Créez votre commande par étapes'
        }
    },
    create: {
        code: {
            label: 'Référence',
            value: '',
            form: {
                type: 'hidden'
            }
        },
        source: {
            label: 'Source',
            value: 'N/A',
            form: {
                type: 'select',
                values: ['N/A', 'VEL - Vente en ligne', 'VPC - Vente par correspondance', 'VSP - Vente sur place']
            }
        },
        account_firstname: {
            label: 'Prénom',
            value: '',
            form: {
                type: 'text'
            }
        },
        account_lastname: {
            label: 'NOM',
            value: '',
            form: {
                type: 'text'
            }
        },
        account_email: {
            label: 'Adresse email',
            value: '',
            form: {
                type: 'text'
            }
        },
        invoiceAddress_street: {
            label: 'Rue',
            value: '',
            form: {
                type: 'text'
            }
        },
        invoiceAddress_postCode: {
            label: 'Code postal',
            value: '',
            form: {
                type: 'text'
            }
        },
        invoiceAddress_city: {
            label: 'Ville',
            value: '',
            form: {
                type: 'text'
            }
        },
        deliveryAddress_street: {
            label: 'Rue',
            value: '',
            form: {
                type: 'text'
            }
        },
        deliveryAddress_postCode: {
            label: 'Code postal',
            value: '',
            form: {
                type: 'text'
            }
        },
        deliveryAddress_city: {
            label: 'Ville',
            value: '',
            form: {
                type: 'text'
            }
        }
    },
    list: {
        options: {
            actions: []
        },
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
            }
        ],
        elements: [
            {
                name: 'The awesome and incredible product 32',
                code: 'AWE-INC-0032',
                active: true,
                createdAt: '2018-02-20 12:42:00'
            }, {
                name: 'The awesome and incredible product 64',
                code: 'AWE-INC-0064',
                active: true,
                createdAt: '2018-02-20 12:42:00'
            }, {
                name: 'The awesome and incredible product 128',
                code: 'AWE-INC-0128',
                active: true,
                createdAt: '2018-02-20 12:42:00'
            }, {
                name: 'The awesome and incredible product 256',
                code: 'AWE-INC-0256',
                active: true,
                createdAt: '2018-02-20 12:42:00'
            }, {
                name: 'The awesome and incredible product 512',
                code: 'AWE-INC-0512',
                active: true,
                createdAt: '2018-02-20 12:42:00'
            }, {
                name: 'The awesome and incredible product 1024',
                code: 'AWE-INC-1024',
                active: false,
                createdAt: '2018-02-14 18:36:00'
            }
        ]
    }
};
