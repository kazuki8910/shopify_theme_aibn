$(function(){
 

  // ヘッダーメニューの開閉
  {
    const $btn = $('.add_header_btn');

    $btn.click(function(){
      const index = $btn.index(this);
      const $menus = $('.add_header_menu');
      const $this_menu = $menus.eq(index);

      // メニューを閉じる
      if($(this).hasClass('add_header_btn_active')){
        $(this).removeClass('add_header_btn_active');  
        $this_menu.fadeOut(200);
      }
      // メニューを開く
      else{
        $btn.removeClass('add_header_btn_active');
        $(this).addClass('add_header_btn_active');
        $menus.fadeOut(200);
        $this_menu.fadeIn(200);
      }
    });
  }


  // どこポイのポイント入力時、価格を引く
  {
    console.log('1');
    const $point_btn = $('#dokopoiSubmit');
    $point_btn.click(function(){
      console.log('1');
    });
    
  }
 
});

