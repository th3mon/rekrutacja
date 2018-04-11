$(() => {
  const $charactersContainer = $('.characters');
  const $form = $charactersContainer.children('form');
  const $button = $form.find('button[type="submit"]');
  const audio = new Audio('imperial_march.mp3');

  function isForceIncluded(force) {
    const $checkedCheckboxes = $form.find('input:checked');

    return $checkedCheckboxes
      .filter((index, checkbox) => checkbox.value === force)
      .length;
  }

  function isDarkSideIncluded() {
    return isForceIncluded('dark_side');
  }

  function isLightSideIncluded() {
    return isForceIncluded('light_side');
  }

  $form.on('submit', () => {
    if (isLightSideIncluded()) {
      return true;
    }

    if (isDarkSideIncluded()) {
      audio.play();

      return false;
    }

    return true;
  });
});