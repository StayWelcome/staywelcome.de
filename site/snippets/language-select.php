<div class="language-select">
  <span class="language-select__item language-select__item--current">
    <?php snippet('language', array('language' => $site->language())); ?>
  </span>

  <?php foreach($site->languages() as $language): ?>
    <?php if ($language != $site->language()): ?>
      <span class="language-select__item">
        <a href="<?php echo $language->url(); ?>">
          <?php snippet('language', array('language' => $language)); ?>
        </a>
      </span>
    <?php endif; ?>
  <?php endforeach; ?>
</div>
