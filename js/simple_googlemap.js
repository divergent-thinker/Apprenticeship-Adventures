function initialize() {
	  	var mapProp = {
	    center:new google.maps.LatLng(29.5, 52.508742),
	    zoom:7,
	    
	  };
	  	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
mapTypeId:google.maps.MapTypeId.SATELLITE
	  	var marker=new google.maps.Marker({
		position:new google.maps.LatLng(29.9137472, 52.8855472),
		});

		marker.setMap(map);

		var infowindow = new google.maps.InfoWindow({
    	content: "Tall-e Bakun A"
  		});

		marker.addListener('click', function() {
    	infowindow.open(map, marker);
  });


	}

	google.maps.event.addDomListener(window, 'load', initialize);