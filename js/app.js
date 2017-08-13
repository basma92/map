var map;
var locations = [
             {title:"Park Ave Penthouse", location:{lat: 40.7713024, lng: -73.9632393}},
             {title:"Chelsa Loft", location:{lat: 40.7444883, lng:-73.9949465}},
             {title:"Union Square Open Floor Plan", location:{lat: 40.7347062, lng: -73.9895759}},
             {title:"TriBeCa Artsy Bachelor Pad", location:{lat: 40.7195264, lng:-74.0089934}},
             {title:"Chinatown Homey Space", location:{lat: 40.7180628, lng: -73.9961237}}
         ];
 
      
/*var locationfuc = function (data){
    var that= this;
         this.titl=data.title;
         this.lat=data.lat;
         this.lng=data.lng;
         this.url="";*/
        
      //i tried to go with the course
var largeInfowwindow = new google.maps.InfoWindow();
             var bounds = new google.maps.LatLngBounds();
function populateInfowWindow(marker, infowindow){
//get info from third party app as cameron has done it
    var wikiurl = "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + marker.title + "&formate=json&callback=wikiCallBack";
      var wikiRequestTimeout = setTimeout(function(){
          $wikiElem.text("failed to get resources");
      },8000) ;     
  $.ajax({
      URL:wikiurl,
                 dataType:"jsonp",
                 success: function( response ){
                marker.url= URL;
                 clearTimeout(wikiRequestTimeout);
                 }
                 });
             //check that the window isn't already opened
             if(infowindow.marker != marker){
                 infowindow.marker = marker;
                 infowindow.setContent("<div>" + marker.title + marker.url+ "</div>");
                 infowindow.open(map, marker);
                 //make sure the marker property is cleared 
                 infowindow.addListener("closeclick", function(){
                     infowindow.marker = null;
                 });
             }
         } 
    //to animate the markeri have learned this fromhttps://developers.google.com/maps/documentation/javascript/examples/marker-animations
    function toggleBounce(){
        if(marker.getAnimation() !== null){
            marker.setAnimation(null);
            }else{
                marker.setAnimation(google.maps.Animation.bounce);
            }
    }
function initMap(){
   // var that =this;
    //this.locationslist = ko.observableArray([]);
           map = new google.maps.Map(document.getElementById("map"),{
    center:{lat:40.7413549, lng:-73.99802439999996},
             zoom: 13
         }); 
    //locations.forEach(function(element){
      // self.locationslist.push(new locationfuc(element));
    
for (var i=0; i<locations.length; i++){
             //get pos. from array locations
             var position = locations[i].location;
             var title = locations[i].title;
             //create a marker per location, put into markers array
             var marker = new google.maps.Marker({
                 map: map,
                 position: position,
                 title: title,
                 animation: google.maps.Animation.DROP,
                 id: i
              });
             //push it to the markers array
             markers.push(markers);
     marker.setMap(map);
             //extend the boundaries of the map to each marker
             bounds.extend(marker.position);
             //creat on click event to open infowindow
             marker.addListener("click", function(){
                 populateInfowWindow(this, largeInfowwindow);
             });
     viewModel.locations()[i].marker = marker;
 //declare a listener which toggle bounce when clicked             }
marker.addListener("click",toggleBounce());
 
}
var viewModel = function (){
    var that = this;
    self.markers = ko.observableArray([]);
    
}
    ko.applyBindings(new viewModel());
    
