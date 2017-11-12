import $ from 'jquery';

function component() {
    var element = $('<div>');

    element.html('Unify version 2');

    return element;
}

$('body').append(component());