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
    }
};
