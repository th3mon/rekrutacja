$(() => {
  const $charactersContainer = $('.characters');
  const $form = $charactersContainer.children('form');
  const $button = $form.find('button[type="submit"]');
  const audio = new Audio('imperial_march.mp3');

  function isDarkSideIncluded() {
    const $checkedCheckboxes = $form.find('input:checked');

    return $checkedCheckboxes
      .filter((index, checkbox) => checkbox.value === 'dark_side')
      .length;
  }

  $form.on('submit', () => {
    if (isDarkSideIncluded()) {
      audio.play();

      return false;
    }

    return true;
  });
});