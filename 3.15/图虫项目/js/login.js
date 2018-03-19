//登录注册部分js

		window.onload = function() {

			var login = document.getElementById("logoin");
			var back = document.getElementById("back");
			var btn = document.getElementById("btn");
			var hide = document.getElementById("hide");

			var btn1 = document.getElementById("btn1");
			var login1 = document.getElementById("logoin1");
			var back1 = document.getElementById("back1");
			var hide1 = document.getElementById("hide1");

			var reg = document.getElementById("reg");
			var reg1 = document.getElementById("reg1");

			btn.onclick = function() {
				login.style.display = "block";
				back.style.display = "block";
			};

			hide.onclick = function() {
				login.style.display = "none";
				back.style.display = "none";
			};

			btn1.onclick = function() {
				login.style.display = "block";
				back.style.display = "block";
				login1.style.display = "none";
				back1.style.display = "none";
			};

			reg.onclick = function() {
				login1.style.display = "block";
				back1.style.display = "block";
			};
			reg1.onclick = function() {
				login1.style.display = "block";
				back1.style.display = "block";
				login.style.display = "none";
				back.style.display = "none";
			};

			hide1.onclick = function() {
				login1.style.display = "none";
				back1.style.display = "none";
			};

		};


