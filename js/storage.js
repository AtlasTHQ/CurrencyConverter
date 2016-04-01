/**
 * Created by 1612972679 on 17.3.2016.
 */
/**
 * Created by 1612972679 on 10.3.2016.
 */
/**
 * Created by 1612972679 on 28.1.2016.
 */
$(document).ready(function(){
    model = {
        localJson: {},
        currency: 0

    }
    controller = {
        init: function () {
            //Hérna næ ég í gögnin með ajax
            $.getJSON("js/api.json", function (data) {
                model.localJson = data;
            }).done(function () {
                view.init()
            });
            /*$.ajax({
             'async': false,
             'global': false,
             'url': "js/api.json",
             'dataType': "json",
             'success': function (data) {
             localJson = data;
             console.log(localJson);

             $(document).on('change', 'select', function () {
             //console.log($(this).val()); // the selected options’s value
             // if you want to do stuff based on the OPTION element:
             var opt = $(this).val();//.find('option:selected')[0];
             console.log(opt);
             switch (opt) {
             case "EUR":
             console.log("Evra!");

             break;
             case 2:
             console.log("USD!");
             break;
             case 3:
             break;
             case 4:
             break;
             case 5:
             break;
             case 6:
             break;
             case 7:
             break;
             case 8:
             break;
             case 9:
             break;
             case 10:
             break;
             case 11:
             break;
             case 12:
             break;
             case 13:
             break;
             case 14:
             break;
             case 15:
             break;
             case 16:
             break;
             case 17:
             break;
             case 18:
             break;
             }

             var chart = c3.generate({
             bindto: '#chart',
             data: {
             columns: [
             ['ISK', 30, 200, 100, 400, 150, 250],
             [loadChart(opt)]
             ]
             }
             });
             })
             }
             });
             $("button").click(function(){
             $("p").toggle();
             });*/
        }
    };
    view = {
        init:function(){
            var gogn = controller.getData();
            //$("nafnÁdiv").html(gogn.eitthvað);
        }
    }

}
controller.init();
});

