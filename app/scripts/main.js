(function () {
    'use strict';
    $(document).foundation();
    document.webL10n.ready(function() {
        var lang = document.webL10n.getLanguage().substring(0, 2);

        if (lang == "en") {
            document.getElementById('language').value = "en";
        }
        if (lang == "de") {
            document.getElementById('language').value = "de";
        }
    });
})();