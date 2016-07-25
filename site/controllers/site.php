<?php
return function($site, $pages, $page) {
  $alert = null;

  if (get('contact-submit')) {
    $data = array(
      'email'   => get('contact-email'),
      'message' => get('contact-message')
    );

    $rules = array(
      'email'   => array('required', 'email'),
      'message' => array('required', 'min' => 1)
    );

    $messages = array(
      'email'   => 'Please enter an email address.',
      'message' => 'Please enter a message.'
    );

    if ($invalid = invalid($data, $rules, $messages)) {
      $alert = $invalid;
    } else {
      $email = email(array(
        'to'      => $site->contactFormRecipient(),
        'from'    => $data['email'],
        'subject' => 'New message on staywelcome.de',
        'body'    => snippet('contact-mail', $data, true)
      ));

      if ($email->send()) {
        go('thank-you');
      } else {
        $alert = array($email->error());
      }
    }
  }

  return compact('alert');
};
?>
