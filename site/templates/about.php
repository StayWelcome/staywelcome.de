<?php snippet('header'); ?>

<main class="main" role="main">
  <h1>
    <?php echo $page->title()->html(); ?>
  </h1>

  <?php echo $page->text()->kirbytext(); ?>

  <h2>Bekannt aus</h2>

  <div class="references">
  <?php foreach($page->children() as $reference): ?>
    <?php snippet('reference', array('reference' => $reference)); ?>
  <?php endforeach; ?>
  </div>
</main>

<?php snippet('footer'); ?>
