/*
 * Developed by EngramWeb.com
 * email: kontakt@engramweb.com
 * Client: TalentClick.com
 * 2017
*/
(function() {

    'use strict';



    // sliders settings
    var sq_sliders = {
        'min': [10],
        '100': [100],
        '150': [150],
        '200': [200],
        'max': [250]
    };
    var slider = document.getElementById('employees'),
        employees_num = $('#employees_num'),
        emp_num = $('.emp_num');

        // default employees num.
        emp_num.html('10');

    noUiSlider.create(slider, {
        start: [10],
        connect: 'lower',
        range:{
                'min': [  10 ],
                'max': [ 250 ]
            },
        pips: {
                mode: 'range',
                density: 10
        },
        tooltips: true,
        format: wNumb({
                decimals: 0
        })
    });

    slider.noUiSlider.on('slide', function(value, handle){
        employees_num.addClass('form-control_focused').val(value);
        emp_num.html(value);
    });

    slider.noUiSlider.on('end', function(value, handle){
        employees_num.removeClass('form-control_focused');
    });

    employees_num.on('input', function(){
        var the_input = $(this),
             input_val = the_input.val(),
             the_value = 10;
        if(input_val > 250){
            the_value = 250;
        }else if(input_val < 10){
            the_value = 10;
        }else{
            the_value = input_val;
        }
        employees_num.val(the_value);
        slider.noUiSlider.set(the_value);
        emp_num.html(the_value);
    });



})();