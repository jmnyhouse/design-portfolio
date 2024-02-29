$(document).ready(function() {
					
	// VARIABLES
	
	
	// EVENT HANDLERS
  $("#design").click(function(){
    $('html, body').scrollTop($(".WorksIntroQuote").offset().top);
  });


  $(".DroneHeader").click(function() {
    $(".DroneGallery").slideDown();
    $(".VideoGallery").slideUp();
  })

  $(".CollapseDroneButton").click(function() {
    $(".DroneGallery").slideUp();
    $(".VideoGallery").slideUp();
  })

  $(".VideoHeader").click(function() {
    $(".VideoGallery").slideDown();
    $(".DroneGallery").slideUp();
  })

  $(".CollapseVideoButton").click(function() {
    $(".DroneGallery").slideUp();
    $(".VideoGallery").slideUp();
  })
	
	// FUNCTIONS
  const shareButton = document.querySelector('.share-button');
  const shareDialog = document.querySelector('.share-dialog');
  const closeButton = document.querySelector('.close-button');
  
  shareButton.addEventListener('click', event => {
    if (navigator.share) { 
     navigator.share({
        title: 'WebShare API Demo',
        url: 'https://codepen.io/ayoisaiah/pen/YbNazJ'
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
      } else {
          shareDialog.classList.add('is-open');
      }
  
  
  closeButton.addEventListener('click', event => {
    shareDialog.classList.remove('is-open');
  });
	


});

  

	// INITIALIZATION
	
	
});