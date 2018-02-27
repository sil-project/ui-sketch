module.exports = {
    breadcrumbs: [
        {
            label: 'Tableau de bord',
            href: '/dashboard'
        }, {
            label: 'Liste des produits',
            href: '/product/list'
        }
    ],
    page: {
        header: {
            icon: 'list',
            title: 'Liste des produits'
        }
    },
    list: {
        options: {
            actions: [
                {
                    label: 'Voir',
                    icon: 'eye'
                }, {
                    label: 'Archiver',
                    icon: 'archive'
                }, {
                    label: 'Gérer les stocks',
                    icon: 'cube'
                }, {
                    label: 'Activer',
                    icon: 'check circle outline'
                }
            ]
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
