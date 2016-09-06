<h2>
  <?php echo $offer->title(); ?>
</h2>
<h3>
<?php echo $offer->content()->listtitle() ?>
</h3>
<?php echo $offer->content()->content()->kirbytext() ?>
