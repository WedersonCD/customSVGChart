
define([], function () {

    return {
        type: "items",
        component: "accordion",
        items: {
            measures: {
                uses: "measures",
                min: 1,
                max: 15,
                measurePlaceHolder: {
                    ref: "qDef.placeHolder.value",
                    label: "Place Holder Value",
                    type: "string",
                    defaultValue: 'Measure_1',
                    expression: "optional"
                }
            }, 
            svg:    {
                svgImage: {
                    type: "string",
                    ref: "svg.url",
                    label: "SVG url",
                    defaultValue: './content/SVG_Template.svg',
                    expression: "optional"
                }
            },
            appearance: {
                uses: "settings"
            }
        }
    }
})