// when any row is clicked
function showPersonnelDetails() {
    $('.table tr[data-href]').each(function () {
        $(this).css('cursor', 'pointer').hover(
                function () {
                    $(this).addClass('active');
                },
                function () {
                    $(this).removeClass('active');
                }).click(function () {
            document.location = $(this).attr('data-href');
        }
        );
    });//.ajax.reload();
}
;