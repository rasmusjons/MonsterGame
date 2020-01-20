new Vue({
    el: '#app',
    data: {
        show: true,
        you: 100,
        monster: 100,
        displayControls: 'none',
        displayStartButton: 'block',
        displayLog: 'none',
        logList: [],
    },
    methods: {
        showControls: function() {
            this.displayControls = 'block';
            this.displayStartButton = 'none';
        },

        attack: function() {
            this.displayLog = 'block';
            console.log('logList');
        },

        damage: function() {
            let youDamage = this.you;
            let monsterDamage = this.monster;
            youDamage = Math.floor(Math.random() * 10);
            monsterDamage = Math.floor(Math.random() * 10);

            this.logList.unshift({
                text: 'Monster hits player for',
                health: youDamage,
                class: 'monster-turn',
                key: Math.random(),
            });
            this.logList.unshift({
                text: 'Player hits player for',
                health: monsterDamage,
                class: 'player-turn',
                key: Math.random(),
            });

            this.you -= youDamage;
            this.monster -= monsterDamage;
        },

        specialAttack: function() {
            let youDamage = this.you;
            let monsterDamage = this.monster;
            youDamage = Math.floor(Math.random() * 15);
            monsterDamage = Math.floor(Math.random() * 17);

            this.logList.unshift({
                text: 'Monster hits player for',
                health: youDamage,
                class: 'monster-turn',
                key: Math.random(),
            });
            this.logList.unshift({
                text: 'Player hits monster with Special Attack for',
                health: monsterDamage,
                class: 'player-turn',
                key: Math.random(),
            });

            this.you -= youDamage;
            this.monster -= monsterDamage;
        },

        heal: function() {
            youHeal = Math.floor(Math.random() * 11);
            monsterDamage = Math.floor(Math.random() * 10);

            if (this.you + youHeal < 100) {
                this.you += youHeal;
            }
            this.you -= monsterDamage;
            this.logList.unshift({
                text: 'Monster hits player for',
                health: monsterDamage,
                class: 'monster-turn',
                key: Math.random(),
            });
            this.logList.unshift({
                text: 'Player heals for',
                health: youHeal,
                class: 'player-turn-heal',
                key: Math.random(),
            });
        },

        giveup: function() {
            this.displayControls = 'none';
            this.displayStartButton = 'block';
            this.displayLog = 'none';
            this.you = 100;
            this.monster = 100;
            this.logList = [];
        },
    },
});
