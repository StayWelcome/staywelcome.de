<?php snippet('header'); ?>

<main class="main" role="main">
  <h1>
    <?php echo $page->title()->html(); ?>
  </h1>

  <?php echo $page->text()->kirbytext(); ?>

  <?php snippet('contact-form', array(
      'sendButton' => $page->sendbuttontitle(),
      'emailAddressTitle' => $page->emailaddresstitle(),
      'messageTitle' => $page->messagetitle(),
      'formTitle' => $page->title()
  )); ?>

</main>

<?php snippet('footer'); ?>
