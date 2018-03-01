module.exports = {
    breadcrumbs: [
        {
            label: 'Tableau de bord',
            href: '/dashboard'
        }, {
            label: 'Liste des commandes',
            href: '/order/list'
        }
    ],
    page: {
        header: {
            icon: 'list',
            title: 'Liste des commandes'
        }
    },
    list: {
        actions: [
            {
                label: 'Voir',
                icon: 'eye'
            }
        ],
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
                values: ['Brouillon', 'Validée', 'Annulée', 'Archivée', 'Complète']
            }
        ],
        headers: [
            {
                name: 'code',
                label: 'Référence'
            }, {
                name: 'state',
                label: 'État'
            }, {
                name: 'createdAt',
                label: 'Créé le'
            }, {
                name: 'totalPrice',
                label: 'Prix total'
            }, {
                name: 'productNumber',
                label: 'Nb produits'
            }, {
                name: 'withAdjustements',
                label: 'Avec promo.'
            }
        ],
        elements: [
            {
                code: 'CMD00000032',
                state: '<a class="ui yellow label"><i class="recycle icon"></i>BROUILLON</a>',
                active: true,
                createdAt: '2018-02-20 12:42:00',
                totalPrice: '32 €',
                productNumber: 2,
                withAdjustements: '<i class="large green check circle icon"></i>'
            }, {
                code: 'CMD00000064',
                state: '<a class="ui green label"><i class="star outline icon"></i>VALIDÉE</a>',
                active: true,
                createdAt: '2018-02-20 12:42:00',
                totalPrice: '64 €',
                productNumber: 10,
                withAdjustements: '<i class="large green check circle icon"></i>'
            }, {
                code: 'CMD00000128',
                state: '<a class="ui red label"><i class="times circle icon"></i>ANNULÉE</a>',
                active: true,
                createdAt: '2018-02-20 12:42:00',
                totalPrice: '128 €',
                productNumber: 1,
                withAdjustements: '<i class="large red times circle icon"></i>'
            }, {
                code: 'CMD00000256',
                state: '<a class="ui grey label"><i class="check circle icon"></i>COMPLÈTE</a>',
                active: true,
                createdAt: '2018-02-20 12:42:00',
                totalPrice: '256 €',
                productNumber: 1,
                withAdjustements: '<i class="large green check circle icon"></i>'
            }, {
                code: 'CMD00000512',
                state: '<a class="ui label"><i class="archive icon"></i>ARCHIVÉE</a>',
                active: true,
                createdAt: '2018-02-20 12:42:00',
                totalPrice: '512 €',
                productNumber: 42,
                withAdjustements: '<i class="large red times circle icon"></i>'
            }
        ]
    }
};
