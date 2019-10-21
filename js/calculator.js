+(function(){
  var amounts = ['пакетик', 'пакетика', 'пакетиков'];
  var catsBreed = new Array;
  var dogsBreed = new Array;
  
  var year = document.getElementById('year');
  var month = document.getElementById("month");
  
  var numberToString = function(n, text_forms) {
    n = Math.abs(n) % 100; var n1 = n % 10;
    if (n > 10 && n < 20) { 
      return text_forms[2]; 
    }
    if (n1 > 1 && n1 < 5) 
    { 
      return text_forms[1]; 
    }
    if (n1 == 1) { 
      return text_forms[0]; 
    }
    return text_forms[2];
  }
  
  var selectGenderHandler = function() {
    $('.pet-calculator__radio-button--gender').each(function() {
      if ($(this).is('#gender-male:checked')) {
        $('.pet-calculator__label--radio[for="cat-type"] span').text('Кот');
        $('.pet-calculator__label--radio[for="dog-type"] span').text('Пес');    
      } else if ($(this).is('#gender-female:checked')) {
        $('.pet-calculator__label--radio[for="cat-type"] span').text('Кошка');
        $('.pet-calculator__label--radio[for="dog-type"] span').text('Собака');
      }
    });
  };
  
  var selectBreedHandler = function() {
    $('.pet-calculator__radio-button[name="type"]').each(function() {
      if ($(this).is('#cat-type:checked')) {
        $('.pet-calculator__select--breed, .pet-calculator__results-emoji, .pet-calculator__radio-button-group-wrapper').hide().removeClass('active');
        $('.pet-calculator__select--cat-breed, .pet-calculator__results-emoji--cat, .pet-calculator__radio-button-group-wrapper--cat-activity').show();    
        $('.pet-calculator__radio-button-group-wrapper--cat-activity').addClass('active');
      } else if ($(this).is('#dog-type:checked')) {
        $('.pet-calculator__select--breed, .pet-calculator__results-emoji, .pet-calculator__radio-button-group-wrapper').hide().removeClass('active');
        $('.pet-calculator__select--dog-breed, .pet-calculator__results-emoji--dog, .pet-calculator__radio-button-group-wrapper--dog-activity').show();
        $('.pet-calculator__radio-button-group-wrapper--dog-activity').addClass('active');
      }
    });
  };
  
  var prevStepHandler = function() {
    $(this).closest('.pet-calculator__step').hide();
    $(this).closest('.pet-calculator__step').prev('.pet-calculator__step').show();
  };
  
  var nextStepHandler = function() {
    $(this).closest('.pet-calculator__step').hide();
    $(this).closest('.pet-calculator__step').next('.pet-calculator__step').show();
  };
  
  var day = new Date,
    md = (new Date(day.getFullYear(), day.getMonth() + 1, 0, 0, 0, 0, 0)).getDate(),
    $monthName = "января февраля марта апреля мая июня июля августа сентября октября ноября декабря".split(" ");
  
  var setSelect =  function(a, c, d, e) {
    var el = document.getElementsByName(a)[0];
    for (var b = el.options.length = 0; b < c; b++) {
      el.options[b] = new Option(a == 'month' ? $monthName[b] : b + d, b + d);
    }
    el.options[e] && (el.options[e].selected = !0)
  }
  
  var checkDate = function() {
    var a = year.value | 0,
      c = month.value | 0;
      md = (new Date(a, c, 0, 0, 0, 0, 0)).getDate();
      a = document.getElementById("day").selectedIndex;
    setSelect("day", md, 1, a)
  };
  
  var calculateCalories = function() {
    var pet_weight = $('#pet-weight').val();
    var pet_activity = $('.pet-calculator__radio-button-group-wrapper.active .pet-calculator__radio-button--activity:checked').val();
    var calories = Math.floor(pet_weight * 0.75 * 70 * pet_activity);
    $('.pet-calculator__results-calories').text(' ~' + calories);
    console.log(pet_weight, pet_activity, calories);
    return calories;
  };
  
  var calculateBagsAmount = function() {
    if ($('#cat-type:checked').length) {
      var amount = (Math.round(calculateCalories() / 200 * 2) / 2);
    } else if ($('#dog-type:checked').length) {
      var amount = (Math.round(calculateCalories() / 250 * 2) / 2);
    }
    $('.pet-calculator__results-word').text(numberToString(amount, amounts));
    $('.pet-calculator__results-amount').text(amount);
    console.log(amount);
  };
  
  var calculateHandler = function() {
    calculateCalories();
    calculateBagsAmount();
  };
  
  $.get('https://gist.githubusercontent.com/tsympov/d2846f841b70ad3cf86b1fc6d769989d/raw/857e8ee3c15873d81cf60f25b4f2d39e671480ae/gistfile1.txt', function(data) {
    catsBreed = data.split('\n');
    catsBreed.forEach(function(item) {
      $('#cat-breed').append($('<option value="'+item+'">'+item+'</option>'));
    });
  });
  
  $.get('https://gist.githubusercontent.com/tsympov/fac3d9b957afa6be3b6bc53c46d46fc7/raw/af3301ecf4e6d3b53f80c4c2151ef93457010db8/gistfile1.txt', function(data) {
    dogsBreed = data.split('\n');
    dogsBreed.forEach(function(item) {
      $('#dog-breed').append($('<option value="'+item+'">'+item+'</option>'));
    });
  });
  
  selectGenderHandler();
  selectBreedHandler();
  
  $('.pet-calculator__radio-button--gender').on('change', selectGenderHandler);
  $('.pet-calculator__radio-button--breed').on('change', selectBreedHandler);
  
  $('.pet-calculator__input--names').on('change', function() {
    $('.pet-calculator__pet-name').text($(this).val());
  });
  
  $('.pet-calculator__prev-step').each(function() {
    $(this).on('click', prevStepHandler);
  });
  
  $('.pet-calculator__step:not(.pet-calculator__step--step1):not(.pet-calculator__step--step3) .pet-calculator__next-step').each(function() {
    $(this).bind('click', nextStepHandler);
  });
  
  setSelect("day", md, 1, day.getDate() - 1);
  setSelect("month", 12, 1, day.getMonth());
  setSelect("year", 21, day.getFullYear()-20, 10);
  
  if (document.addEventListener) {
    year.addEventListener('change', checkDate, false);
    month.addEventListener('change', checkDate, false);
  } else {
    year.detachEvent('onchange', checkDate);
    month.detachEvent('onchange', checkDate);
  }
  
  $('#day').prepend($('<option value="День" selected>День</option>'));
  $('#month').prepend($('<option value="Месяц" selected>Месяц</option>'));
  $('#year').prepend($('<option value=" " selected>Год *</option>'));
  
  for (i = 0.5; i < 40.5; i += 0.5) {
    if (i == 4) {
      $('#pet-weight').append($('<option value="'+[i]+'" selected>'+[i]+'  кг</option>'));
    } else {
      $('#pet-weight').append($('<option value="'+[i]+'">'+[i]+'  кг</option>'));
    }
  }
  
  $('.pet-calculator__results-calories').text(calculateHandler());
  $('.pet-calculator__radio-button--breed, #pet-weight, .pet-calculator__radio-button--activity').on('change', calculateHandler);
  
  $('.pet-calculator__close, .pet-calculator__submit').on('click', function() {
    $('.pet-calculator').hide();
  });
  
  var input = document.querySelector('.pet-calculator__input--names');
  
  input.oninput = function() {
    var onlyLetters = /^[a-zA-ZА-Яа-яЁё\s]+$/.test(input.value);
    var classes = input.classList.remove('invalid-under-length', 'invalid-over-length', 'invalid-pattern', 'invalid-under-length-pattern');
    var name_error = document.querySelector('.pet-calculator__input-error--name');
    var next_step = $('.pet-calculator__step--step1 .pet-calculator__next-step');
    if (input.value.length < 3 && !onlyLetters) {
      classes;
      input.classList.add('invalid-under-length-pattern');  
      next_step.unbind();
      name_error.textContent = 'Имя должно состоять не менее чем из 3 символов и содержать только латинские или русские буквы';
    } else if (input.value.length < 3) {
      classes;
      input.classList.add('invalid-under-length');
      next_step.unbind();
      name_error.textContent = 'Имя должно состоять не менее чем из 3 символов';
    } else if (!onlyLetters) {
      classes;
      input.classList.add('invalid-pattern');
      next_step.unbind();
      name_error.textContent = 'Имя должно содержать только латинские или русские буквы';
    } else {
      classes;
      next_step.bind('click', nextStepHandler);
      name_error.textContent = '';
    }  
  };
  
  $('#year').on('change', function() {
    var next_step = $('.pet-calculator__step--step3 .pet-calculator__next-step');
    if ($('option:selected', this).val() === ' ') {
      console.log($('option:selected', this).val());
      $('.pet-calculator__input-error--date-of-birth').text('Необходимо указать год рождения');
      $('.pet-calculator__input-error--date-of-birth').show();
      next_step.unbind();
    } else if ($('option:selected', this).val() !== ' ') {
      console.log($('option:selected', this).val());
      $('.pet-calculator__input-error--date-of-birth').hide();
      next_step.bind('click', nextStepHandler);
    } 
  });
})();
