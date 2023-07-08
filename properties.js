
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
            svg:    {
                svgImage: {
                    type: "string",
                    ref: "svg.link",
                    label: "SVG Link",
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