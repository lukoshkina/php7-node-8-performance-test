<?php

declare(strict_types=1);

function isSimple(int $number) : bool {
    $limit = floor($number / 2);
    for ($i = 2; $i <= $limit; $i++) {
        if ($number % $i === 0) {
            return false;
        }
    }

    return true;
}

function isPalindrome(int $number) : bool {
    $origin = (string) $number;
    $reverse = strrev($origin);
    return (int)($origin) === (int)($reverse);
}

function main() : array {
    $start = 9999;
    $end = 999;

    $arg1 = $start;
    $arg2 = $start;
    $palindrome = 1;
    for ($i = $start; $i > $end; $i--) {
        if (isSimple($i)) {
            for ($j = $i; $j > $end; $j--) {
                if ($i === $j || isSimple($j)) {
                    if (isPalindrome($i * $j) && $palindrome < ($i * $j)) {
                        $palindrome = $i * $j;
                        $arg1 = $i;
                        $arg2 = $j;
                    }
                }
            }
        }
    }

    return [$arg1, $arg2, $palindrome];
}

$start = time();
var_dump(main());
echo "\n " . time() - $start . "\n";