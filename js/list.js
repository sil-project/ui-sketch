$(document).ready(function() {
    var filterSelect = $('.ui.filter.list');

    var visibleFilters = 0;

    filterSelect.dropdown({
        action: 'combo',
        onAdd: function(value, text, $selectedItem) {
            visibleFilters++;

            if (visibleFilters == 1) {
                $('.ui.filters').transition('slide down in');
            }

            toggleFilter(value);
        },
        onRemove: function(value, text, $selectedItem) {
            visibleFilters--;

            if (visibleFilters == 0) {
                $('.ui.filters').transition('slide down out');
            }

            toggleFilter(value);
        }
    });

    function toggleFilter(value) {
        var filters = $('.ui.filters');
        var filterElement = filters.find('.ui.filter[data-name="' + value + '"]');
        filterElement.transition('slide down');
        filterElement.prependTo(filters);
    }
});
