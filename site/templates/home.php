<?php snippet('header'); ?>

<main class="main" role="main">
  <?php echo $page->abstract()->kirbytext(); ?>

  <?php foreach($page->children() as $offer): ?>
    <?php snippet('offer', array('offer' => $offer)); ?>
  <?php endforeach; ?>
</main>

<?php snippet('contact-form'); ?>

<?php snippet('footer'); ?>
