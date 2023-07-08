
define([], function () {

    return {
        type: "items",
        component: "accordion",
        items: {
            measures: {
                uses: "measures",
                min: 1,
                max: 15
            }, 
            appearance: {
                uses: "settings"
            }
        }
    }
})