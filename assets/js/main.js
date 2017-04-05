(function() {

    'use strict';

    // sliders settings
    var sq_sliders = {
        'min': [1],
        '25': [25],
        '50': [50],
        '75': [75],
        'max': [99]
    };
    var wpp_sliders = {
        'min': [1],
        '20': [20],
        '40': [40],
        '60': [60],
        '80': [80],
        'max': [99]
    };

    // SQ dom elements
    var slider_1 = document.getElementById('sq_1'),
        slider_2 = document.getElementById('sq_2'),
        slider_3 = document.getElementById('sq_3'),
        slider_4 = document.getElementById('sq_4'),
        slider_5 = document.getElementById('sq_5'),
        slider_6 = document.getElementById('sq_6');

    // WPP dom elements
    var wpp_slider_1 = document.getElementById('wpp_1'),
        wpp_slider_2 = document.getElementById('wpp_2'),
        wpp_slider_3 = document.getElementById('wpp_3'),
        wpp_slider_4 = document.getElementById('wpp_4'),
        wpp_slider_5 = document.getElementById('wpp_5'),
        wpp_slider_6 = document.getElementById('wpp_6'),
        wpp_slider_7 = document.getElementById('wpp_7');

    // WVA dom elements
    var wva_slider_1 = document.getElementById('wva_1'),
        wva_slider_2 = document.getElementById('wva_2'),
        wva_slider_3 = document.getElementById('wva_3'),
        wva_slider_4 = document.getElementById('wva_4'),
        wva_slider_5 = document.getElementById('wva_5'),
        wva_slider_6 = document.getElementById('wva_6');

    // SQ Sliders
    noUiSlider.create(slider_1, {
        start: [25, 75],
        connect: true,
        range: sq_sliders,
        pips: {
                mode: 'range',
                density: 1
        },
        tooltips: true,
        format: wNumb({
                decimals: 0
        })
    });
    noUiSlider.create(slider_2, {
        start: [25, 75],
        connect: true,
        range: sq_sliders,
        pips: {
                mode: 'range',
                density: 1
            },
        tooltips: true,
        format: wNumb({
                decimals: 0
            })
    });
    noUiSlider.create(slider_3, {
        start: [25, 75],
        connect: true,
        range: sq_sliders,
        pips: {
                mode: 'range',
                density: 1
            },
        tooltips: true,
        format: wNumb({
                decimals: 0
            })
    });
    noUiSlider.create(slider_4, {
        start: [25, 75],
        connect: true,
        range: sq_sliders,
        pips: {
                mode: 'range',
                density: 1
            },
        tooltips: true,
        format: wNumb({
                decimals: 0
            })
    });
    noUiSlider.create(slider_5, {
        start: [25, 75],
        connect: true,
        range: sq_sliders,
        pips: {
                mode: 'range',
                density: 1
            },
        tooltips: true,
        format: wNumb({
                decimals: 0
            })
    });
    noUiSlider.create(slider_6, {
        start: [25, 75],
        connect: true,
        range: sq_sliders,
        pips: {
                mode: 'range',
                density: 1
            },
        tooltips: true,
        format: wNumb({
                decimals: 0
            })
    });


    //WPP Sliders ====
    noUiSlider.create(wpp_slider_1, {
        start: [25, 75],
        connect: true,
        range: sq_sliders,
        pips: {
                mode: 'range',
                density: 1
        },
        tooltips: true,
        format: wNumb({
                decimals: 0
        })
    });
    noUiSlider.create(wpp_slider_2, {
        start: [25, 75],
        connect: true,
        range: sq_sliders,
        pips: {
                mode: 'range',
                density: 1
        },
        tooltips: true,
        format: wNumb({
                decimals: 0
        })
    });
    noUiSlider.create(wpp_slider_3, {
        start: [25, 75],
        connect: true,
        range: sq_sliders,
        pips: {
                mode: 'range',
                density: 1
        },
        tooltips: true,
        format: wNumb({
                decimals: 0
        })
    });
    noUiSlider.create(wpp_slider_4, {
        start: [25, 75],
        connect: true,
        range: sq_sliders,
        pips: {
                mode: 'range',
                density: 1
        },
        tooltips: true,
        format: wNumb({
                decimals: 0
        })
    });
    noUiSlider.create(wpp_slider_5, {
        start: [25, 75],
        connect: true,
        range: sq_sliders,
        pips: {
                mode: 'range',
                density: 1
        },
        tooltips: true,
        format: wNumb({
                decimals: 0
        })
    });
    noUiSlider.create(wpp_slider_6, {
        start: [25, 75],
        connect: true,
        range: sq_sliders,
        pips: {
                mode: 'range',
                density: 1
        },
        tooltips: true,
        format: wNumb({
                decimals: 0
        })
    });
    noUiSlider.create(wpp_slider_7, {
        start: [25, 75],
        connect: true,
        range: sq_sliders,
        pips: {
                mode: 'range',
                density: 1
        },
        tooltips: true,
        format: wNumb({
                decimals: 0
        })
    });

    // WVA Sliders
    noUiSlider.create(wva_slider_1, {
        start: [25, 75],
        connect: true,
        range: sq_sliders,
        pips: {
                mode: 'range',
                density: 1
        },
        tooltips: true,
        format: wNumb({
                decimals: 0
        })
    });
    noUiSlider.create(wva_slider_2, {
        start: [25, 75],
        connect: true,
        range: sq_sliders,
        pips: {
                mode: 'range',
                density: 1
            },
        tooltips: true,
        format: wNumb({
                decimals: 0
            })
    });
    noUiSlider.create(wva_slider_3, {
        start: [25, 75],
        connect: true,
        range: sq_sliders,
        pips: {
                mode: 'range',
                density: 1
            },
        tooltips: true,
        format: wNumb({
                decimals: 0
            })
    });
    noUiSlider.create(wva_slider_4, {
        start: [25, 75],
        connect: true,
        range: sq_sliders,
        pips: {
                mode: 'range',
                density: 1
            },
        tooltips: true,
        format: wNumb({
                decimals: 0
            })
    });
    noUiSlider.create(wva_slider_5, {
        start: [25, 75],
        connect: true,
        range: sq_sliders,
        pips: {
                mode: 'range',
                density: 1
            },
        tooltips: true,
        format: wNumb({
                decimals: 0
            })
    });
    noUiSlider.create(wva_slider_6, {
        start: [25, 75],
        connect: true,
        range: sq_sliders,
        pips: {
                mode: 'range',
                density: 1
            },
        tooltips: true,
        format: wNumb({
                decimals: 0
            })
    });



    // SQ update
    update_fields('sq_1');
    update_fields('sq_2');
    update_fields('sq_3');
    update_fields('sq_4');
    update_fields('sq_5');
    update_fields('sq_6');


    // WPP update
    update_fields('wpp_1');
    update_fields('wpp_2');
    update_fields('wpp_3');
    update_fields('wpp_4');
    update_fields('wpp_5');
    update_fields('wpp_6');
    update_fields('wpp_7');

    // WVA update
    update_fields('wva_1');
    update_fields('wva_2');
    update_fields('wva_3');
    update_fields('wva_4');
    update_fields('wva_5');
    update_fields('wva_6');

    // functions
    function update_fields(slider_id){
        var current_slider = document.getElementById(slider_id),
            current_field;
        current_slider.noUiSlider.on('update', function( values, handle ) {
            if(values[handle] < 10){
                values[handle] = '0' + values[handle];
            }

            // generate appropriate field name
            var input_field_name = slider_id + '_' + handle,
                input_field = $('#' + input_field_name);
                current_field = $('#' + input_field_name + '_' + handle);
            input_field.val(values[handle]);
            current_field.text(values[handle]);
        });

        current_slider.noUiSlider.on('slide', function(value, handle){
            var seq_view = slider_id.split('_')[0];
            $('#' + slider_id + '_' + handle).addClass('form-control_focused_' + handle);
            $('#' + slider_id + '_' + handle + '_' + handle).addClass('redCo');
            $('.' + seq_view + '_sequences').addClass('redBorder');


        });

        // prepare sequence for copying
        // and remove stylings to addded to elements while sliding
        current_slider.noUiSlider.on('end', function(value, handle){
            var seq_view = slider_id.split('_')[0];
            $('#' + slider_id + '_' + handle).removeClass('form-control_focused_' + handle);
            $('#' + slider_id + '_' + handle + '_' + handle).removeClass('redCo');
            $('.' + seq_view + '_sequences').removeClass('redBorder');
            var sq = slider_id.split('_');
            prepare_sequence(sq[0]);

            // url preparing
            var wpp_code = $('#wpp_hidden').val(),
                wva_code = $('#wva_hidden').val(),
                sq_code  = $('#sq_hidden').val(),
                btn = $('.external_url');
            url_generator(btn, wpp_code, sq_code, wva_code, $('#job_title').val());

        });
    }

    function prepare_sequence(seq_wrapper_id){
        var text = $('.' + seq_wrapper_id + '_sequences').text().trim();
            //$('#sq_hidden').val(text);
            $('#' + seq_wrapper_id + '_hidden').val(text);
    }

    // -- onload (default) values -- //
    var default_sq = $('.sq_sequences').text().trim();
    var default_wpp = $('.wpp_sequences').text().trim();
    var default_wva = $('.wva_sequences').text().trim();
    $('#sq_hidden').val(default_sq);
    $('#wpp_hidden').val(default_wpp);
    $('#wva_hidden').val(default_wva);
    url_generator($('.external_url'), default_wpp, default_sq, default_wva, $('#job_title').val());

    // --- clipping -- //
    var clipboard = new Clipboard('#btn_sq', {
        text: function() {
            return document.getElementById('sq_hidden').value;
        }
    });
    clipboard.on('success', function(e) {
        //console.log(e.trigger);
       showTooltip(e.trigger, 'Copied!');
    });

    clipboard.on('error', function(e) { console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
        showTooltip(e.trigger, fallbackMessage(e.action));
    });

    // wpp clipboard
    var clipboard_wpp = new Clipboard('#btn_wpp', {
        text: function() {
            return document.getElementById('wpp_hidden').value;
        }
    });
    clipboard_wpp.on('success', function(e) {
        //console.log(e.trigger);
       showTooltip(e.trigger, 'Copied!');
    });

    clipboard_wpp.on('error', function(e) { console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
        showTooltip(e.trigger, fallbackMessage(e.action));
    });

    // wpp clipboard
    var clipboard_wva = new Clipboard('#btn_wva', {
        text: function() {
            return document.getElementById('wva_hidden').value;
        }
    });
    clipboard_wva.on('success', function(e) {
        //console.log(e.trigger);
       showTooltip(e.trigger, 'Copied!');
    });

    clipboard_wva.on('error', function(e) { console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
        showTooltip(e.trigger, fallbackMessage(e.action));
    });


    // Clipboard helpers ---

    function showTooltip(elem, msg) {
        $(elem).addClass('tooltipped tooltipped-e');
        elem.setAttribute('aria-label', msg);
        setTimeout(function(){
            $(elem).removeClass('tooltipped tooltipped-e');
        }, 1000);
    }


    function fallbackMessage(action) {
        var actionMsg = '';
        var actionKey = (action === 'cut' ? 'X' : 'C');
        if (/iPhone|iPad/i.test(navigator.userAgent)) { actionMsg = 'No support :('; } else if (/Mac/i.test(navigator.userAgent)) { actionMsg = 'Press ⌘-' + actionKey + ' to ' + action; } else { actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action; }
        return actionMsg;
    }


    $('#footer_btn').on('click', function(e){
        e.preventDefault();
        $('#collapse_footer').toggleClass('footer-collapsed').promise().done(function() {
            if( $('#footer_btn_icon').hasClass('glyphicon-chevron-down') ) {
                $('#footer_btn_icon').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
            }else{
                $('#footer_btn_icon').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
            }
        });
    });

    $('#sq_wrapper_btn').on('click', function(e){
        e.preventDefault();

        $('#sq_wrapper').slideToggle('1200').promise().done(function() {
            if( $('#sq_title_toggle').hasClass('glyphicon-chevron-right') ) {
                $('#sq_title_toggle').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
            }else{
                $('#sq_title_toggle').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
            }
        });
        var target_sq = $(this);
         setTimeout(function(){

           if( target_sq.length ) {

               $('html, body').stop().animate({
                   scrollTop: target_sq.offset().top
               }, 1000);
           }
       }, 500);

    });
    $('#wpp_wrapper_btn').on('click', function(e){
        e.preventDefault();

        $('#wpp_wrapper').slideToggle('slow').promise().done(function() {
           if( $('#wpp_title_toggle').hasClass('glyphicon-chevron-right') ) {
               $('#wpp_title_toggle').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
           }else{
               $('#wpp_title_toggle').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
           }
       });
         var target_wpp = $(this);
          setTimeout(function(){

            if( target_wpp.length ) {

                $('html, body').stop().animate({
                    scrollTop: target_wpp.offset().top
                }, 1000);
            }
        }, 500);

    });
    $('#wva_wrapper_btn').on('click', function(e){
        e.preventDefault();

        $('#wva_wrapper').slideToggle().promise().done(function() {
           if( $('#wva_title_toggle').hasClass('glyphicon-chevron-right') ) {
               $('#wva_title_toggle').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
           }else{
               $('#wva_title_toggle').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
           }
       });
         var target_wva = $(this);
          setTimeout(function(){

            if( target_wva.length ) {

                $('html, body').stop().animate({
                    scrollTop: target_wva.offset().top
                }, 1000);
            }
        }, 500);

    });


     // -----  modal
     $(window).on('load', function(){
         setTimeout(function(){
             $('#seq_modal').modal();
         }, 500);
     });

     $('#seq_modal').on('hidden.bs.modal', function () {
         $('#main, .footer').addClass('not_blurred').removeClass('blurred');
         setTimeout(function(){
             $('.footer').removeClass('not_blurred');
         }, 500);
     });

     $('#second_step, .second_step').on('click', function(e){
         $('.modal_steps').slideUp();
         $('.modal_footer_btns').hide();
         $('.second').slideDown().addClass('active').addClass('in');
         $('.modal_footer_insert').show();
     });

     $('#third_step, .third_step').on('click', function(e){
         $('.modal_steps').slideUp();
         $('.modal_footer_btns').hide();
         $('.third').slideDown().addClass('active').addClass('in');
         $('.modal_footer_library').show();
     });

     $('.single_generator_btn').on('click', function(e){
        e.preventDefault();
        $('.modal_steps').slideUp();
        $('.modal_footer_btns').hide();
        $('.second').slideDown().addClass('active').addClass('in');
        $('.modal_footer_insert').show();
        $('#seq_modal').modal();
     });

     $('.single_library_btn').on('click', function(e){
        e.preventDefault();
        $('.modal_steps').slideUp();
        $('.modal_footer_btns').hide();
        $('.third').slideDown().addClass('active').addClass('in');
        $('.modal_footer_library').show();
        $('#seq_modal').modal();
     });


     // --- Libraries --- //
     $('.elements').slimScroll({
         //width: '300px',
         alwaysVisible: true,
     });

     $.getJSON( "assets/json/codes.json", function( data ) {
      var html = '';
       //var items = '';
       $.each( data, function( key, val ) {
         var codes = val.sq_code + '_' + val.wpp_code + '_' + val.wva_code;
         var sq_badge = val.sq_code ? '<span class="badge sq_badge">SQ</span>' : '<span class="badge sq_badge opacity03">SQ</span>',
             wpp_badge = val.wpp_code ? '<span class="badge wpp_badge">WPP</span>' : '<span class="badge wpp_badge opacity03">WPP</span>',
             wva_badge = val.wva_code ? '<span class="badge wva_badge">WVA</span>' : '<span class="badge wva_badge opacity03">WVA</span>';
         if(val.sq_code){
            sq_badge = '<span class="badge sq_badge">SQ</span>';
         }
         html += '<dd><input type="radio" name="presets" id="pq' + key + '-' + key + '" value="' + codes + '" data-sq="' + val.sq_code + '" data-wpp="' + val.wpp_code + '" data-wva="' + val.wva_code + '" data-job="' + val.job_title + '">';
         html += '<label for="pq' + key + '-' + key + '">' +  val.job_title;
         html += '<div class="pull-right lib_badges">' + sq_badge + wpp_badge + wva_badge + '</div>';

         html += '</label></dd>';
       });

         $('.radio-list-left').append(html);
     });


     // disable `USE LIBRARY` btn
     $('.use_lib').prop('disabled', true);

     $('#presets_form').on('change', function() {
        $('.use_lib').prop('disabled', false);
        var checked_item = $('input[name="presets"]:checked'),
            data_sq = checked_item.data('sq'),
            data_wpp = checked_item.data('wpp'),
            data_wva = checked_item.data('wva'),
            data_job = 'Job Title: <span class="job_title_lib">' + checked_item.data('job') + '</span>';

            $('.sq_checked_lib').html(data_sq);
            $('.wpp_checked_lib').html(data_wpp);
            $('.wva_checked_lib').html(data_wva);
            $('.job_title_name').html(data_job);
     });


     $('#presets_form').on('submit', function(e) {
        e.preventDefault();
        var checked_item = $('input[name="presets"]:checked'),
            data_sq = checked_item.data('sq'),
            data_wpp = checked_item.data('wpp'),
            data_wva = checked_item.data('wva'),
            data_job = checked_item.data('job'),
            url_sq_data = checked_item.data('sq') ? checked_item.data('sq') : '',
            url_wpp_data = checked_item.data('wpp') ? checked_item.data('wpp') : '',
            url_wva_data = checked_item.data('wva') ? checked_item.data('wva') : '',
            url_title_data = checked_item.data('job') ? checked_item.data('job') : '',
            i = 1, i_wpp = 1, i_wva = 1;

            // insert job title first
            $('#job_title').val(data_job);

            // update hidden fields
            $('#sq_hidden').val(data_sq);
            $('#wpp_hidden').val(data_wpp);
            $('#wva_hidden').val(data_wva);

            // generate url
            url_generator( $('.external_url'), url_wpp_data, url_sq_data, url_wva_data, url_title_data );
            //url_generator( $('.external_url'), data_wpp, url_sq_data, data_wva, data_job );



            // convert sequences
            var sq_convert = data_sq ? convert_sequence_full(data_sq) : '';
            var wpp_convert = data_wpp ? convert_sequence_full(data_wpp) : '';
            var wva_convert = data_wva ? convert_sequence_full(data_wva) : '';


             console.log(data_sq);
             console.log(data_wpp);
             console.log(data_wva);
             console.log(data_job);


             if(sq_convert){
                 $("#sq_wrapper_btn, #sq_wrapper").show();
                 $('#btn_sq').prop('disabled', false);
                 $('.sq_sequences').removeClass('greyCo');
                 $.each(sq_convert, function(index, val){
                     var current_slider = document.getElementById('sq_' + i);
                     current_slider.noUiSlider.set(val);
                     i++;
                 });
             }else{ // empty!
                $("#sq_wrapper_btn, #sq_wrapper").hide();
                $('#btn_sq').prop('disabled', true);
                $('.sq_sequences').addClass('greyCo');
             }

             if(wpp_convert){
                 $('#wpp_wrapper_btn, #wpp_wrapper').show();
                 $('#btn_wpp').prop('disabled', false);
                 $('.wpp_sequences').removeClass('greyCo');
                 $.each(wpp_convert, function(index, val){
                     var current_slider_wpp = document.getElementById('wpp_' + i_wpp);
                     current_slider_wpp.noUiSlider.set(val);
                     i_wpp++;
                 });
             }else{
                $('#wpp_wrapper_btn, #wpp_wrapper').hide();
                $('#btn_wpp').prop('disabled', true);
                $('.wpp_sequences').addClass('greyCo');
             }

             if(wva_convert){
                $('#wva_wrapper_btn, #wva_wrapper').show();
                $('#btn_wva').prop('disabled', false);
                $('.wva_sequences').removeClass('greyCo');
                 $.each(wva_convert, function(index, val){
                     var current_slider_wva = document.getElementById('wva_' + i_wva);
                     current_slider_wva.noUiSlider.set(val);
                     i_wva++;
                 });

             }else{
                $('#wva_wrapper_btn, #wva_wrapper').hide();
                $('#btn_wva').prop('disabled', true);
                $('.wva_sequences').addClass('greyCo');
             }


             $('#seq_modal').modal('hide');
          });

     // modal end -- //



     // URL generator
     function url_generator(btn, wpp_code = '', sq_code = '', wva_code = '', job_title = ''){
        var j_t = {
                w2t: encodeURIComponent(job_title)
            },
            sq_param = sq_code ? ('&s2=' + sq_code) : '',
            wpp_param = wpp_code ? ('w2=' + wpp_code) : '',
            wva_param = wva_code ? ('&v2=' + wva_code) : '',
            param_title = job_title ? ('&' + $.param( j_t )) : '',
            url = 'https://assessments.talentclick.com/s3/TCT155Benchmark?' + wpp_param  + param_title + sq_param  + wva_param;
            console.log(sq_param);
        btn.prop('href', url);
     }

     /*function url_generator(btn, wpp_code, sq_code, wva_code, job_title = ''){
        var j_t = {
                w2t: encodeURIComponent(job_title)
            },
            param_title = $.param( j_t ),
            url = 'https://assessments.talentclick.com/s3/TCT155Benchmark?w2=' + wpp_code + '&' + param_title + '&s2=' + sq_code+ '&v2=' + wva_code;

        btn.prop('href', url);
     }*/



     // update URL when `job_title` is filled
     $('#job_title').on('input', function(){
        var wpp_code = $('#wpp_hidden').val(),
            sq_code  = $('#sq_hidden').val(),
            wva_code = $('#wva_hidden').val(),
            jt = $(this).val(),
            j_length = $(this).val().length,
            diff = 30 - j_length;
            if(diff == 0){
                $('.job_title_chars').addClass('redCo');
            }else{
                $('.job_title_chars').removeClass('redCo');
            }

                $('.job_title_chars').html(diff);

        url_generator($('.external_url'), wpp_code, sq_code, wva_code, jt);
     });



     // disable submit button on modal when user starts filling input fields
     $('.modal-inputs').on('input', function(){
        $('.generate').prop('disabled', true);
     });

     // Deprecated. Maybe a refacotring could fix minmal issues with
     // errors handling
     function check_sequence(seq, element, length){
         var seq_letter = seq.charAt(0),
             sub = seq.substring(1),
             group_1 = [],
             group_2 = [],
             i = 1,
             error_list,
             error_seq = '',
             errors = {},
             seq_length = seq.length;



             if(seq_length == 0){
                $('.help-block-' + element).html('');
                $('.help-block-' + element).closest('.form-group').removeClass('has-success').removeClass('has-error').find('.form-control-feedback').removeClass('glyphicon-ok').removeClass('glyphicon-remove');

                return;
             }

             if(isNaN(sub)){
                 errors = {
                     seq: '',
                     msg: 'Invalid input for the sequence'
                 };

                  $('.help-block-' + element).html(errors.msg + errors.seq);
                 return;
             }

             group_1 = sub.match(/.{1,4}/g);

             if(seq_length == length){
                 if(group_1){
                     group_1.forEach(function(el){
                         var el_2 = el.match(/.{1,2}/g);
                         if(el_2[0] > el_2[1]){
                            error_list = true;
                            error_seq += '<span class="error_span">' + el_2[0] + ' ' + el_2[1] + '</span>';
                         console.info('ERROR!');
                           // $('.generate').prop('disabled', true);
                         }else{
                             error_seq += el_2[0] + el_2[1];
                         }
                         i++;
                     });
                     if(error_list){
                          errors = {
                             msg: 'The pairs marked with yellow color below are not valid entries. Please fix those pairs.',
                             seq: error_seq,
                             error_flag: 1
                         };

                         $('.help-block-' + element).html(errors_reporting_2(errors));
                         $('.help-block-' + element).closest('.form-group').removeClass('has-success').addClass('has-error').find('.form-control-feedback').addClass('glyphicon-ok').addClass('glyphicon-remove');
                         return;
                     }


                    // everything seems fine now
                     $('.help-block-' + element).html('');
                     $('.help-block-' + element).closest('.form-group').removeClass('has-error').addClass('has-success').find('.form-control-feedback').removeClass('glyphicon-remove').addClass('glyphicon-ok');
                     //$('.generate').prop('disabled', false);
                     var seq_return = {
                         letter: seq_letter,
                         seq: error_seq,
                         error_flag: 0
                     };

                     return seq_return;
                 }
             } // length check

     }

     function isNumeric(num){
         return !isNaN(num);
     }


     function errors_reporting_2(errors){
         return '<p>' + errors.msg + '</p>' + '<p class="errored_sequence">' + errors.seq + '</p>';
     }


    // S regex: ^[S][0-9]{24}$
    // W regex: ^[W][0-9]{28}$
    // V regex: ^[V][0-9]{24}$
    // $.validator.methods.pattern("AR1004",element,/^AR\d{4}$/)

    function set_slider(slider, sequence){
        slider.noUiSlider.set(sequence);
    }

    // convenrt the clean sequence
    function convert_sequence(seq){

        var sub = seq.seq,
            group_1 = sub.match(/.{1,4}/g),
            seq_array = [];


        group_1.forEach(function(el){
            var el_2 = el.match(/.{1,2}/g);
            if(el_2[0] > el_2[1]){

            }else{
                seq_array.push([el_2[0], el_2[1]]);
            }
        });

        return seq_array;
    }

    // convert full (including leading letter) sequence
    function convert_sequence_full(seq){

        var sub = sub = seq.substring(1),
            group_1 = sub.match(/.{1,4}/g),
            seq_array = [];


        group_1.forEach(function(el){
            var el_2 = el.match(/.{1,2}/g);
            seq_array.push([el_2[0], el_2[1]]);
        });

        return seq_array;
    }



    // on-input validation
    var validation_errors = {
        sq: 0,
        wpp: 0,
        wva: 0
    };
    $('#sq_seq_insert').on('keyup keypress blur change input', function(e){
        var inserted = $(this).val(),
        test = {},
        final_message;

        test = check_sequence_2(inserted, 'sq', 25);
        if(test &&  test.flag){
            if(test.seq){
                final_message = '<p>' + test.msg + '</p>' + '<p>' + test.seq + '</p>';
            }else{
                final_message = '<p>' + test.msg + '</p>';
            }
            $('#sq_seq_insert').closest('.form-group').removeClass('has-success')
                                       .addClass('has-error').find('.form-control-feedback')
                                       .removeClass('glyphicon-ok').addClass('glyphicon-remove');
            validation_errors.sq = 1;

        }else{
            final_message = '';
            validation_errors.sq = 0;
            if($('#sq_seq_insert').val()){
                $('#sq_seq_insert').closest('.form-group').removeClass('has-error')
                                           .addClass('has-success').find('.form-control-feedback')
                                           .removeClass('glyphicon-remove').addClass('glyphicon-ok');
            }
        }

        $('.help-block-sq').html(final_message);
    });

    $('#wpp_seq_insert').on('keyup keypress blur change input', function(e){
        var inserted = $(this).val(),
            test_2 = {},
            final_message_2;

        test_2 = check_sequence_2(inserted, 'wpp', 29);
        if(test_2 &&  test_2.flag){

            if(test_2.seq){
                final_message_2 = '<p>' + test_2.msg + '</p>' + '<p>' + test_2.seq + '</p>';
            }else{
                final_message_2 = '<p>' + test_2.msg + '</p>';
            }
            $('#wpp_seq_insert').closest('.form-group').removeClass('has-success')
                                       .addClass('has-error').find('.form-control-feedback')
                                       .removeClass('glyphicon-ok').addClass('glyphicon-remove');
            validation_errors.wpp = 1;
        }else{
            final_message_2 = '';
            validation_errors.wpp = 0;
            if($('#wpp_seq_insert').val()){
                $('#wpp_seq_insert').closest('.form-group').removeClass('has-error')
                                           .addClass('has-success').find('.form-control-feedback')
                                           .removeClass('glyphicon-remove').addClass('glyphicon-ok');
            }
        }
        $('.help-block-wpp').html(final_message_2);
    });

    $('#wva_seq_insert').on('keyup keypress blur change input', function(e){
        var inserted = $(this).val(),
        test_3 = {},
        final_message_3;

        test_3 = check_sequence_2(inserted, 'wva', 25);
        if(test_3 &&  test_3.flag){

            if(test_3.seq){
                final_message_3 = '<p>' + test_3.msg + '</p>' + '<p>' + test_3.seq + '</p>';
            }else{
                final_message_3 = '<p>' + test_3.msg + '</p>';
            }
            $('#wva_seq_insert').closest('.form-group').removeClass('has-success')
                                       .addClass('has-error').find('.form-control-feedback')
                                       .removeClass('glyphicon-ok').addClass('glyphicon-remove');
            validation_errors.wva = 1;
        }else{
            final_message_3 = '';
            validation_errors.wva = 0;
            if($('#wva_seq_insert').val()){
                $('#wva_seq_insert').closest('.form-group').removeClass('has-error')
                                           .addClass('has-success').find('.form-control-feedback')
                                           .removeClass('glyphicon-remove').addClass('glyphicon-ok');
            }
        }
        $('.help-block-wva').html(final_message_3);
    });

    function check_sequence_2(seq, element, length){
        var seq_letter = seq.charAt(0),
            sub = seq.substring(1),
            group_1 = [],
            group_2 = [],
            error_list,
            error_seq = '',
            errors = {},
            seq_length = seq.length,
            final_message,
            format,
            regex = $('#' + element + '_seq_insert').attr('pattern');

            // is sub a number?
            if(isNaN(sub)){
                errors = {
                    msg: 'Invalid format!',
                    flag: 1
                };

                validation_errors[element] = 1

            }else{ // !isNaN(sub)
                // check length
                if(seq.length != length){
                    // is the input field empty?
                    if(seq === ''){

                        errors = {
                            msg: '',
                            flag: 0
                        }
                        validation_errors[element] = 0;
                        //return;
                    }else{ // it's not empty the string is lower than `length`

                        errors = {
                            msg: 'Sequence code format too short.',
                            flag: 1
                        };
                        validation_errors[element] = 1;
                    }
                }else if(seq.length == length){

                    // lets check the format for string with `length` length
                    format = seq.match(regex);
                    //format = seq.match(/^[S][0-9]{24}$/);
                    if(!format){
                        errors = {
                            msg: 'Please check the sequence code format.',
                            flag: 1
                        };
                        validation_errors[element] = 1;

                        return errors;
                    }else{

                        // check if the sequence is valid by pairs
                        group_1 = sub.match(/.{1,4}/g);

                            if(group_1){
                                group_1.forEach(function(el){
                                    var el_2 = el.match(/.{1,2}/g);
                                    if(el_2[0] > el_2[1]){

                                        error_seq += '<span class="error_span">' + el_2[0] + ' ' + el_2[1] + '</span>';
                                        errors = {
                                            msg: 'The sequence code has invalid pairs, marked with yellow color below. <br>Please fix those invalid pairs in the input field above.',
                                            flag: 1
                                        };
                                        validation_errors[element] = 1;
                                    }else{
                                        error_seq += el_2[0] + el_2[1];
                                    }
                                });

                                errors.seq = error_seq;
                            }
                        }
                }
            }

            // errors mesages
           return errors;
    }

    // listen to input changes and enable/disable submit button
    $('.modal-inputs').on('keyup keypress change input', function(){
        // no errors
        if(validation_errors.sq == 0 && validation_errors.wpp == 0 && validation_errors.wva == 0){
            // check if fields are empty
            if( !($('#sq_seq_insert').val()) && !($('#wpp_seq_insert').val()) && !($('#wva_seq_insert').val()) ){
                $('.generate').prop('disabled', true);
                $('#sq_seq_insert, #wpp_seq_insert, #wva_seq_insert').closest('.form-group').removeClass('has-success').removeClass('has-error').find('.form-control-feedback').removeClass('glyphicon-ok').removeClass('glyphicon-remove');
            }else{
                $('.generate').prop('disabled', false);
            }
        }else{
            $('.generate').prop('disabled', true);
        }
    });



    // submit forn and generate sliders presets
    $('#seq_form').on('submit', function (e) {
        e.preventDefault();
        var sq_val = $('#sq_seq_insert').val().trim(),
            wpp_val = $('#wpp_seq_insert').val().trim(),
            wva_val = $('#wva_seq_insert').val().trim(),
            valid_sq = false,
            valid_wpp = false,
            valid_wva = false;
      if (e.isDefaultPrevented()) {
        // all values are empty
        if((sq_val.length == 0) && (wpp_val.length == 0) && (wva_val.length == 0)){

            $('.error_container').html('<div class="alert alert-warning empty_warning">Please enter at least one sequence. If you want to start with default values, click on the <strong><span class="redCo">Continue with default codes</span></strong> button.</div>');
            setTimeout(function(){
                $('.empty_warning').slideUp();
            },8000);
            $('.generate').prop('disabled', true);
            return;
        }

        // sq insert loop
        if(sq_val.length != 0){        // sequence check
            var sq_seq_insert = check_sequence_2(sq_val, 'sq', 25),
                sq_array = [],
                i = 1;

            if(typeof sq_seq_insert == 'undefined'){
                return;
            }


            sq_array = convert_sequence(sq_seq_insert);

            $.each(sq_array, function(index, val){
                var current_slider = document.getElementById('sq_' + i);
                current_slider.noUiSlider.set(val);
                i++;
            });

            valid_sq = true;


        }

        // wpp insert loop
        if(wpp_val.length != 0){        // sequence check
            var wpp_seq_insert = check_sequence_2(wpp_val, 'wpp', 29),
                wpp_array = [],
                i = 1;

            if(typeof wpp_seq_insert == 'undefined'){

                return;
            }

            wpp_array = convert_sequence(wpp_seq_insert);


            $.each(wpp_array, function(index, val){
                var current_slider = document.getElementById('wpp_' + i);
                current_slider.noUiSlider.set(val);
                i++;
            });

            valid_wpp = true;


        }

        // wva insert loop
        if(wva_val.length != 0){        // sequence check
            var wva_seq_insert = check_sequence_2(wva_val, 'wva', 25),
                wva_array = [],
                i = 1;

            if(typeof wva_seq_insert == 'undefined'){
                return;
            }

            wva_array = convert_sequence(wva_seq_insert);

            $.each(wva_array, function(index, val){
                var current_slider = document.getElementById('wva_' + i);
                current_slider.noUiSlider.set(val);
                i++;
            });

            valid_wva = true;


        }


        $('#seq_modal').modal('hide');

        // update fields for copying
        var sq_val_code, wpp_val_code, wva_val_code;
        if(sq_val){
            sq_val_code = sq_val;
            $('#sq_hidden').val(sq_val);
        }else{
            sq_val_code = $('#sq_hidden').val();
        }

        if(wpp_val){
            wpp_val_code = wpp_val;
            $('#wpp_hidden').val(wpp_val);
        }else{
            wpp_val_code = $('#wpp_hidden').val();
        }

        if(wva_val){
            wva_val_code = wva_val;
            $('#wva_hidden').val(wva_val);
        }else{
            wva_val_code = $('#wva_hidden').val();
        }





        url_generator($('.external_url'), wpp_val_code, sq_val_code, wva_val_code, $('#job_title').val());


        // open containers
        if(valid_sq){
            // enable dimension
            $('#sq_wrapper_btn').show();
            $('#btn_sq').prop('disabled', false);
            $('.sq_sequences').removeClass('greyCo');

            $('#sq_wrapper').slideDown('sloq').promise().done(function() {
                if( $('#sq_title_toggle').hasClass('glyphicon-chevron-right') ) {
                    $('#sq_title_toggle').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
                }else{
                    $('#sq_title_toggle').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
                }
            });
        }

        if(valid_wpp){
            // enable dimension
            $('#wpp_wrapper_btn').show();
            $('#btn_wpp').prop('disabled', false);
            $('.wpp_sequences').removeClass('greyCo');

            $('#wpp_wrapper').slideDown('slow').promise().done(function() {
                if( $('#wpp_title_toggle').hasClass('glyphicon-chevron-right') ) {
                    $('#wpp_title_toggle').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
                }else{
                    $('#wpp_title_toggle').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
                }
            });
        }

        if(valid_wva){
            // enable dimension
            $('#wva_wrapper_btn').show();
            $('#btn_wva').prop('disabled', false);
            $('.wva_sequences').removeClass('greyCo');

            $('#wva_wrapper').slideDown('slow').promise().done(function() {
                if( $('#wva_title_toggle').hasClass('glyphicon-chevron-right') ) {
                    $('#wva_title_toggle').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
                }else{
                    $('#wva_title_toggle').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
                }
            });
        }

      } else {
        // everything looks good!
         $('#seq_modal').modal('hide');
      }

    });


    // Generate default values (user has closed the modal without entries)
    $('#close_modal, #close_modal_2, .close_modal').on('click', function(e){
            e.preventDefault();

            $('#sq_wrapper').slideToggle('slow').promise().done(function() {
                if( $('#sq_title_toggle').hasClass('glyphicon-chevron-right') ) {
                    $('#sq_title_toggle').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
                }else{
                    $('#sq_title_toggle').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
                }
            });

            $('#wpp_wrapper').slideToggle('slow').promise().done(function() {
                if( $('#wpp_title_toggle').hasClass('glyphicon-chevron-right') ) {
                    $('#wpp_title_toggle').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
                }else{
                    $('#wpp_title_toggle').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
                }
            });

            $('#wva_wrapper').slideToggle('slow').promise().done(function() {
                if( $('#wva_title_toggle').hasClass('glyphicon-chevron-right') ) {
                    $('#wva_title_toggle').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
                }else{
                    $('#wva_title_toggle').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
                }
            });

            $('#seq_modal').modal('hide');
        });

    $('.second_step').tooltip({
        container: 'body',
        trigger : 'hover'
    });
    $('.third_step').tooltip({
        container: 'body',
        trigger : 'hover'
    });
    $('.close_modal').tooltip({
        container: 'body',
        trigger : 'hover'
    });


    // prevent tab close (hmmm, cross-browser??)
    /*var hook = true;
    window.onbeforeunload = function() {
    if (hook) {
      console.log('tab sclosing');
      return "You have attempted to leave this page. Are you sure you want to exit this page?";
    }
    }
    function unhook() {
    hook=false;
    }

    window.onbeforeunload = confirmExit;
    function confirmExit() {
      return "You have attempted to leave this page. Are you sure you want to exit this page?";
    }

    window.addEventListener("beforeunload", function (e) {
      var confirmationMessage = "You have attempted to leave this page. Are you sure you want to exit this page?";
      console.log(confirmationMessage);
      e.returnValue = confirmationMessage;
      return confirmationMessage;
    });*/

   /* $(window).on('beforeunload', function(){
        return 'Are you sure you want to leave?';
    });

    $(window).on('unload', function(){
        console.log('unloaded');
    });*/

    function tab_close(){
        var showMsgTimer;

        window.onbeforeunload = function(evt) {
            var message = 'Please Stay on this page and we will show you a secret text.';
            showMsgTimer = window.setTimeout(showMessage, 500);

            evt = evt || window.evt;
            evt.returnValue = message;

            return message;
        }

        window.onunload = function () {
            clearTimeout(showMsgTimer);
        }

        function showMessage() {
            alert("You've been trolled!");
        }
    }

    tab_close();

})();

