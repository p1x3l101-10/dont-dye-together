ServerEvents.recipes(event => {
    event.remove({ output: 'exdeorum:end_cake' });
    event.shaped(
        Item.of('exdeorum:end_cake'),
        [
            'EEE',
            'SCS',
            'DBD'
        ],
        {
            E: "minecraft:ender_eye",
            S: "minecraft:sugar",
            C: "minecraft:chorus_flower",
            D: "create:dough",
            B: "minecraft:dragon_breath"
        }
    );
})
