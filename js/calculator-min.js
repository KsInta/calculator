!function(){var t=["пакетик","пакетика","пакетиков"],e=(new Array,new Array,document.getElementById("year")),a=document.getElementById("month"),o=navigator.userAgent||navigator.vendor||window.opera,c=function(){$(".pet-calculator__radio-button--gender").each(function(){$(this).is("#gender-male:checked")?($('.pet-calculator__label--radio[for="cat-type"] span').text("Кот"),$('.pet-calculator__label--radio[for="dog-type"] span').text("Пес")):$(this).is("#gender-female:checked")&&($('.pet-calculator__label--radio[for="cat-type"] span').text("Кошка"),$('.pet-calculator__label--radio[for="dog-type"] span').text("Собака"))})},n=function(){$('.pet-calculator__radio-button[name="type"]').each(function(){$(this).is("#cat-type:checked")?($(".pet-calculator__select--breed, .pet-calculator__results-emoji, .pet-calculator__radio-button-group-wrapper").hide().removeClass("active"),$(".pet-calculator__select--cat-breed, .pet-calculator__results-emoji--cat, .pet-calculator__radio-button-group-wrapper--cat-activity").show(),$(".pet-calculator__radio-button-group-wrapper--cat-activity").addClass("active")):$(this).is("#dog-type:checked")&&($(".pet-calculator__select--breed, .pet-calculator__results-emoji, .pet-calculator__radio-button-group-wrapper").hide().removeClass("active"),$(".pet-calculator__select--dog-breed, .pet-calculator__results-emoji--dog, .pet-calculator__radio-button-group-wrapper--dog-activity").show(),$(".pet-calculator__radio-button-group-wrapper--dog-activity").addClass("active"))})},l=function(){$(this).closest(".pet-calculator__step").hide(),$(this).closest(".pet-calculator__step").prev(".pet-calculator__step").show()},r=function(){$(this).closest(".pet-calculator__step").hide(),$(this).closest(".pet-calculator__step").next(".pet-calculator__step").show()},p=new Date,u=new Date(p.getFullYear(),p.getMonth()+1,0,0,0,0,0).getDate(),s="января февраля марта апреля мая июня июля августа сентября октября ноября декабря".split(" "),d=function(t,e,a,o){for(var c=document.getElementsByName(t)[0],n=c.options.length=0;n<e;n++)c.options[n]=new Option("month"==t?s[n]:n+a,n+a);c.options[o]&&(c.options[o].selected=!0)},_=function(){var t=0|e.value,o=0|a.value;u=new Date(t,o,0,0,0,0,0).getDate(),t=document.getElementById("day").selectedIndex,d("day",u,1,t)},h=function(){var t=$("#pet-weight").val(),e=$(".pet-calculator__radio-button-group-wrapper.active .pet-calculator__radio-button--activity:checked").val(),a=Math.floor(.75*t*70*e);return $(".pet-calculator__results-calories").text(" ~"+a),console.log(t,e,a),a},g=function(){if($("#cat-type:checked").length)var e=Math.round(h()/200*2)/2;else if($("#dog-type:checked").length)e=Math.round(h()/250*2)/2;var a,o,c;$(".pet-calculator__results-word").text((a=e,o=t,c=(a=Math.abs(a)%100)%10,a>10&&a<20?o[2]:c>1&&c<5?o[1]:1==c?o[0]:o[2])),$(".pet-calculator__results-amount").text(e),console.log(e)},v=function(){h(),g()};for($.get("https://gist.githubusercontent.com/tsympov/d2846f841b70ad3cf86b1fc6d769989d/raw/857e8ee3c15873d81cf60f25b4f2d39e671480ae/gistfile1.txt",function(t){t.split("\n").forEach(function(t){$("#cat-breed").append($('<option value="'+t+'">'+t+"</option>"))})}),$.get("https://gist.githubusercontent.com/tsympov/fac3d9b957afa6be3b6bc53c46d46fc7/raw/af3301ecf4e6d3b53f80c4c2151ef93457010db8/gistfile1.txt",function(t){t.split("\n").forEach(function(t){$("#dog-breed").append($('<option value="'+t+'">'+t+"</option>"))})}),c(),n(),$(".pet-calculator__radio-button--gender").on("change",c),$(".pet-calculator__radio-button--breed").on("change",n),$(".pet-calculator__input--names").on("change",function(){$(".pet-calculator__pet-name").text($(this).val())}),$(".pet-calculator__prev-step").each(function(){$(this).on("click",l)}),$(".pet-calculator__step:not(.pet-calculator__step--step1):not(.pet-calculator__step--step3) .pet-calculator__next-step").each(function(){$(this).bind("click",r)}),d("day",u,1,p.getDate()-1),d("month",12,1,p.getMonth()),d("year",21,p.getFullYear()-20,10),document.addEventListener?(e.addEventListener("change",_,!1),a.addEventListener("change",_,!1)):(e.detachEvent("onchange",_),a.detachEvent("onchange",_)),$("#day").prepend($('<option value="День" selected>День</option>')),$("#month").prepend($('<option value="Месяц" selected>Месяц</option>')),$("#year").prepend($('<option value=" " selected>Год *</option>')),i=.5;i<40.5;i+=.5)4==i?$("#pet-weight").append($('<option value="'+[i]+'" selected>'+[i]+"  кг</option>")):$("#pet-weight").append($('<option value="'+[i]+'">'+[i]+"  кг</option>"));$(".pet-calculator__results-calories").text(v()),$(".pet-calculator__radio-button--breed, #pet-weight, .pet-calculator__radio-button--activity").on("change",v),$(".pet-calculator__close, .pet-calculator__submit").on("click",function(){$(".pet-calculator").hide()});var f=document.querySelector(".pet-calculator__input--names");function b(){height_new=window.innerHeight;var t=Math.abs(height_old-height_new);Math.round(t/height_old*100)>50&&m()}function m(){window.removeEventListener("resize",b),document.querySelector(".pet-calculator__fieldset--gender").classList.remove("move"),document.querySelector(".pet-calculator__step--step1 .pet-calculator__next-step.keyboard-up").classList.remove("move")}f.oninput=function(){var t=/^[a-zA-ZА-Яа-яЁё\s]+$/.test(f.value),e=(f.classList.remove("invalid-under-length","invalid-over-length","invalid-pattern","invalid-under-length-pattern"),document.querySelector(".pet-calculator__input-error--name")),a=$(".pet-calculator__step--step1 .pet-calculator__next-step");f.value.length<3&&!t?(f.classList.add("invalid-under-length-pattern"),a.unbind(),e.textContent="Имя должно состоять не менее чем из 3 символов и содержать только латинские или русские буквы"):f.value.length<3?(f.classList.add("invalid-under-length"),a.unbind(),e.textContent="Имя должно состоять не менее чем из 3 символов"):t?(a.bind("click",r),e.textContent=""):(f.classList.add("invalid-pattern"),a.unbind(),e.textContent="Имя должно содержать только латинские или русские буквы")},$("#year").on("change",function(){var t=$(".pet-calculator__step--step3 .pet-calculator__next-step");" "===$("option:selected",this).val()?(console.log($("option:selected",this).val()),$(".pet-calculator__input-error--date-of-birth").text("Необходимо указать год рождения"),$(".pet-calculator__input-error--date-of-birth").show(),t.unbind()):" "!==$("option:selected",this).val()&&(console.log($("option:selected",this).val()),$(".pet-calculator__input-error--date-of-birth").hide(),t.bind("click",r))}),document.querySelector(".pet-calculator__input--names").addEventListener("focus",function(){setTimeout(function(){height_old=window.innerHeight,window.addEventListener("resize",b),document.querySelector(".pet-calculator__fieldset--gender").classList.add("move"),document.querySelector(".pet-calculator__step--step1 .pet-calculator__next-step.keyboard-up").classList.add("move")},100)}),document.querySelector(".pet-calculator__input--names").addEventListener("blur",m),$(".pet-calculator__step--step1").is(":visible")&&$(".pet-calculator__form").keydown(function(t){if(13==t.keyCode)return t.preventDefault(),!1}),/android/i.test(o)&&document.querySelector(".pet-calculator").classList.add("android")}();