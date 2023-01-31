$('#upload-btn-1').click(function () {
    var name = document.getElementById('fileToUpload-1');
    var filename = name.files[0];
    console.log(filename.name);
    var data = new FormData();
    data.append('file', filename); var directory = "uploads/passport/";
    data.append('directory', directory);
    $.ajax({
        url: 'uploads.php',
        data: data,
        processData: false,
        contentType: false,
        type: 'POST',
        beforeSend: function() {
            document.getElementById("loader-1").src = "../loading.gif";
        },
        success: function (msg) {
            document.getElementById("loader-1").src = "";
            var result = msg;
            if (result.includes("Sorry"))
            {
                alert(result);
                $("#fileToUpload-1").val("");
            } else
            {
                alert("Success! Your Passport Image has been uploaded.");
                $("#fileToUpload-1").val("");
                $("#uploadedFile-1").val(result);
                console.log($("#uploadedFile-1").val());
            }
        }
    });
});