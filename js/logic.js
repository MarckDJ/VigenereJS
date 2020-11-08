var textVigi =
    textVigi ||
    (() => {
        var vigenere = (text, key, command) => {
            let claveCompletada = "";
            let result = "";
            let index = 0;
            for (let i = index; i < text.length; i++) {
                for (let j = 0; j < key.length; j++) {
                    if (claveCompletada.length < text.length) {
                        if (text.charAt(index) != " ") {
                            claveCompletada += key.charAt(j) + "";
                        } else {
                            claveCompletada += " ";
                            j--;
                        }
                        index++;
                    } else {
                        break;
                    }
                }
            }
            for (let i = 0; i < text.length; i++) {
                if (text.charAt(i) != " ") {
                    if (command) {
                        result += encrypt(
                            text.charAt(i),
                            claveCompletada.charAt(i)
                        );
                    } else {
                        result += decrypt(
                            text.charAt(i),
                            claveCompletada.charAt(i)
                        );
                    }
                } else {
                    result += " ";
                }
            }
            return result;
        };
        return {
            encriptar: (text, key) => {
                return vigenere(text.toUpperCase(), key.toUpperCase(), true);
            },
            desencriptar: (text, key) => {
                return vigenere(text.toUpperCase(), key.toUpperCase(), false);
            },
        };
    })();

var encrypt =
    encrypt ||
    (() => {
        let tablaCesar = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "Ñ",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
        ];
        return (text, key) => {
            let indiceX = 0;
            let indiceY = 0;
            for (let i = 0; i < tablaCesar.length; i++) {
                if (text == tablaCesar[i]) {
                    indiceX = i;
                    break;
                }
            }

            for (let j = 0; j < tablaCesar.length; j++) {
                if (key == tablaCesar[j]) {
                    indiceY = j + 1;
                    break;
                }
            }
            return tablaCesar[(indiceX + indiceY) % 27];
        };
    })();

var decrypt =
    decrypt ||
    (() => {
        let tablaCesar = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "Ñ",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
        ];
        return (text, key) => {
            let indiceX = 0;
            let indiceY = 0;
            for (let i = 0; i < tablaCesar.length; i++) {
                if (text == tablaCesar[i]) {
                    indiceX = i;
                    break;
                }
            }

            for (let j = 0; j < tablaCesar.length; j++) {
                if (key == tablaCesar[j]) {
                    indiceY = j + 1;
                    break;
                }
            }
            if (indiceX >= indiceY) {
                return tablaCesar[(indiceX - indiceY) % 26];
            } else {
                return tablaCesar[27 - (indiceY - indiceX)];
            }
        };
    })();

function enc() {
    document.getElementById("out").value = textVigi
        .encriptar(
            document.getElementById("msg").value,
            document.getElementById("key").value
        )
        .toLowerCase();
}

function des() {
    document.getElementById("out").value = textVigi
        .desencriptar(
            document.getElementById("msg").value,
            document.getElementById("key").value
        )
        .toLowerCase();
}

function V_01() {
    document.getElementById("msg").value = String(
        document.getElementById("msg").value
    ).match(/[a-zñ ]+/);
}

function V_02() {
    document.getElementById("key").value = String(
        document.getElementById("key").value
    ).match(/[a-zñ]+/);
}
