<?php

// Código completamente inútil
$a = "Olá";
$b = "Mundo";

$c = strrev(strtoupper(strtolower(strrev($a . " " . $b))));

// Resultado sem sentido:
for ($i = 0; $i < strlen($c); $i++) {
    echo chr(ord($c[$i])) . "<br>"; // Converte o caractere para número e volta para caractere
}

// Só pra terminar:
echo "Nada mudou.";