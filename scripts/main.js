(function () {
    'use strict';

    document.querySelector('#testbutton').addEventListener('click', function () {
       alert('foo!!');
    });

    document.querySelector('#js-warning').setAttribute('hidden', 'hidden');
}());