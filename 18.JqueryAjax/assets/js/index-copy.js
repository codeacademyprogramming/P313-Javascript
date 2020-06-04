$(document).ready(function () {

    $.ajax({
        // async: false,
        type: "GET",
        url: "http://kamranaeff1994-002-site3.ctempurl.com/api/Products",
        beforeSend: function () {
            // setting a timeout
            $('.loader').addClass('show');
        },
        //200
        success: function (response) {
            /// her sey qaydasindadi sualimi server basha dushdu

            // response.forEach(element => {
            //     console.log(element.description);
            // });


            $.each(response, function (indexInArray, item) {

                let productCard = $(`<div class="card mb-2">
                    <img src="http://kamranaeff1994-002-site3.ctempurl.com/images/${item.image}" 
                    class="card-img-top"
                        alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description.substr(0, 70)}...</p>
                        <a href="#" data-id="${item.id}" class="btn btn-primary">Ətraflı</a>
                    </div>
                </div>`);

                $('#products').append(productCard);

            });




            $('[data-id]').click(goToDetails);

        },
        // 500 -server xetasi
        // 404 - not found unvani tapa bilmedim
        // 400 - bad request xetali muraciet
        error: function (response) {
            //her hansi bir xeta olsa ve yaxud  bizim sualimiz servere aydin olmasa

            console.log('ERROR', response);
        }
    })
        .done(function () {
            // console.log('Response geldi');

            $('.owl-carousel').owlCarousel({
                autoplay: true,
                autoplayTimeout: 1200,
                loop: true,
                margin: 10,
                stagePadding: 10,
                nav: true,
                navText: ["<i class='fas fa-arrow-left'></i>",
                    "<i class='fas fa-arrow-right'></i>"],
                responsive: {
                    0: {
                        items: 1,
                        // nav: true
                    },
                    600: {
                        items: 3,
                        // nav: false
                    },
                    1000: {
                        items: 4,
                        nav: true
                        // loop: false
                    }
                }
            });

            $('.loader').fadeOut(1000, function () {
                $('.loader').removeClass('show');
            });

        });





    console.log('JS tam oxundu');

});

function deleteProduct(e) {
    e.preventDefault();


    let currentId = $(e.currentTarget).data('del-id');

    $.ajax({
        type: "DELETE",
        url: `http://kamranaeff1994-002-site3.ctempurl.com/api/Products/${currentId}`,
        success: function (response) {
            alert('Mehsul silindi!');
            window.location.href = "index.html";
        },
        error: function (response, e1, e2) {
            console.log('ERROR', response, e1, e2);
        }
    });

}
function goToDetails(e) {
    e.preventDefault();

    // console.log($(e.currentTarget).attr('data-id'));
    // console.log($(e.currentTarget).data('id'));
    let currentId = $(e.currentTarget).data('id');


    $.ajax({
        type: "GET",
        url: `http://kamranaeff1994-002-site3.ctempurl.com/api/Products/${currentId}`,
        beforeSend: function () {
            // setting a timeout
            $('.loader').addClass('show');
        },
        success: function (item) {

            let col = $('<div/>', {
                class: 'col-4'
            });

            let productCard = `<div class="card mb-2">
                <img src="http://kamranaeff1994-002-site3.ctempurl.com/images/${item.image}" 
                class="card-img-top"
                    alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.title}   
                    <span class="badge badge-warning">${item.price}₼<span></h5>
                    <p class="card-text">${item.description}</p>
                    <a href="javascript:window.location.reload()"  class="btn btn-primary">Geri Qayıt</a>
                    
                    <a href="#" data-del-id="${item.id}" class="btn btn-danger">Sil</a>
                </div>
            </div>`;

            $(col).html(productCard);


            $('#products').html('').append(col);
            $('[data-del-id]').click(deleteProduct);


        },
        error: function (response) {
            //her hansi bir xeta olsa ve yaxud  bizim sualimiz servere aydin olmasa

            console.log('ERROR', response);
        }
    }).done(function () {
        $('.loader').fadeOut(1000, function () {
            $('.loader').removeClass('show');
        });


    });


    // console.log('klikledin');
}