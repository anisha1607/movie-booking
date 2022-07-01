$(window).on("load",function(){
  setTimeout(function(){
    $(".loader-wrapper").fadeOut("slow");
    $('.container').css('display','flex');
  },500);
});

$(function($) {
    $('[data-numeric]').payment('restrictNumeric');

    $('.cc-number').keypress(function(key) {
      if((key.charCode < 48 || key.charCode > 57) && key.charCode != 32) return false;
    });
    
    $('.cc-number').on('keyup', function() {
        var foo = $(this).val().split(" ").join(""); 
        if (foo.length > 0) {
          foo = foo.match(new RegExp('.{1,4}', 'g')).join(" ");
        }
        $(this).val(foo);
    });
    

    $('.cc-exp').payment('formatCardExpiry');
    $('.cc-cvc').payment('formatCardCVC');
    $.fn.toggleInputError = function(erred) {
    this.parent('.form-group').toggleClass('has-error', erred);
    return this;
    };
    
    $('form').submit(function(e) {
    var cardType = $.payment.cardType($('.cc-number').val());
    $('.cc-number').toggleInputError(!$.payment.validateCardNumber($('.cc-number').val()));
    $('.cc-exp').toggleInputError(!$.payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
    $('.cc-cvc').toggleInputError(!$.payment.validateCardCVC($('.cc-cvc').val(), cardType));
    $('.cc-brand').text(cardType);
    $('.validation').removeClass('text-danger text-success');
    $('.validation').addClass($('.has-error').length ? 'text-danger' : 'text-success');
    });

    var price= localStorage.getItem('price');
    $('#p1').html("Rs "+price);

    var name= localStorage.getItem('name');
    $('#m1').html(name);
    $('#moviename').val(name);

    var ss= localStorage.getItem('seats');
    $('#s1').html(ss);
    $('#seating').val(ss);

    var price2= localStorage.getItem('addon');
    $('#p2').html("Rs "+price2);
    $('#addonscost').val(price2);

    var gst= 0.18*(Number(price)+ Number(price2));
    var fgst= gst.toFixed(2);
    $('.gst1').html("Rs "+fgst);

    var total= 0.18*(Number(price)+ Number(price2))+ (Number(price)+ Number(price2));
    var tf= total.toFixed(2);
    $('#total1').html("Rs "+tf);

    var poster= localStorage.getItem('poster');
    $("#movImg").attr("src", poster);

    var bgposter= localStorage.getItem('bgposter');
    $("body").css({"background-image": "url(" + bgposter + ")", 'background-repeat': 'no-repeat'});;
    });    
