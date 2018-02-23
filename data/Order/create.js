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
    }
};
