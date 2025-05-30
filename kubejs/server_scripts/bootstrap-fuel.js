ServerEvents.recipes(event => {
    event.recipes.create.compacting(
        Fluid.of("ad_astra:fuel", 100),
        [
            Fluid.of("exdeorum:witch_water", 1000),
            "minecraft:coal_block",
            "minecraft:sugar"
        ]
    );
})
