ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        Fluid.of("ad_astra:fuel", 100),
        [
            Fluid.of("exdeorum:witch_water", 1000),
            "minecraft:coal",
            "minecraft:sugar"
        ]
    );
})
