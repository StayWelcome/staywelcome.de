    <footer class="footer" role="contentinfo">
      <?php echo $site->copyright()->kirbytext() ?>

      <div class="footer__language-select">
        <?php snippet('language-select'); ?>
      </div>
      
    </footer>

    <?php echo js('assets/script.js'); ?>

    <script id="__bs_script__">
    //<![CDATA[
    document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.2.13.0.js'><\/script>".replace("HOST", location.hostname));
      //]]></script>
  </body>
</html>
