$(document).ready(function() {
    model = {
        localJson: {},
        currency: 0

    };

    controller = {
        init: function () {
            $.getJSON("js/api.json", function (data) {
                model.localJson = data;
            }).done(function () {
                console.log(data)
                view.init()
            });
            $("button").click(function(){
                $("p").toggle();
            });
            $(document).on('change', 'select', function(){
                console.log($(this).val()); // the selected options’s value
                // if you want to do stuff based on the OPTION element:
                var opt = $(this).find('option:selected')[0];
                console.log(opt);
            });
        },
    };

    view = {
        init: function () {
            forEach()
        }
    };
    controller.init();
});