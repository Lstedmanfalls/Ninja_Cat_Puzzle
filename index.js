$('img').click(function() 
    {$(this).attr("src", $(this).attr("data-alt-src"));
    }
)

$('button').click(function() 
    {location.reload();
    }
)