
$(document).ready(function () {
  // input 파일
  $("#file").on('change',function(){
    var fileName = $("#file").val();
    $(".upload-name").val(fileName);
  });

  // 좋아요, 저장 버튼
  $('.detail button ').click(function () {
    $(this).toggleClass("on")
  });

  // 팝업
  $('.open').each(function() {
		var popupID = $(this).attr('href');
		var popupBg = $('.popup-wrap');
	
		$(this).on('click', function(e) {
			e.preventDefault();
			popupBg.fadeIn();
			$(popupID).show();
			$('html').css({overflow: 'hidden'});
		});
		$('.popup-wrap, .close').on('click', function() {
			popupBg.fadeOut();
			$(popupID).hide();
			$(popupID).removeAttr('on');
			$('html').removeAttr('on');
		});
	});
});