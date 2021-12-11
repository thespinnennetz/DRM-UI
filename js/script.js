// Menu
$(document).ready(function(){
    if($('.sidebar').hasClass('active-sidebar')){
        $('body').addClass("menuOpen");
    }
})
$(".sidebar-button a, .menu-overlay").click(function() {
    if($('.sidebar').hasClass('active-sidebar')){
        $('.sidebar').removeClass("active-sidebar");
        $('body').removeClass("menuOpen");
    }else{
        $('.sidebar').addClass("active-sidebar");
        $('body').addClass("menuOpen");
    }
});
// Tool tip
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
});
// Drop Dwon
$('.dropdown-toggle').dropdown();
// Floating Labels
$('select.floating-labels').change(function() {
    if ($(this).val() == null || $(this).val() == '') {
        $(this).closest('.form-label-group').removeClass('active');
    } else {
        $(this).closest('.form-label-group').addClass('active');
    }
});