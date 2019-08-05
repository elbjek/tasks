
$(window).on('load',()=>{
	setTimeout(()=>{
		$('.hero-content').addClass('hero-translate')
	},500)
})


$(document).ready(function () {
	$('.hamburger i' ).on('click',()=>{
		$('.nav-items-left').toggleClass('navigation-translate');
		$('.hamburger i').toggleClass('fa-times fa-bars');
	})
	$('.hamburger .fa-times' ).on('click',()=>{
		$('.nav-items-left').removeClass('navigation-translate');
		$('.nav-item > ul').not($(this).children("ul")).removeClass('dropdown-visible');
	})
    $(".nav-item").click(function () {
		$('.nav-item > ul').not($(this).children("ul")).removeClass('dropdown-visible');
		$(this).children(".dropdown-menu").toggleClass('dropdown-visible');
	});
});




function showModalForm(){
	$('.modal-form').toggleClass('modal-form-visible')
	$('.modal-form-wrap').toggleClass('modal-form-wrap-visible')
	$('.hide-modal').toggleClass('hide-modal-visible')
	$('.error').removeClass('error-visible');
	$('.form-item input').removeClass('error-border');
	$('.form-item textarea').removeClass('error-border')
}

function hideModalForm(){
	$('.modal-form').removeClass('modal-form-visible')
	$('.modal-form-wrap').removeClass('modal-form-wrap-visible')
	$('.hide-modal').removeClass('hide-modal-visible')

	$('.error').removeClass('error-visible');
	$('.form-item input').removeClass('error-border');
	$('.form-item textarea').removeClass('error-border')

}


//Form Validation

function submitForm () {
	if($('.form-item textarea').val() == '' || $('.form-item textarea').val() == '')
	{
		$('.error').addClass('error-visible');
		$('.form-item input').addClass('error-border');
		$('.form-item textarea').addClass('error-border');
	} else{
		$('.error').removeClass('error-visible');
		$('.form-item input').removeClass('error-border');
		$('.form-item textarea').removeClass('error-border')
		alert("Sucessfully submited!")
		hideModalForm()
	}
}