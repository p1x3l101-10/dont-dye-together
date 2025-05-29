ServerEvents.recipes(event => {
    event.shaped(
        Item.of('hexcasting:charged_amethyst'),
        [
            'A A A',
            'A A A',
            'A A A'
        ],
        {
            A: 'minecraft:amethyst_block'
        }
    );
    event.recipes.create.milling('hexcasting:amethyst_dust', 'minecraft:amethyst_shard');
})