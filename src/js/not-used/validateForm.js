'use strict';

/**
 *
 * @param options
 formId: 'profile',
 formValidClass: 'form_valid',
 formInvalidClass: 'form_invalid',
 inputErrorClass: 'input_error'
 */
function validateForm(options) {
    var form = document.getElementById(options.formId);

    if(!form) {
        console.log("Cannot find form with id: "+ options.formId);
        return;
    }

    var funcHandler = options.funcHandler || sendForm;
    var formValidClass = options.formValidClass || 'Form_valid';
    var formInvalidClass = options.formInvalidClass || 'Form_invalid';
    var inputErrorClass = options.inputErrorClass || 'Input_error';

    function requiredValid(elem) {
        if (elem.value == '' && elem.hasAttribute('data-required')) {
            errorInput(elem);
        }
    }

    function validElem(elem) {
        var regExp;
        var value = elem.value;

        switch (elem.dataset.validator) {
            case 'length':
                value = value.length;
                lenghtCheck(elem, value);

                requiredValid(elem);

                break;
            case 'letters':
                regExp = /^[^\s]([a-zа-яё\s\-]*)$/i;
                if (!regExp.test(value)) errorInput(elem);

                requiredValid(elem);

                break;
            case 'number':
                if (isNaN(Number(value))) {
                    errorInput(elem);
                    return;
                }

                value = parseInt(value);
                lenghtCheck(elem, value);

                requiredValid(elem);

                break;
            case 'regexp':
                regExp = new RegExp(elem.dataset.validatorPattern);
                if (!regExp.test(value) && value != '') errorInput(elem);

                requiredValid(elem);

                break;
            case 'file':
                if(elem.value === '') {
                    if(!elem.parentNode.querySelector('.FileErrorText')) {
                        var para = document.createElement('p');
                        para.classList.add('FileErrorText');
                        para.textContent = 'Нет прикрепленного файла';
                        setTimeout(function () {
                            elem.parentNode.removeChild(para);
                        }, 1000);
                        elem.parentNode.insertBefore(para, elem);
                    }
                }

                requiredValid(elem);

                break;
            default:
                requiredValid(elem);

                break;
        }
    }

    function lenghtCheck(elem, value) {
        var min, max;
        if (elem.dataset.validatorMin) {
            min = parseInt(elem.dataset.validatorMin);
        }
        if (elem.dataset.validatorMax) {
            max = parseInt(elem.dataset.validatorMax);
        }

        if (min > value || value > max) {
            errorInput(elem);
        }
    }

    function errorInput(elem) {
        elem.classList.add(inputErrorClass);
        setTimeout(function () {
            elem.classList.remove(inputErrorClass);
        }, 500)
    }

    function checkForm() {
        try {
            var inputList = form.querySelectorAll('input');

            for (var i = 0; i < inputList.length; i++) {
                validElem(inputList[i]);

                if (inputList[i].classList.contains(inputErrorClass)) {
                    form.classList.remove(formValidClass);
                    form.classList.add(formInvalidClass);
                    inputList[i].focus();
                    return false;
                }
                form.classList.remove(formInvalidClass);
                form.classList.add(formValidClass);
            }
            return true;
        } catch (e) {
            console.log(e);
        }
    }

    form.addEventListener('blur', function (event) {
        validElem(event.target);
    }, true);

    form.addEventListener('focus', function (event) {
        if (event.target.classList.contains(inputErrorClass)) {
            errorInput(elem);
        }
    }, true);

    form.addEventListener('click', function (event) {
        if (event.target.tagName === 'INPUT' && event.keyCode == 13) {
            checkForm();
        }
    }, true);

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (checkForm()) funcHandler(form);
    });
}