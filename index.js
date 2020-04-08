'use strict';



function watch() {
    $('form').submit(event => {
        event.preventDefault();
        const state = $('#searchState').val();
        const maxResults = $('#searchMaxResults').val();
        console.log(state, maxResults);
    });
}

$(watch);