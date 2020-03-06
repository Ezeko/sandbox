substr(str_shuffle(strtolower(sha1(rand() . time() . "my salt string"))),0, $PASSWORD_LENGTH = 8);
