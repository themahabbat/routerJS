'use strict';

var Router = function Router(el, attr, wrapper) {
    var push = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;


    if ($.isArray(el) && $.isArray(attr)) {

        $.each(el, function (index, value) {

            $(value).click(function (e) {

                var target = $(e.target).attr(attr[index]);

                $.ajax({
                    type: 'GET',
                    url: target,
                    success: function success(data) {
                        $(wrapper).html(data);
                        var stateObj = {};
                        if (push) history.pushState(stateObj, null, target);
                    }
                });

                return false;
            });
        });
    } else {
        $(el).click(function (e) {
            var target = $(e.target).attr(attr);

            $.ajax({
                type: 'GET',
                url: target,
                success: function success(data) {
                    $(wrapper).html(data);
                    var stateObj = {};
                    if (push) history.pushState(stateObj, null, target);
                }
            });

            return false;
        });
    }

    window.onpopstate = function (event) {
        $.ajax({
            type: 'GET',
            url: document.location,
            success: function success(data) {
                $(wrapper).html(data);
            }
        });
    };
};
