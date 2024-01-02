const button = document.getElementById("button");
const selector = document.getElementById('pokemon-selector');
const loadingIndicator = document.getElementById("loading-indicator");
const loadingIndicator2 = document.getElementById("loading-indicator2");
const loadingIndicator3 = document.getElementById("loading-indicator3");
const pokeCards = document.getElementById("pokemon-cards");
const previousCard = document.getElementById("prev-pokemon");
const currentCard = document.getElementById("current-pokemon");
const nextCard = document.getElementById("next-pokemon");
const prevbutton = document.getElementById('preve');
const nextbutton = document.getElementById('next');



for (let i = 1; i <= 1010; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    selector.appendChild(option);
}


alert('こんにちは製作者のraitaです。\nスマホでご利用の場合、画面を横向きにしてください');

// script.js
async function pokeData(pokeId){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeId}/`);
    const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokeId}/`);
    const res3 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`);

    return {
         name: await res.json(),
         pokeImg: await res2.json(),
         pokeType: await res3.json()
    };
}

button.addEventListener("click", async function () {
    console.log('はるちゃん');
    var selectorValue = selector.value;
    var pokeId = parseInt(selectorValue);

    if (pokeId < 1 || pokeId > 1010) {
        console.log("無効なID");
        return;
    }

    document.getElementById("prev-poke-img").src = '';
    document.getElementById("prev-poke-name").textContent = '';
    document.getElementById("current-poke-img").src = '';
    document.getElementById("current-poke-name").textContent = '';
    document.getElementById("next-poke-img").src = '';
    document.getElementById("next-poke-name").textContent = '';
    document.getElementById('current-poke-type').textContent = '';


    loadingIndicator.style.display = 'block';
    loadingIndicator2.style.display = 'block';
    loadingIndicator3.style.display = 'block';

        try {
            var previousPoke = pokeId > 1 ? await pokeData(pokeId - 1) : null;
            const currentPoke = await pokeData(pokeId);
            var nextPoke = pokeId < 1010 ? await pokeData(pokeId + 1) : null;
            
            //previuos
            if (previousPoke) {
                document.getElementById("prev-poke-img").src = previousPoke.pokeImg.sprites.front_default;
                console.log(previousPoke.pokeImg.sprites.front_default);
                document.getElementById("prev-poke-name").textContent = previousPoke.name.names[0].name;
                console.log(previousPoke.name.names[0].name);
                //document.getElementById("prev-poke-type").textContent = previousPoke.pokeType.types.map(typeInfo => typeInfo.type.name);
                let typesText = currentPoke.pokeType.types.map(typeInfo => {
                    switch (typeInfo.type.name) {
                        case 'grass':
                            return 'くさ';
                        case 'poison':
                            return 'どく';
                        case 'normal':
                            return 'ノーマル';
                        case 'fire':
                            return 'ほのお';
                        case 'water':
                            return 'みず';
                        case 'electric':
                            return 'でんき';
                        case 'ice':
                            return 'こおり';
                        case 'fighting':
                            return 'かくとう';
                        case 'ground':
                            return 'じめん';
                        case 'flying':
                            return 'ひこう';
                        case 'psychic':
                            return 'エスパー';
                        case 'bug':
                            return 'むし';
                        case 'rock':
                            return 'いわ';
                        case 'ghost':
                            return 'ゴースト';
                        case 'dragon':
                            return 'ドラゴン';
                        case 'dark':
                            return 'あく';
                        case 'steel':
                            return 'はがね';
                        case 'fairy':
                            return 'フェアリー';

                        // 他のタイプについても同様に追加
                    }
                }).join(', ');
                
                document.getElementById('current-poke-type').textContent = typesText;
            }
            
            
            //current
            if (currentPoke) {
                document.getElementById("current-poke-img").src = currentPoke.pokeImg.sprites.front_default;
                console.log(currentPoke.pokeImg.sprites.front_default);
                document.getElementById("current-poke-name").textContent = currentPoke.name.names[0].name;
                console.log(currentPoke.name.names[0].name);
                
            }
            

            //next
            if (nextPoke) {
                document.getElementById("next-poke-img").src = nextPoke.pokeImg.sprites.front_default;
                console.log(nextPoke.pokeImg.sprites.front_default);
                document.getElementById("next-poke-name").textContent = nextPoke.name.names[0].name;
                console.log(nextPoke.name.names[0].name);
            }
            
        } catch (error) {
            console.error("エラーが発生しました。", error);
        } finally {
            loadingIndicator.style.display = 'none';
            loadingIndicator2.style.display = 'none';
            loadingIndicator3.style.display = 'none';
        }
        

    

    
});


nextbutton.addEventListener('click', async function () {
    console.log('はるちゃん2');
    // 現在の選択されたポケモンのIDを取得
    var selectorValue = selector.value;
    var pokeId = parseInt(selectorValue) + 1; // IDを1減らす

    if (pokeId < 1) { // 最小IDを超えないようにチェック
        pokeId = 1;
    }
    if (pokeId < 1 || pokeId > 1010) {
        console.log("無効なID");
        return;
    }

    selector.value = pokeId; // セレクターの値を更新

    document.getElementById("prev-poke-img").src = '';
    document.getElementById("prev-poke-name").textContent = '';
    document.getElementById("current-poke-img").src = '';
    document.getElementById("current-poke-name").textContent = '';
    document.getElementById("next-poke-img").src = '';
    document.getElementById("next-poke-name").textContent = '';
    document.getElementById('current-poke-type').textContent = '';


    loadingIndicator.style.display = 'block';
    loadingIndicator2.style.display = 'block';
    loadingIndicator3.style.display = 'block';

        try {
            var previousPoke = pokeId > 1 ? await pokeData(pokeId - 1) : null;
            const currentPoke = await pokeData(pokeId);
            var nextPoke = pokeId < 1010 ? await pokeData(pokeId + 1) : null;
            
            //previuos
            if (previousPoke) {
                document.getElementById("prev-poke-img").src = previousPoke.pokeImg.sprites.front_default;
                console.log(previousPoke.pokeImg.sprites.front_default);
                document.getElementById("prev-poke-name").textContent = previousPoke.name.names[0].name;
                console.log(previousPoke.name.names[0].name);
                //document.getElementById("prev-poke-type").textContent = previousPoke.pokeType.types.map(typeInfo => typeInfo.type.name);
                let typesText = currentPoke.pokeType.types.map(typeInfo => {
                    switch (typeInfo.type.name) {
                        case 'grass':
                            return 'くさ';
                        case 'poison':
                            return 'どく';
                        case 'normal':
                            return 'ノーマル';
                        case 'fire':
                            return 'ほのお';
                        case 'water':
                            return 'みず';
                        case 'electric':
                            return 'でんき';
                        case 'ice':
                            return 'こおり';
                        case 'fighting':
                            return 'かくとう';
                        case 'ground':
                            return 'じめん';
                        case 'flying':
                            return 'ひこう';
                        case 'psychic':
                            return 'エスパー';
                        case 'bug':
                            return 'むし';
                        case 'rock':
                            return 'いわ';
                        case 'ghost':
                            return 'ゴースト';
                        case 'dragon':
                            return 'ドラゴン';
                        case 'dark':
                            return 'あく';
                        case 'steel':
                            return 'はがね';
                        case 'fairy':
                            return 'フェアリー';

                        // 他のタイプについても同様に追加
                    }
                }).join(', ');
                
                document.getElementById('current-poke-type').textContent = typesText;
            }
            
            
            //current
            if (currentPoke) {
                document.getElementById("current-poke-img").src = currentPoke.pokeImg.sprites.front_default;
                console.log(currentPoke.pokeImg.sprites.front_default);
                document.getElementById("current-poke-name").textContent = currentPoke.name.names[0].name;
                console.log(currentPoke.name.names[0].name);
                
            }
            

            //next
            if (nextPoke) {
                document.getElementById("next-poke-img").src = nextPoke.pokeImg.sprites.front_default;
                console.log(nextPoke.pokeImg.sprites.front_default);
                document.getElementById("next-poke-name").textContent = nextPoke.name.names[0].name;
                console.log(nextPoke.name.names[0].name);
            }
            
        } catch (error) {
            console.error("エラーが発生しました。", error);
        } finally {
            loadingIndicator.style.display = 'none';
            loadingIndicator2.style.display = 'none';
            loadingIndicator3.style.display = 'none';
        }
});


prevbutton.addEventListener('click', async function () {
    console.log('はるちゃん2');
    // 現在の選択されたポケモンのIDを取得
    var selectorValue = selector.value;
    var pokeId = parseInt(selectorValue) - 1; // IDを1減らす

    if (pokeId < 1) { // 最小IDを超えないようにチェック
        pokeId = 1;
    }
    if (pokeId < 1 || pokeId > 1010) {
        console.log("無効なID");
        return;
    }

    selector.value = pokeId; // セレクターの値を更新

    document.getElementById("prev-poke-img").src = '';
    document.getElementById("prev-poke-name").textContent = '';
    document.getElementById("current-poke-img").src = '';
    document.getElementById("current-poke-name").textContent = '';
    document.getElementById("next-poke-img").src = '';
    document.getElementById("next-poke-name").textContent = '';
    document.getElementById('current-poke-type').textContent = '';


    loadingIndicator.style.display = 'block';
    loadingIndicator2.style.display = 'block';
    loadingIndicator3.style.display = 'block';

        try {
            var previousPoke = pokeId > 1 ? await pokeData(pokeId - 1) : null;
            const currentPoke = await pokeData(pokeId);
            var nextPoke = pokeId < 1010 ? await pokeData(pokeId + 1) : null;
            
            //previuos
            if (previousPoke) {
                document.getElementById("prev-poke-img").src = previousPoke.pokeImg.sprites.front_default;
                console.log(previousPoke.pokeImg.sprites.front_default);
                document.getElementById("prev-poke-name").textContent = previousPoke.name.names[0].name;
                console.log(previousPoke.name.names[0].name);
                //document.getElementById("prev-poke-type").textContent = previousPoke.pokeType.types.map(typeInfo => typeInfo.type.name);
                let typesText = currentPoke.pokeType.types.map(typeInfo => {
                    switch (typeInfo.type.name) {
                        case 'grass':
                            return 'くさ';
                        case 'poison':
                            return 'どく';
                        case 'normal':
                            return 'ノーマル';
                        case 'fire':
                            return 'ほのお';
                        case 'water':
                            return 'みず';
                        case 'electric':
                            return 'でんき';
                        case 'ice':
                            return 'こおり';
                        case 'fighting':
                            return 'かくとう';
                        case 'ground':
                            return 'じめん';
                        case 'flying':
                            return 'ひこう';
                        case 'psychic':
                            return 'エスパー';
                        case 'bug':
                            return 'むし';
                        case 'rock':
                            return 'いわ';
                        case 'ghost':
                            return 'ゴースト';
                        case 'dragon':
                            return 'ドラゴン';
                        case 'dark':
                            return 'あく';
                        case 'steel':
                            return 'はがね';
                        case 'fairy':
                            return 'フェアリー';

                        // 他のタイプについても同様に追加
                    }
                }).join(', ');
                
                document.getElementById('current-poke-type').textContent = typesText;
            }
            
            
            //current
            if (currentPoke) {
                document.getElementById("current-poke-img").src = currentPoke.pokeImg.sprites.front_default;
                console.log(currentPoke.pokeImg.sprites.front_default);
                document.getElementById("current-poke-name").textContent = currentPoke.name.names[0].name;
                console.log(currentPoke.name.names[0].name);
                
            }
            

            //next
            if (nextPoke) {
                document.getElementById("next-poke-img").src = nextPoke.pokeImg.sprites.front_default;
                console.log(nextPoke.pokeImg.sprites.front_default);
                document.getElementById("next-poke-name").textContent = nextPoke.name.names[0].name;
                console.log(nextPoke.name.names[0].name);
            }
            
        } catch (error) {
            console.error("エラーが発生しました。", error);
        } finally {
            loadingIndicator.style.display = 'none';
            loadingIndicator2.style.display = 'none';
            loadingIndicator3.style.display = 'none';
        }
});
