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

  $("#city").autocomplete({source: availableCities});

  $("#date_in").datepicker({dateFormat: "yy-mm-dd"});

});
