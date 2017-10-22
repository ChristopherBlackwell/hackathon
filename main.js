$(document).ready(function(){
  // Get a reference to the database service
  var database = firebase.database().ref('images/mostRecent/text');
  database.on('value', function(snapshot) {
    var brand = snapshot.child("brand").val();
    var catalog = snapshot.child("catalogue").val();
    var order = snapshot.child("orderNum").val();
    var raw = snapshot.child("raw").val();
    $("#brand_var").text(brand);
    $("#catalog_var").text(catalog);
    $("#GO_var").text(order);
    $("#raw_var").text(raw)
  });
});
