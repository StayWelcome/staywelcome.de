<form class="contact-form" method="post">
  <fieldset>
    <legend><?php echo $formTitle ?></legend>

    <?php if ($alert): ?>
      <?php foreach($alert as $message): ?>
        <?php snippet('alert', array('message' => $message)); ?>
      <?php endforeach; ?>
    <?php endif; ?>

    <label for="contact-email">
      <?php echo $emailAddressTitle ?>
    </label>

    <input id="contact-email" name="contact-email" placeholder="email@example.com" required type="email">

    <label for="contact-message">
      <?php echo $messageTitle ?>
    </label>

    <textarea id="contact-message" name="contact-message" required rows="8"></textarea>

    <button class="contact-form__submit" name="contact-submit" type="submit" value="submit">
      <?php echo $sendButton ?>
    </button>
  </fieldset>
</form>
