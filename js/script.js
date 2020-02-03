// Navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
			});
			});
			});			
			

// Logic for the submit button 

$("#submit-btn").click(function(e){
	$('#submit-btn').next().remove();
	e.preventDefault();
	if(allInputFieldsAreFilled()) {
		$('#submit-btn').after("<important>Your email was sent</important>");
	} else {
		$('#submit-btn').after("<important>Please fill the required fields*</important>");
	}
});

function allInputFieldsAreFilled() {
	return  $("#submit-firstname").val()!="" &&
			$("#submit-lastname").val()!="" &&
			$("#submit-email").val()!="";
}

//Scroll Up Button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("scrollUpBtn").style.display = "block";
  } else {
    document.getElementById("scrollUpBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
	document.querySelector('#thetop').scrollIntoView({
    	behavior: 'smooth'
	});
} 
 