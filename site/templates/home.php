<?php snippet('header'); ?>

<main class="main" role="main">
  <h1>
    <?php echo $page->title()->html(); ?>
  </h1>

  <?php echo $page->abstract()->kirbytext(); ?>
</main>

<?php snippet('footer'); ?>
