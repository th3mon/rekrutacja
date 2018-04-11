$(() => {
  const $charactersContainer = $('.characters');
  const $form = $charactersContainer.children('form');
  const $button = $form.find('button[type="submit"]');
  const audio = new Audio('imperial_march.mp3');

  $form.on('submit', () => {

    audio.play();

    return false;
  });
});