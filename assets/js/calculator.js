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
        calc_month_price(value);

        var arr = get_price_by_range(value);
        // add style to row of changed range price, remove from other's
        $('.table_row').removeClass('lighterBlueBg');
        $('#' + arr[1]).closest('.table_row').addClass('lighterBlueBg');
        //
        var annual_calc = calc_annual_price(value, arr[0], discount);
        //

        $('#total_annual').html('$' + annual_calc);
    });

    slider.noUiSlider.on('end', function(value, handle){
        employees_num.removeClass('form-control_focused');
    });

    employees_num.on('change', function(){
        var the_input = $(this),
             input_val = the_input.val(),
             the_value = 10,
             ann;
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
        calc_month_price(the_value);

        var arr = get_price_by_range(the_value);
        // add style to row of changed range price, remove from other's
        $('.table_row').removeClass('lighterBlueBg');
        $('#' + arr[1]).closest('.table_row').addClass('lighterBlueBg');

        ann = calc_annual_price(employees_num.val(), arr[0], discount);
        console.log(ann);
        $('#total_annual').html('$' + ann);
    });

    // ----------- price calc --------------- //

    // -- static prices
    var static_prices = {
        'e_10_19': '4.99',
        'e_20_49': '4.60',
        'e_50_99': '4.20',
        'e_100_250': '3.80',
        'e_250_plus': '3.50' // this needs to be definied
    };

    // make this dynamic !!!!!!!
    var discount = 15;
    $('#e_10_19, #total_monthly').html('$49.<sup>90</sup>');
    $('#total_annual').html('$508.<sup>98</sup>');
    //// !!!!!!!!!!!!!!!!!!!!!!!

    function calc_month_price(emp_num){
        var arr = get_price_by_range(emp_num),
            price = currency_formatted((+emp_num) * arr[0]);
            //price = ((+emp_num) * arr[0]).toFixed(2);

        // add price to corresponding div
        $('#' + arr[1] + ', #total_monthly').html('$' + price);
        // add style to row of changed range price, remove from other's
        $('#' + arr[1]).closest('.table_row').addClass('lighterBlueBg');
        // remove all other prices in divs
        $('.monthly_prices').not('#' + arr[1]).html('-');

        //return price;

    }

    function calc_annual_price(emp_num, price, discount){
        // decimals price needed???!!!!
        var discount = +discount,
            non_disc_price = 12 * (+emp_num) * (+price),
            diff_percentage = non_disc_price * (discount / 100),
            return_val = non_disc_price - diff_percentage;

        return currency_formatted(return_val);
        //return return_val.toFixed(2);
    }

    // get price per employee depending of the number of emplyess
    // range prices object
    function get_price_by_range(emp_num){

        var price,
            div_id,
            emp_num = (+emp_num),
            return_val = [];

        if(emp_num >= 10 && emp_num <= 19){

             price = (+static_prices.e_10_19);
             div_id = 'e_10_19';

        }else if(emp_num >= 20 && emp_num <= 49){

            price = (+static_prices.e_20_49);
            div_id = 'e_20_49';

        }else if(emp_num >= 50 && emp_num <= 99){

            price = (+static_prices.e_50_99);
            div_id = 'e_50_99';

        }else if(emp_num >= 100 && emp_num <= 250){

            price = (+static_prices.e_100_250);
            div_id = 'e_100_250';

        }else{  // more than 250 (needs to be defined)

            price = (+static_prices.e_250_plus);
            div_id = 'e_250_plus';
        }

        return_val.push(price);
        return_val.push(div_id);

        return return_val;
    }


    // tax select box for Canada
    $.getJSON( "assets/json/provinces.json", function( data ) {
     var html = '';
      //var items = '';
      $.each( data, function( key, val ) {
        html += '<option value="' + val.tax_rate  + '">' + val.province_name + ': ' + val.tax_rate + '% ' + val.type + '</option>';
      });

        $('#province').append(html);
    });

    // apply tax
    $('#province').on('change', function(){
        var emp = +$('#employees_num').val(),
            price_per_emp = get_price_by_range(emp)[0],

            total_monthly = +(price_per_emp * (+emp)).toFixed(2),
            total_annual = total_monthly * 12,
            discount_annual_sum = (total_annual * (discount/100)).toFixed(2),
            discount_annual = +(total_annual - discount_annual_sum).toFixed(2),
            tax = $(this).val(),
            mothly_added_tax = (total_monthly + (total_monthly * (tax/100))).toFixed(2),
            annual_added_tax = (discount_annual + (discount_annual * (tax/100))).toFixed(2);

            /*console.log(typeof total_monthly);
            console.log(typeof discount_annual);
            console.log(mothly_added_tax);
            console.log(annual_added_tax);*/

        $('#total_monthly').html('$' + currency_formatted(mothly_added_tax));
        $('#total_annual').html('$' + currency_formatted(annual_added_tax));

    });

    function currency_formatted(amount) {
        var i = parseFloat(amount), s, split;
        if(isNaN(i)) { i = 0.00; }
        var minus = '';
        if(i < 0) { minus = '-'; }
        i = Math.abs(i);
        i = parseInt((i + .005) * 100);
        i = i / 100;
        s = new String(i);
        if(s.indexOf('.') < 0) { s += '.00'; }
        if(s.indexOf('.') == (s.length - 2)) { s += '0'; }

        split = s.split('.');
        s = minus + split[0] + '.<sup>' + split[1] + '</sup>';
        return s;
    }


    // add current year
    var current_year = new Date().getFullYear();
    $('#current_year').html(current_year);


})();