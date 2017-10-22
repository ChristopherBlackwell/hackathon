$(document).ready(function(){
  var after_upload = 0;

  if (after_upload == false)
  {
    $('#pic_display').hide();
    $('#table_display').hide();
  }

  $("input[type=file]").click(function(){
      $(this).val("");
  });

  $("input[type=file]").change(function(){
      after_upload = $(this).val();

      if (after_upload == false)
      {
        $('#pic_display').hide();
        $('#table_display').hide();
      }
      else
      {
        $('#pic_display').show();
        $('#table_display').show();
      }

  });
});
