<?php
    $nombre = [_$POST("nombre")];
    $email = [_$POST("email")];
    $asunto = [_$POST("asunto")];
    $mensaje = [_$POST("mensaje")];
    
    //datos para correo
    $correo_destino = "sebasssanchez99527@gmail.com";
    $asunto2 = "Contacto desde web AdopPet";

    $correo_red = "De: $nombre \n";
    $correo_red .= "Correo: $email \n";
    $correo_red .= "Asunto: $asunto \n";
    $correo_red .= "Mensaje: $mensaje";

    //enviar mensaje
    mail($correo_destino,$asunto2, $correo_red);

?>