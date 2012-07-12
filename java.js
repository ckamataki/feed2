$(function(){
//初期スピード（タイマー当たりの移動 px）	
var Speed =1;
//マウスをオーバーしたとき（タイマー当たりの移動 px）	
var Speed_m = 0.2;
//タイマーの設定
var TimeInterval=0.5;
//進行方向（top、down）
var ScrollDirection = "down";
//
var ImgCount = $('#ScrollArea li').length;
var ImgHeight = $('#ScrollArea li').outerHeight();
//表示エリアの幅
$('#ScrollArea').css('height',(ImgCount+2)*ImgHeight);
//表示エリアの位置
$('#ScrollArea').css('top',"-"+ImgHeight+"px");
var y=0;
var s=Speed;

	function set_timer(){
		timerID = setInterval(function(){
			if(ScrollDirection =="down"){
				timer_action_toD();				
			}else if(ScrollDirection =="top"){
				timer_action_toT();				
			}else{
				timer_action_toD();
			}
		},TimeInterval);
	}
	
	function clear_timer(){
		clearInterval(timerID);
	}
	
	//下スクロール
	function timer_action_toD(){
		if(y>=ImgHeight){
			$('#ScrollArea li:first').before($('#ScrollArea li:last').clone());
			$('#ScrollArea li:last').remove();
			y=0;
		}		
		y = y + s;
		$('#ScrollArea li').css('top',y+"px");
	}	
	//上スクロール
	function timer_action_toT(){
		if(y<=0){
			$('#ScrollArea li:last').after($('#ScrollArea li:first').clone());
			$('#ScrollArea li:first').remove();
			y= ImgHeight;
		}		
		y = y - s;
		$('#ScrollArea li').css('top',y+"px");
	}
	
	//左のボタン制御
	$('#Topbtn').hover(function(){
		clear_timer();
		s= Speed_m;
		ScrollDirection="top";
		set_timer();
	},
	function(){
		clear_timer();
		s= Speed;		
		ScrollDirection="top";
		set_timer();			
	});

	//右ボタン制御
	$('#Bottombtn').hover(function(){
		clear_timer();
		s= Speed_m;
		ScrollDirection="down";
		set_timer();
	},
	function(){
		clear_timer();
		s= Speed;
		ScrollDirection="down";
		set_timer();			
	});
	
	//スクロールエリアをマウスオーバーしたとき
	$('#ScrollArea').hover(function(){
		clear_timer();
	},
	function(){
		s= Speed;		
		set_timer();			
	});
	
	//移動開始		
	set_timer();

});



