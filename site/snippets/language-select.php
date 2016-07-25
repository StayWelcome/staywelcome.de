<div class="language-select">
  <button class="language-select__current-language js-language-switch" type="button">
    <?php snippet('language', array('language' => $site->language())); ?>
  </button>

  <ul class="language-select__languages js-language-options">
    <?php foreach($site->languages() as $language): ?>
      <?php if ($language != $site->language()): ?>
        <li>
          <a class="language-select__language" href="<?php echo $language->url(); ?>">
            <?php snippet('language', array('language' => $language)); ?>
          </a>
        </li>
      <?php endif; ?>
    <?php endforeach; ?>
  </ul>
</div>
