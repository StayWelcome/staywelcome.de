<ul class="language-select">
  <?php foreach($site->languages() as $language): ?>
    <?php if ($language != $site->language()): ?>
      <li>
        <a class="language-select__language language-select__language--<?php echo $language->code(); ?>" href="<?php echo $language->url(); ?>">
          <?php echo $language->name(); ?>
        </a>
      </li>
    <?php endif; ?>
  <?php endforeach; ?>
</ul>
