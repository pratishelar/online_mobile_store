    $('#form').validate({
        rules: {
            name : "required",
            details : "required",
            Feature : "required",
            screentype : "required",
            screensize : "required",
            screenratio : "required"
        },
        messages : {
            name : "required",
            details : "required",
            Feature : "required",
            screentype : "required",
            screensize : "required",
            screenratio : "required"
        },
         submitHandler: function(form){
         form.submit();
        }
    });