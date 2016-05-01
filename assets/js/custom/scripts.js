//============================================================
//    IE Viewport
//============================================================
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}



jQuery(document).ready(function ($) {
  //============================================================
  //    Main Navigation
  //============================================================

  $('.toggle-link').on('click', function () {
      $('.main-navigation').toggleClass('is-z-index');
      $('ul.main-nav').toggleClass('is-toggled-on');
      $('ul.main-nav li').toggleClass('is-visible');
      $('#toggle-link').toggleClass('is-toggled');
    })
    //============================================================
    //    TABS, ACCORDION AND TOGGLES
    //============================================================

  // TABS

  $('.tab-link').css('display', 'inline-block');
  $('.tab-content').css('display', 'none');
  $('.tabs').each(function (index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  $('.tabs').on('click', 'li > a.tab-link', function (event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.tabs');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });


  //ACCORDION

  $('.submenu').css('display', 'none');
  $('.js-accordion-trigger').on('click', function (e) {
    var liItem = $(this).parent();
    liItem.find('.submenu').slideToggle('slow');
    // apply the toggle to the ul
    liItem.toggleClass('is-expanded');
    if (!liItem.hasClass('is-expanded')) {
      $(this).blur();
    }
    e.preventDefault();
  });


  //TOGGLES

  $('.submenu').css('display', 'none');
  $('.js-toggle-trigger').on('click', function (e) {
    if (!$(this).parent().hasClass('is-expanded')) {
      $('.toggle-link.is-expanded').toggleClass('is-expanded').children('.submenu').slideToggle('slow');
    }
    var liItem = $(this).parent();
    liItem.find('.submenu').slideToggle('slow');
    // apply the toggle to the ul
    liItem.toggleClass('is-expanded');
    if (!liItem.hasClass('is-expanded')) {
      $(this).blur();
    }
    e.preventDefault();
  });


  //============================================================
  //    FORMS ELEMENT
  //============================================================

  //INPUT FILE

  $('.input-file').on('change', function () {
    var fileDir = $('.input-file').val().split('\\');
    var fileName = fileDir[fileDir.length - 1];
    $('#input-file-name').text(fileName);
  });
  $('button[type="reset"]').click(function () {
    $('#input-file-name').text('');
  });
});
