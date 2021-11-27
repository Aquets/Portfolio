var mouseX = 0;
var mouseY = 0;

$(function() {
$(document).on('mousemove', function(e){
       mouseX = e.pageX,
       mouseY = e.pageY
    });
});

$(function() {$('.project').hover( handlerIn, handlerOut )});

function handlerIn() {
  img_url =   $(this).attr("preview");
  $("#project_preview_left").attr("src", img_url);
  $("#project_preview_right").attr("src", img_url);

  $('#project_preview_left').css({
    opacity: 1,
    left:  12 + Math.random()*3 + "vw",
    top:    $(this).offset().top + (Math.random() - Math.random())*50
  });

  $('#project_preview_right').css({
    opacity: 1,
    right:  12 + Math.random()*3 + "vw",
    top:    $(this).offset().top + (Math.random()*2 - Math.random()*2)*50
  });

}

function handlerOut() {
  $('#project_preview_left').css({    opacity: 0
  });
  $('#project_preview_right').css({    opacity: 0
  });
}

$(document).ready(function() {
    console.log( "Let's take a look to my code ;)" );
});
