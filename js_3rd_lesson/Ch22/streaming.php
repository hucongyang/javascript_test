<?php

    $i = 0;
    which ($i < 10) {
        echo "Number is $i";
        flush();

        sleep(5000);
        $i++;
    }
