document.addEventListener('DOMContentLoaded', () => {
    
    // ⚽ გიგანტური 50-კაციანი ფეხბურთელების ბაზა
    const playerDatabase = {
        legend: [
            { id: "p1", name: "LIONEL MESSI", rating: 98, tier: "👑 LEGEND", color: "#eab308", img: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?w=600&auto=format&fit=crop&q=60" },
            { id: "p2", name: "CRISTIANO RONALDO", rating: 97, tier: "👑 LEGEND", color: "#eab308", img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&auto=format&fit=crop&q=60" },
            { id: "p3", name: "PELÉ", rating: 99, tier: "👑 LEGEND", color: "#eab308", img: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=600&auto=format&fit=crop&q=60" },
            { id: "p4", name: "DIEGO MARADONA", rating: 98, tier: "👑 LEGEND", color: "#eab308", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&auto=format&fit=crop&q=60" },
            { id: "p5", name: "ZINEDINE ZIDANE", rating: 96, tier: "👑 LEGEND", color: "#eab308", img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&auto=format&fit=crop&q=60" },
            { id: "p6", name: "RONALDINHO", rating: 95, tier: "👑 LEGEND", color: "#eab308", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=60" },
            { id: "p7", name: "RONALDO NAZARIO", rating: 97, tier: "👑 LEGEND", color: "#eab308", img: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=600&auto=format&fit=crop&q=60" },
            { id: "p8", name: "JOHAN CRUYFF", rating: 95, tier: "👑 LEGEND", color: "#eab308", img: "https://images.unsplash.com/photo-104155611830-9799806810ef?w=600&auto=format&fit=crop&q=60" },
            { id: "p9", name: "PAOLO MALDINI", rating: 94, tier: "👑 LEGEND", color: "#eab308", img: "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?w=600&auto=format&fit=crop&q=60" },
            { id: "p10", name: "THIERRY HENRY", rating: 93, tier: "👑 LEGEND", color: "#eab308", img: "https://images.unsplash.com/photo-1551958219-acbc608c6d3c?w=600&auto=format&fit=crop&q=60" }
        ],
        gold: [
            { id: "p11", name: "NEYMAR JR", rating: 96, tier: "✨ GOLD", color: "#f43f5e", img: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=600&auto=format&fit=crop&q=60" },
            { id: "p12", name: "KYLIAN MBAPPE", rating: 95, tier: "✨ GOLD", color: "#f43f5e", img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&auto=format&fit=crop&q=60" },
            { id: "p13", name: "ERLING HAALAND", rating: 94, tier: "✨ GOLD", color: "#f43f5e", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=60" },
            { id: "p14", name: "VINI JR", rating: 93, tier: "✨ GOLD", color: "#f43f5e", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=60" },
            { id: "p15", name: "JUDE BELLINGHAM", rating: 92, tier: "✨ GOLD", color: "#f43f5e", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&auto=format&fit=crop&q=60" },
            { id: "p16", name: "KEVIN DE BRUYNE", rating: 93, tier: "✨ GOLD", color: "#f43f5e", img: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?w=600&auto=format&fit=crop&q=60" },
            { id: "p17", name: "HARRY KANE", rating: 91, tier: "✨ GOLD", color: "#f43f5e", img: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&auto=format&fit=crop&q=60" },
            { id: "p18", name: "LUKA MODRIC", rating: 90, tier: "✨ GOLD", color: "#f43f5e", img: "https://images.unsplash.com/photo-1551958219-acbc608c6d3c?w=600&auto=format&fit=crop&q=60" },
            { id: "p19", name: "ROBERT LEWANDOWSKI", rating: 90, tier: "✨ GOLD", color: "#f43f5e", img: "https://images.unsplash.com/photo-1516567174488-14305531ee0f?w=600&auto=format&fit=crop&q=60" },
            { id: "p20", name: "MOHAMED SALAH", rating: 91, tier: "✨ GOLD", color: "#f43f5e", img: "https://images.unsplash.com/photo-1431324155629-1a6edd1d131d?w=600&auto=format&fit=crop&q=60" },
            { id: "p21", name: "BUKAYO SAKA", rating: 89, tier: "✨ GOLD", color: "#f43f5e", img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&auto=format&fit=crop&q=60" },
            { id: "p22", name: "ANTOINE GRIEZMANN", rating: 88, tier: "✨ GOLD", color: "#f43f5e", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&auto=format&fit=crop&q=60" },
            { id: "p23", name: "VIRGIL VAN DIJK", rating: 90, tier: "✨ GOLD", color: "#f43f5e", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=60" }
        ],
        silver: [
            { id: "p24", name: "ROMELU LUKAKU", rating: 80, tier: "🥈 SILVER", color: "#94a3b8", img: "https://images.unsplash.com/photo-1431324155629-1a6edd1d131d?w=600&auto=format&fit=crop&q=60" },
            { id: "p25", name: "HARRY MAGUIRE", rating: 79, tier: "🥈 SILVER", color: "#94a3b8", img: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&auto=format&fit=crop&q=60" },
            { id: "p26", name: "NICOLAS JACKSON", rating: 78, tier: "🥈 SILVER", color: "#94a3b8", img: "https://images.unsplash.com/photo-1516567174488-14305531ee0f?w=600&auto=format&fit=crop&q=60" },
            { id: "p27", name: "ANTONY", rating: 75, tier: "🥈 SILVER", color: "#94a3b8", img: "https://images.unsplash.com/photo-1551958219-acbc608c6d3c?w=600&auto=format&fit=crop&q=60" },
            { id: "p28", name: "DARWIN NUNEZ", rating: 82, tier: "🥈 SILVER", color: "#94a3b8", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&auto=format&fit=crop&q=60" },
            { id: "p29", name: "RICHARLISON", rating: 80, tier: "🥈 SILVER", color: "#94a3b8", img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&auto=format&fit=crop&q=60" },
            { id: "p30", name: "KAI HAVERTZ", rating: 83, tier: "🥈 SILVER", color: "#94a3b8", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=60" },
            { id: "p31", name: "MARCUS RASHFORD", rating: 81, tier: "🥈 SILVER", color: "#94a3b8", img: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=600&auto=format&fit=crop&q=60" },
            { id: "p32", name: "TIMO WERNER", rating: 77, tier: "🥈 SILVER", color: "#94a3b8", img: "https://images.unsplash.com/photo-1504155611830-9799806810ef?w=600&auto=format&fit=crop&q=60" },
            { id: "p33", name: "ALVARO MORATA", rating: 81, tier: "🥈 SILVER", color: "#94a3b8", img: "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?w=600&auto=format&fit=crop&q=60" },
            { id: "p34", name: "JADON SANCHO", rating: 80, tier: "🥈 SILVER", color: "#94a3b8", img: "https://images.unsplash.com/photo-1551958219-acbc608c6d3c?w=600&auto=format&fit=crop&q=60" },
            { id: "p35", name: "SCOTT MCTOMINAY", rating: 79, tier: "🥈 SILVER", color: "#94a3b8", img: "https://images.unsplash.com/photo-1516567174488-14305531ee0f?w=600&auto=format&fit=crop&q=60" },
            { id: "p36", name: "MEMPHIS DEPAY", rating: 82, tier: "🥈 SILVER", color: "#94a3b8", img: "https://images.unsplash.com/photo-1431324155629-1a6edd1d131d?w=600&auto=format&fit=crop&q=60" },
            { id: "p37", name: "RAHEEM STERLING", rating: 81, tier: "🥈 SILVER", color: "#94a3b8", img: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&auto=format&fit=crop&q=60" }
        ],
        bronze: [
            { id: "p38", name: "MARTIN BRAITHWAITE", rating: 70, tier: "🟫 BRONZE", color: "#b45309", img: "https://images.unsplash.com/photo-1504155611830-9799806810ef?w=600&auto=format&fit=crop&q=60" },
            { id: "p39", name: "WOUT WEGHORST", rating: 68, tier: "🟫 BRONZE", color: "#b45309", img: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=600&auto=format&fit=crop&q=60" },
            { id: "p40", name: "LORIS KARIUS", rating: 65, tier: "🟫 BRONZE", color: "#b45309", img: "https://images.unsplash.com/photo-1628891890467-b79f2c8ba9ed?w=600&auto=format&fit=crop&q=60" },
            { id: "p41", name: "JOEY BARTON", rating: 69, tier: "🟫 BRONZE", color: "#b45309", img: "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?w=600&auto=format&fit=crop&q=60" },
            { id: "p42", name: "NICKLAS BENDTNER", rating: 66, tier: "🟫 BRONZE", color: "#b45309", img: "https://images.unsplash.com/photo-1551958219-acbc608c6d3c?w=600&auto=format&fit=crop&q=60" },
            { id: "p43", name: "ALI DIA", rating: 50, tier: "🟫 BRONZE", color: "#b45309", img: "https://images.unsplash.com/photo-1516567174488-14305531ee0f?w=600&auto=format&fit=crop&q=60" },
            { id: "p44", name: "BEBÉ", rating: 67, tier: "🟫 BRONZE", color: "#b45309", img: "https://images.unsplash.com/photo-1431324155629-1a6edd1d131d?w=600&auto=format&fit=crop&q=60" },
            { id: "p45", name: "TITUS BRAMBLE", rating: 64, tier: "🟫 BRONZE", color: "#b45309", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbWfNV9UkzZSEKRX_Th541oj8MI15VKietuGYEGONQ-l-sZITOm1wUSoXC-hKiLVua_qlUmC2LM58nkIkIWZ7Am4DNGnA8fL2wQSZ3SHB&s=10" },
            { id: "p46", name: "ERIC CHOUPO-MOTING", rating: 73, tier: "🟫 BRONZE", color: "#b45309", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&auto=format&fit=crop&q=60" },
            { id: "p47", name: "PHIL JONES", rating: 66, tier: "🟫 BRONZE", color: "#b45309", img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&auto=format&fit=crop&q=60" },
            { id: "p48", name: "SHKODRAN MUSTAFI", rating: 71, tier: "🟫 BRONZE", color: "#b45309", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=60" },
            { id: "p49", name: "DANNY DRINKWATER", rating: 67, tier: "🟫 BRONZE", color: "#b45309", img: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=600&auto=format&fit=crop&q=60" },
            { id: "p50", name: "EMMANUEL EBOUE", rating: 68, tier: "🟫 BRONZE", color: "#b45309", img: "https://images.unsplash.com/photo-1504155611830-9799806810ef?w=600&auto=format&fit=crop&q=60" }
        ]
    };

    let dailySpinsLeft = 10;
    const maxDailySpins = 10;
    let myCollection = []; // 🗂️ მომხმარებლის კოლექცია
    
    const todayStr = new Date().toISOString().split('T')[0];
    const username = typeof globalUsername !== 'undefined' ? globalUsername : "Player1";

    const spinBtn = document.getElementById('spin-btn');
    const card = document.getElementById('soccer-card');
    const playerImg = document.getElementById('player-img');
    const playerName = document.getElementById('player-name');
    const playerRating = document.getElementById('player-rating');
    const cardTier = document.getElementById('card-tier');
    const energyCount = document.getElementById('energy-count');
    
    const collectionGrid = document.getElementById('collection-grid');
    const collectionCount = document.getElementById('collection-count');

    // 📥 ბაზიდან ან მეხსიერებიდან მონაცემების ჩატვირთვა
    function loadUserData() {
        // სპინების ჩატვირთვა
        const localSpins = localStorage.getItem(`spins_${username}_${todayStr}`);
        if (localSpins !== null) {
            dailySpinsLeft = parseInt(localSpins);
        } else {
            dailySpinsLeft = maxDailySpins;
        }

        // კოლექციის ჩატვირთვა
        const localColl = localStorage.getItem(`collection_${username}`);
        if (localColl !== null) {
            myCollection = JSON.parse(localColl);
        }

        updateSpinUI();
        renderCollection();
    }

    function updateSpinUI() {
        energyCount.innerText = dailySpinsLeft;
        if (dailySpinsLeft <= 0) {
            spinBtn.disabled = true;
            spinBtn.innerText = "NO SPINS TODAY ❌";
            spinBtn.style.background = "#334155";
        }
    }

    // 🗂️ კოლექციის ვიზუალურად დახატვა
    function renderCollection() {
        collectionGrid.innerHTML = "";
        collectionCount.innerText = myCollection.length;

        myCollection.forEach(player => {
            const item = document.createElement('div');
            item.className = 'collection-item';
            item.style.borderColor = player.color;
            
            item.innerHTML = `
                <img src="${player.img}" alt="${player.name}">
                <div class="coll-rating">${player.rating}</div>
                <div class="coll-name">${player.name.split(' ')[0]}</div>
            `;
            collectionGrid.appendChild(item);
        });
    }

    // 🎰 დატრიალება
    spinBtn.addEventListener('click', () => {
        if (dailySpinsLeft <= 0) return;

        dailySpinsLeft--;
        energyCount.innerText = dailySpinsLeft;
        localStorage.setItem(`spins_${username}_${todayStr}`, dailySpinsLeft);

        card.classList.add('spinning');
        spinBtn.disabled = true;
        spinBtn.innerText = "🌀 ...";

        setTimeout(() => {
            const roll = Math.floor(Math.random() * 100) + 1;
            let pool = [];

            if (roll <= 2) pool = playerDatabase.legend;
            else if (roll <= 10) pool = playerDatabase.gold;
            else if (roll <= 40) pool = playerDatabase.silver;
            else pool = playerDatabase.bronze;

            const luckyPlayer = pool[Math.floor(Math.random() * pool.length)];

            // დიდი ბარათის განახლება
            playerImg.src = luckyPlayer.img;
            playerName.innerText = luckyPlayer.name;
            playerRating.innerText = luckyPlayer.rating;
            cardTier.innerText = luckyPlayer.tier;

            card.style.borderColor = luckyPlayer.color;
            card.style.boxShadow = `0 0 35px ${luckyPlayer.color}`;

            // 📥 კოლექციაში ჩამატება (თუ აქამდე არ ჰყოლია)
            const exists = myCollection.some(p => p.id === luckyPlayer.id);
            if (!exists) {
                myCollection.push(luckyPlayer);
                localStorage.setItem(`collection_${username}`, JSON.stringify(myCollection));
            }

        }, 400);

        setTimeout(() => {
            card.classList.remove('spinning');
            renderCollection(); // ინდექსის განახლება ეკრანზე
            
            if (dailySpinsLeft <= 0) {
                spinBtn.disabled = true;
                spinBtn.innerText = "NO SPINS TODAY ❌";
                spinBtn.style.background = "#334155";
            } else {
                spinBtn.disabled = false;
                spinBtn.innerText = "SPIN ⚽";
            }
        }, 800);
    });

    loadUserData();
});

// 🛠️ დეველოპერის რესეტის ფუნქცია ტესტირებისთვის
    const devResetBtn = document.getElementById('dev-reset-btn');
    
    devResetBtn.addEventListener('click', () => {
        dailySpinsLeft = 10; // სპინების აყვანა ისევ 10-ზე
        energyCount.innerText = dailySpinsLeft;
        
        // ბრაუზერის მეხსიერებაში განახლება
        localStorage.setItem(`spins_${username}_${todayStr}`, dailySpinsLeft);
        
        // ღილაკის ისევ გააქტიურება
        spinBtn.disabled = false;
        spinBtn.innerText = "SPIN ⚽";
        spinBtn.style.background = "#ef4444"; // თავისივე წითელი ფერი
        
        alert("სპინები განახლდა! კიდევ 10-ჯერ შეგიძლია დაატრიალო 🚀");
    });
