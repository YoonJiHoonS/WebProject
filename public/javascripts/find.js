$(function() {
  $('#q').keyup(function() {
    var query = $('#q').val() || "";
    query = query.trim();
    if (!query) {
      return; // typing한 내용이 없으면 종료
    }

    // spinner를 돌리자..
    $('.form').addClass('loading');

    $.ajax({
      url: '/suggest',
      data: {q: query},
      success: function(data) {
        // Ajax의 결과를 잘 받았을 때
        // 화면에 받은 결과를 가지고 list를 rendering하고..
        var els = _.map(data, function(name) { //-.map은 underscore.js == lodash.js 같은 라이브러리임 arr-> arr[]로 바꿔주는 function
          // [대한 민국] 아이템 하나씨글 받아서 array로 변환하는 함수 
          
          return '<li>' + name + '</li>';
        });
        $('.suggest-box').html(els.join('\n')).show();
        //join은 한 스트링으로 바꿔주는 함수
        // li item을 클릭했을 때, text box의 내용을 바꾸고, suggest-box감춤
        $('.suggest-box li').click(function(e) {
          $('#q').val($(e.currentTarget).text()); 
          $('.suggest-box').hide();
        });
      },
      complete: function() {
        $('.form').removeClass('loading');  // spinner를 정지 removeClass에서 배열이 넘어온다.
      }
    });
  });
});
