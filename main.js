var tasks = {
    /* color_header tulajdonság
     * Modernebb böngészök közül a firefox és a chrome támogatja
     * a developers tools formázását css-el. Ezt az objektum property-t felhasználom
     * később a konzolra írás formázására.
     */
    color_header : `background: black; color: white;font-size: 3ch`,
    
    /* winner metódus
     * Metódus az egyes feladatokban található győztes kiértékelésére.
     * A metódusnak két paramétert kell adni, egy objektumot és egy index számot.
     * Az index szám adja meg hogy az adott objektum valamelyik <kulcsának> hanyadik
     * értéke tartalmazza a győzelmek <számlálóját>.
     * pl.: objektum[<kulcs> : "béla", <számláló>, 22, "Sanyi!", "sanyikááááám", 666]  
     */
    winner : function(array,counter) {
        let winner;
        for (const key in array) {
            if (!winner) {
                winner = key;
            }
            if (array[`${key}`][counter] > array[`${winner}`][counter]) {
                winner = key;
            }
        }
        return winner;
    },
    
    /* count metódus
     * Megszámoljuk hogy ebben (this) az objetumban hány feladat van (task_1,task_2....)
     * Ha az összes feladatot le akarjuk futtatni példáúl egy for-next ciklussal
     * akkor felhasználható a ciklus hosszának meghatározására.
     */
    count : function() {
        let counter = 0;
        for (let entry in this) {
            if (!entry.indexOf("task_")) {
                counter++;
            }
        }
        return counter;
    },
    
    /* display metódus
     * Az objektumban található feladatok eredeményeit azaz a visszatérő értékeit
     * megjelenítő metódus. Felismeri a típusát a visszatérő értéknek azaz a 
     * feladat eredményének és ez alapján írja ki a konzolra.
     * Paraméterként meg kell adni neki egy feldat számát, csak a számot.
     * pl.: tasks.display(3)  ......a hármas feladat eredményét kiírja a konozolra
     */
    display : function(nr) {
        let ret = this[`task_${nr}`]();                         // összefűzi a paraméterként (nr) megadott számot a 'task_' stringel, 
                                                                // és így hívja neg ennek az objektumnak (this) azt a feladat metódusát
                                                                // amelyiket jelőli az összefűzött szöveg és visszatérő értékét tárolja
                                                                // a ret változóban. Pl.: let ret = this[`task_2`]()
        let str0 = "A feladat megoldása:";
        let str = "";
        if (typeof(ret) === `object`) {                         // ha a feladat eredménye objektum
            for (const [key, value] of Object.entries(ret)) {
                str += `${key} : ${value}\n`;
            }
        } else if (Array.isArray(ret)) {                        // ha a feladat eredménye tömb
            for (let entry in ret) {
                str += `${entry} : ${ret[entry]}\n`;
            }
        } else if (typeof(ret) === `string`) {                  // ha a feladat eredménye szöveg
            str += `${ret}`;
        } else if (typeof(ret) === `number`) {                  // ha a feladat eredménye szám
            str += `${ret}`;
        } else {                                                // ha valami nem stimmel a feladat visszatérő értékével ez jelzi
            str += `A feladat megoldásának a típusa nem meghatározható.\nTartalma:\n${ret}`;
        }
        console.log(`%c${str0}`,`background: green; color: white;font-size: 2.5ch`)
        console.log(`%c${str}`,`background: white; color: black;font-size: 3ch`);
    },
    
    /* printArray metódus
     * Egyszerű tömb formázása stringbe. Egyes feladatokban töbször felhasználom a feladatokban megadott tömbök
     * console-ba való kiiratására. 
     */
    printArray : function(array) {
        let str = "";
        for (let entry in array) {
            str += `${entry} : ${array[entry]}\n`;
        }
        return str
    },

    /***************************************************************************
     * Feladatok
     */

    /* 1. feladat */
    task_1 : function() {
        console.log(`%c1. Feladat: Pozitív számok`,this.color_header);
        let input = [false, '42', 36, -50, 'sajt', 0, 3.14, true, NaN, undefined, 5000]
        console.log(`Induló tömb elemei:\n${this.printArray(input)}`);
        let output = [];
        input.forEach(function(entry) {
            if (typeof(entry) === `number` && entry > 0) {
                output.push(entry);        
            }
        })
        return output;
    },
    /* 2. feladat */
    task_2 : function() {
        console.log(`%c2. Feladat: Ötöslottó`,this.color_header);
        let output = [];
        let number;
        if (output.length = 1) {
            for (let i = 0; i < 5; i++) {
                for (let a = 0; a < output.length; a++) {
                    while (number == output[a]) {
                        number = Math.floor(Math.random() * 90) + 1;
                    }
                }
            output.push(number);
            }
        } else {
            output.push(Math.floor(Math.random() * 90) + 1);
        }
        return output;
    },
    /* 3. feladat */
    task_3 : function() {
        console.log(`%c3. Feladat: Csoportosítás`,this.color_header);
        let input = ['gyak1.PY', 'GYAKORLO.js', 'feladat.pdf', 'elso.zh.py', 'riport.txt','test.JS']
        var PY_array, JS_array, MISC_array, output = {
            "PY_array":PY_array = [],
            "JS_array":JS_array = [],
            "MISC_array":MISC_array = [],
        };
        console.log(`Induló objektum elemei:\n${this.printArray(input)}`);
        for (let i = 0; i < input.length; i++) {
            let arr = input[i].split(`.`);
            switch(arr[arr.length-1].toLowerCase()) {
                case "py":
                    PY_array.push(arr[0]);
                break;
                case "js":
                    JS_array.push(arr[0]);
                break;
                default:
                    MISC_array.push(arr[0]);
                break;
            } 
        }
        return output;
    },
    /* 4. feladat */
    task_4 : function() {
        console.log(`%c4. Feladat: Leghoszabb nyerőszéria.`,this.color_header);
        let winners = [
            'NyanCat',
            'sajt42',
            'Laßlo', 'Laßlo', 'Laßlo',
            'NyanCat', 'NyanCat', 'NyanCat',
            'sajt42',
            'NyanCat','NyanCat',
            'sajt42', 'sajt42']
        let winnner_datas = {};
        let previous;
        console.log(`Induló tömb elemei:\n${this.printArray(winners)}`);
        for (let i = 0; i < winners.length; i++) {
            if (!(`${winners[i]}` in winnner_datas)) {
                winnner_datas[`${winners[i]}`] = [1, i];        // key: nyertes neve, value[0]: mekkora a nyerőszéria>, value[1]: hanyadik helyen nyert először.
                                                                // azaz ebben az esetben például: winner_datas["sajt42"] = [2,2] 
            } else {
                if (previous == winners[i]) {
                    winnner_datas[`${winners[i]}`][0]++;
                }
            } 
            previous = winners[i];
        }
        let winner = this.winner(winnner_datas,1);
        return `A quizt nyertese: ${winner}.\n${winner} legnagobb nyerő szériájának hossza: ${winnner_datas[`${winner}`][0]}.`;
    },
    /* 5. feladat */
    task_5 : function() {
        console.log(`%c5. Feladat: Szavak száma.`,this.color_header);
        let txt = `"Never gonna give you up, never gonna let you down, never gonna run around and desert you"`;
        console.log(`A feldolgozandó szöveg:\n${txt}.`)
        let array = txt.split(" ");
        return `A megadott mondatban található szavak száma: ${array.length}.`;
    },
    /* 6. feladat */
    task_6 : function() {
        console.log(`%c6. Feladat: Statisztika.`,this.color_header);
        let scores = [42, 35, 23, 50, 46, 25, 50, 47, 18, 38, 55];
        let stats = { average : 0, median : 0, extent : 0 };
        console.log(`A pontszámok:\n${this.printArray(scores)}`)
        let numb = 0;
        for (let i = 0; i < scores.length; i++) {
            numb += scores[i];
        }
        stats.average = numb/scores.length;
        let sorted = scores.sort();                                                     // a tömb rendezése egy másik tömbbe
        if (sorted.length%2 == 0) {                                                     // ha a rendezett tömb elemeinek száma páros
            stats.median = (sorted[(sorted.length/2)-1] + sorted[sorted.length/2])/2;       // nedián: 
                                                                                            // (a tömb felének indexe - 1 index)-en található érték
                                                                                            // +
                                                                                            // (a tömb felének indexén található érték
                                                                                            // osztva kettővel
                                                                                            // ez pl. 10 db elemszámnál a 4. és az 5. indexen
                                                                                            // található számok átlaga.  
        } else {
            stats.median = sorted[Math.ceil(sorted.length/2)];                          // páratlan elemszámnál csak a középső index kell ezért
                                                                                        // a Math.ceil()-el felfelé kerekítve az osztás eredményét
                                                                                        // megkapom a középső értéket.
        }
        stats.extent = sorted[sorted.length-1] - sorted[0];
        return stats;
    },
    task_7 : function() {
        console.log(`%c7. Feladat: Szavazás.`,this.color_header);
        let memes = [
            'Ugandan Knuckles', 'Unsettled Tom', 'Hide The Pain Harold',
            'unsettled Tom', 'Change My Mind', 'hide the pain harold',
            'distracted boyfriend meme', 'HIDE THE PAIN HAROLD', 'Mocking Spongebob',
            'mocking spongebob', 'change my mind', 'unsettled tom',
            'hide the pain Harold', 'MoCkInG SpOnGeBoB', 'Hide The Pain Harold'
        ];
        console.log(`Az induló tömb elemei (mémek):\n${this.printArray(memes)}`);
        let votes = {};
        for (let i = 0; i < memes.length; i++) {
            if (!(`${memes[i].toLowerCase()}` in votes)) {
                votes[`${memes[i].toLowerCase()}`] = [1];
            } else {
                votes[`${memes[i].toLowerCase()}`][0]++;
            } 
        }
        return votes;
    },
    task_8 : function() {
        console.log(`%c8. Feladat: Nyertes szavazat.`,this.color_header);
        let memes = [
            'Ugandan Knuckles', 'Unsettled Tom', 'Hide The Pain Harold',
            'unsettled Tom', 'Change My Mind', 'hide the pain harold',
            'distracted boyfriend meme', 'HIDE THE PAIN HAROLD', 'Mocking Spongebob',
            'mocking spongebob', 'change my mind', 'unsettled tom',
            'hide the pain Harold', 'MoCkInG SpOnGeBoB', 'Hide The Pain Harold'
        ];
        console.log(`Az induló tömb elemei (mémek):\n${this.printArray(memes)}`);
        let votes = {};
        for (let i = 0; i < memes.length; i++) {
            if (!(`${memes[i].toLowerCase()}` in votes)) {
                votes[`${memes[i].toLowerCase()}`] = [1];
            } else {
                votes[`${memes[i].toLowerCase()}`][0]++;
            } 
        }
        console.log(this.printArray(votes));
        return `A szavazás nyertese:\n"${this.winner(votes,0)}" !`;

    }
};

/* Feladatok végrehajtása és eredményeinek megjelenítése */
for (let i = 1; i <= tasks.count(); i++) {
    tasks.display(i);
}
