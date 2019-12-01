$(function(){
    $('header section.top_nav>ul>li:first-child').mousemove(function(){
		$('header div.box ul').css('height','95px')
	});
	$('header section.top_nav>ul>li:first-child').mouseleave(function(){
		$('header div.box ul').css('height','0')
	});
	$('header nav>ul>li').mouseover(function(){
		// $('header nav>ul>li').css('color','#BED5E6');
		$(this).css('color','#BED5E6');
	});
	$('header nav>ul>li').mouseleave(function(){
		// $('header nav>ul>li').css('color','#BED5E6');
		$(this).css('color','#333333');
	})
	nav_box();
	function nav_box(){
		let li = document.querySelectorAll('header nav>ul>li');
		let li_muse = document.querySelectorAll('header section.nav-box div');
		let nav_box = document.querySelector('header section.nav-box');
		for(let [index,item] of li.entries()){
			// console.log(li_muse[index]);
			li_muse[index].style.display = "none";
			nav_box.style.display = "none";
			item.onmousemove = function(){
				li_muse[index].style.display = "flex";
				nav_box.style.display = "block";
				li[index].setAttribute('class','active');
			}
			item.onmouseleave = function(){
				li_muse[index].style.display = "none";
				nav_box.style.display = "none";
				li[index].removeAttribute('class');
			}
		}
	}
	video_box();
	function video_box(){
		let video_box = document.querySelector('section aside.bg div.video-box');
		video_box.onmouseenter = function(){
			this.style = 'padding:20px';
		}
		video_box.onmouseleave = function(){
			this.style = 'padding:5px';
		}
	}
	
	function scroll(event){
		let nums = document.documentElement.offsetHeight;
		let first_picture = document.querySelector('section aside.bg div.min-picture');
		let sec_picture = document.querySelector("section aside.bg-three div.min-picture");
		let first_text = document.querySelector('section aside.bg div.text-box');
		if(document.documentElement.scrollTop > (nums/10)){
			first_picture.style = 'top:-20%';
			first_text.style = 'top:-40%';
		} else if(document.documentElement.scrollTop < (nums/10)){
			first_picture.style = 'top:-5%';
			first_text.style = 'top:-20%';
		}
		if(document.documentElement.scrollTop > (nums/4)){
			sec_picture.style = 'top:-95%';
		} else if(document.documentElement.scrollTop < (nums/4)){
			sec_picture.style = 'top:-70%';
		}
	}
	window.onscroll = function(event){
		scroll(event);
	}
	enterAndOut();
	function enterAndOut(){
		let maxBox = document.querySelectorAll('div.foot div.foot-one');
		let bottom = document.querySelectorAll('div.foot div.foot-one .bot');
		let top = document.querySelectorAll('div.foot div.foot-one .top');
		let left = document.querySelectorAll('div.foot div.foot-one .left');
		let right = document.querySelectorAll('div.foot div.foot-one .right');
		let cover = document.querySelectorAll('div.foot div.foot-one div.foot-one-left .font-bot .zhe');
		for(let [index,items] of maxBox.entries()){
			items.onmouseenter = function(){
				cover[index].innerHTML = 'DETAIL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>';
				cover[index].style = 'width:50%;color:black;background-color:#FFF';
				top[index].style = 'height:2px;width:95.4%;';
				left[index].style = 'height:85%;width:2px;';
				right[index].style = 'height:85%;width:2px;';
				bottom[index].style = 'height:2px;width:95.4%;';
			}
			items.onmouseleave = function(){
				cover[index].innerHTML = '';
				cover[index].style = 'width:0%;color:black;background-color:#FFF';
				top[index].style = 'height:0;width:0;';
				left[index].style = 'height:0;width:0;';
				right[index].style = 'height:0;width:0;';
				bottom[index].style = 'height:0;width:0;';
			}
		}
	}
	slide();
	function slide(){
		let lbt = this.document.querySelector('.lbt')
		let ul = lbt.querySelector('ul')
		let li = lbt.querySelectorAll('li')
		let img = lbt.querySelectorAll('li img')
		let span = lbt.querySelectorAll('span')
		let w = li[0].offsetWidth
		let index = 1;
		span[0].onclick = function() {
		    index--
		    if (index < 0) {
		        index = 4
		        ul.style.transition = 'none'
		    } else {
		        ul.style.transition = 'all 0.2s linear'
		    }
		
		    for (let i = 0; i < img.length; i++) {
		        img[i].style = 'width:80%;height:80%'
		    }
		    img[index].style = 'width:100%;height:100%'
		
		    ul.style.left = -index * 50 + 25 + '%'
		}
		span[1].onclick = function() {
		    index++
		    if (index > li.length - 2) {
		        index = 0
		        ul.style.transition = 'none'
		    } else {
		        ul.style.transition = 'all 0.2s linear'
		    }
		
		    for (let i = 0; i < img.length; i++) {
		        img[i].style = 'width:80%;height:80%'
		    }
		    img[index].style = 'width:100%;height:100%'
		
		    ul.style.left = -index * 50 + 25 + '%'
		}
	}
	recommendCover();
	function recommendCover(){
		let cover = document.querySelectorAll('aside.bottom div.max_box ul li p.items_more span.cover');
		let p = document.querySelectorAll('aside.bottom div.max_box ul li p.items_more');
		for(let [index,items] of p.entries()){
			items.onmouseenter = function(){
				cover[index].innerHTML = 'DETAIL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;';
				cover[index].style = 'width:100%';
			}
			items.onmouseleave = function(){
				cover[index].innerHTML = '';
				cover[index].style = 'width:0';
			}
		}
	}
	toTop();
	function toTop(){
		let first_top = document.querySelector('footer section.footer aside.to_top');
		let sec_top = document.querySelector('footer section.fixed');
		let timer = null;
		first_top.onclick = function(){
			timer = setInterval(slow,5);
		}
		sec_top.onclick = function(){
			timer = setInterval(slow,5);
		}
		
		function slow(){
			let scroll = document.documentElement.scrollTop;
			if(scroll > 0){
				scroll -= 50;
				window.scroll(0,scroll);
			} else{
				clearInterval(timer);
			}
		}
	}
})