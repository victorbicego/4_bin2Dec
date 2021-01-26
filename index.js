
$('.bin-btn').click(bin2dec);

$('.bin-in').keypress(function (event) {
    if (event.which == 13) {
        bin2dec();
    }
});


$('.dec-btn').click(dec2bin);

$('.dec-in').keypress(function (event) {
    if (event.which == 13) {
        dec2bin();
    }
});

function bin2dec() {
    let bin = $('.bin-in').val();

    let final = 0;
    let i = bin.length;

    for (let n = 0; n < bin.length; n++) {
        final = final + ((parseInt(bin[n])) * (Math.pow(2, i - 1)));
        i = i - 1;
    }
    console.log(final);
    $('.dec-in').val(final);
}

function dec2bin() {
    let dec = $('.dec-in').val();
    let final = [];

    if (dec === 0) {
        $('.bin-in').val(dec);
    }
    else {
        while (dec > 0) {
            final.unshift(parseInt(dec) % 2);
            var temp = dec / 2;
            dec = Math.floor(temp);
        }
        $('.bin-in').val(final.join(''));
    }
}