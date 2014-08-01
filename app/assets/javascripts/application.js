//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require_tree .

$(function(){
  $("#notice").fadeOut(5000);

  var availableCities = [
    "Baltimore", "New York", "Columbia", "Laurel",
    "Salt Lake", "Silver Spring", "Washington",
    "Philadelphia", "Las Vegas"
  ];

  $('body').on('click', '#city', function(){
    $(this).autocomplete({source: availableCities});
  });

  $('body').on('focus', '#date_in', function(){
    $(this).datepicker({dateFormat: "yy-mm-dd"});
  });
})
