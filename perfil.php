<?php
session_start();
?>

<div class="container">

<div class="panel-heading">Welcome User</div>
<div class="panel-body">
    <img src="<?php echo $_SESSION["user_image"]; ?>" class="img-responsive img-circle img-thumbnail" />
    <h3><b>Name :</b> <?php echo $_SESSION['user_first_name'].' '.$_SESSION['user_last_name']; ?></h3> 
</div>

<a href="logout.php">Logout</a>
</div>