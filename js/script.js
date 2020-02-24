$(document).ready(function() {
  $("#development-image").click(function() {
    $("#development-image").hide('1500').hide('1000');
    $("#development").show("1500");
  });
  $("#development").click(function() {
    $("#development").slideUp("1500");
    $("#development-image").slideDown("1500");
  });
});

$(document).ready(function() {
  $("#design-image").click(function() {
    $("#design-image").hide('1500').hide('1000');
    $("#design").show("1500");
  });
  $("#design").click(function() {
    $("#design").slideUp("1500");
    $("#design-image").slideDown("1500");
  });
});

$(document).ready(function() {
  $("#product-image").click(function() {
    $("#product-image").hide('1500').hide('1000');
    $("#product").show("1500");
  });
  $("#product").click(function() {
    $("#product").slideUp("1500");
    $("#product-image").slideDown("1500");
  });
});
$(document).ready(function() {
  $("#one")
    .mouseover(function() {
      $("#overlay1").show();
    })
    .mouseout(function() {
      $("#overlay1").hide();
    });
});
$(document).ready(function() {
  $("#two")
    .mouseover(function() {
      $("#overlay2").show();
    })
    .mouseout(function() {
      $("#overlay2").hide();
    });
});
$(document).ready(function() {
  $("#three")
    .mouseover(function() {
      $("#overlay3").show();
    })
    .mouseout(function() {
      $("#overlay3").hide();
    });
});
$(document).ready(function() {
  $("#four")
    .mouseover(function() {
      $("#overlay4").show();
    })
    .mouseout(function() {
      $("#overlay4").hide();
    });
});

$(document).ready(function() {
  $("#Five")
    .mouseover(function() {
      $("#overlay5").show();
    })
    .mouseout(function() {
      $("#overlay5").hide();
    });
    
  $("#six")
    .mouseover(function() {
      $("#overlay6").show();
    })
    .mouseout(function() {
      $("#overlay6").hide();
    });
  $("#seven")
    .mouseover(function() {
      $("#overlay7").show();
    })
    .mouseout(function() {
      $("#overlay7").hide();
    });
  $("#eight")
    .mouseover(function() {
      $("#overlay8").show();
    })
    .mouseout(function() {
      $("#overlay8").hide();
    });
});
