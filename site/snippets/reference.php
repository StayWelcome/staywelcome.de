<a href="<?php echo $reference->content()->url() ?>" target="_blank" rel="noopener noreferrer">
<div class="references__reference">
<?php $image = $reference->image($reference->content()->imagefile()); ?>
<?php if ($image): ?>
    <img class="references__image" src="<?php echo $image->url() ?>" alt="<?php echo $reference->title() ?>" title="<?php echo $image->caption() ?>" >
<?php endif ?>
</div>
</a>
