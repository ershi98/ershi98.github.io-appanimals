<?php

//logout.php

include('php/config.php');

//Reset OAuth access token
$google_client->revokeToken();

// Unset all of the session variables.
$_SESSION = array();

// Delete the session cookie.
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}

// Destroy the session.
session_destroy();

// Clear any other persistent data
foreach ($_COOKIE as $key => $value) {
    setcookie($key, '', time() - 3600);
}

//redirect page to index.html
header('location:index.html');
?>
