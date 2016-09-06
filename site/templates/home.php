<?php snippet('header'); ?>

<main class="main" role="main">

  <h1>
    <?php echo $page->title(); ?>
  </h1>

  <?php echo $page->abstract()->kirbytext(); ?>

  <?php foreach($page->children() as $offer): ?>
    <?php snippet('offer', array('offer' => $offer)); ?>
  <?php endforeach; ?>
</main>

<?php snippet('footer'); ?>
