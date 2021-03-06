<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title><?php echo $site->title()->html(); ?> | <?php echo $page->title()->html(); ?></title>

    <meta name="description" content="<?php echo $site->description()->html(); ?>">
    <meta name="keywords" content="<?php echo $site->keywords()->html(); ?>">

    <link href="https://fonts.googleapis.com/css?family=Raleway:400,400i,700,700i" rel="stylesheet">
    <?php echo css('assets/normalize.css'); ?>
    <?php echo css('assets/style.css'); ?>
  </head>

  <body>
    <div class="wrapper">
      <header class="header">
        <div class="header__container">
          <div class="header__logo">
            <?php snippet('logo'); ?>
          </div>

          <div class="header__navigation">
            <?php snippet('menu'); ?>
          </div>
        </div>
      </header>