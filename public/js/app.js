
//This should make a request to your animals api, and append each item
//to the HTML id list
(function(){
$.getJSON( "http://localhost:3000/api/animal", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {

    items.push( "<li>" + val.name + " is a  " + val.type +"</li>" );
  });
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "#list" );
});
})();
