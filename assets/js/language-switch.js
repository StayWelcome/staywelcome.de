export default function () {
  var currentLanguage = document.querySelector('.js-language-switch');
  var languageOptions = document.querySelector('.js-language-options');

  currentLanguage.addEventListener('click', function () {
    currentLanguage.classList.toggle('is-active');
    languageOptions.classList.toggle('is-visible');
  });
};