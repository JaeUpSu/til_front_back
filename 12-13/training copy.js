$(() => {
    $("#liveAlertBtn").on("click", () => {
        var html =[
            `<div class="alert alert-success alert-dismissible" role="alert">`,
            `   <div>경고합니다.</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('');

        $("#liveAlertPlaceholder").append(html);
    });
});