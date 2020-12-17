
$( document ).ready(function() {      
  jQuery('.advanced-filter').each(function() {
    var el = jQuery(this)
    ,group = el.data('group');

    if ( el.hasClass('active-filter') ) { //Remove class hidden
      el.parents('.sb-filter').find('a.clear-filter').removeClass('hidden');
    }
  });

  jQuery('.advanced-filter').on('click', function(e) {
    var el = $(this)
    ,group = el.data('group')
    ,url = el.find('a').attr('href')
    // Continue as normal if we're clicking on the active link
    if (el.hasClass('active-filter')) {
      return;
    }
    var _logic = jQuery(".filters-sidebar").data('logic');
    if( _logic ){
      // Get active group link (unidentified if there isn't one)
      activeTag = $('.active-filter[data-group="'+ group +'"]');
      // If a tag from this group is already selected, remove it from the new tag's URL and continue
      if ( activeTag && activeTag.data('group') === group ) {
        e.preventDefault();
        activeHandle = activeTag.data('handle') + '+';
        // Create new URL without the currently active handle
        url = url.replace(activeHandle, '');
        window.location = url;
      }
    }
  });
  $('.accordion-set').each(function(i,e){
    var $this = $(this);
    if($(this).find('.wrapper-link').hasClass('active-wrapper')){
      $(this).next().slideDown();
    }else{
      $(this).next().slideUp();
    }
    $(this).find('.wrapper-link').click(function(e){
      e.preventDefault();
      //       $this.siblings().find('a').removeClass('active');
      $(this).toggleClass('active-wrapper');
      $(this).next().slideToggle();
    });
  });
  $('.sb-title-mobile').on('click',function(){
    if($(window).width() < 981){
      $('body.slide-filter').removeClass('slide-filter');
    }
  })

  $('.filter-toggle-refine').on('click',function(){
    if($(window).width() < 981){
      $('body').addClass('slide-filter');
    }
  })
});
// Filter Code - End