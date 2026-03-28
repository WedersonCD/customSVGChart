
define([
    './svgTemplates'
], function (svgTemplates) {

    return {
        type: "items",
        component: "accordion",
        items: {
            measures: {
                uses: "measures",
                min: 1,
                max: 15,
                items: {
                    measurePlaceHolder: {
                        ref: "qDef.placeHolder.value",
                        label: "Place Holder Value",
                        type: "string",
                        defaultValue: 'Measure_1',
                        expression: "optional"
                    }
                }
            },
            svg: {
                component: "expandable-items",
                label: "SVG",
                items: {
                    svgInputMode: {
                        ref: "svg.inputMode",
                        label: "SVG input mode",
                        component: "dropdown",
                        type: "string",
                        defaultValue: svgTemplates.defaultInputMode,
                        options: svgTemplates.inputModeOptions
                    },
                    svgImage: {
                        type: "string",
                        ref: "svg.url",
                        label: "SVG url",
                        defaultValue: './content/default/SVG_Template.svg',
                        expression: "optional",
                        show: function (data) {
                            return !data.svg || !data.svg.inputMode || data.svg.inputMode === 'publicUrl'
                        }
                    },
                    svgRawText: {
                        type: "string",
                        component: "textarea",
                        ref: "svg.rawText",
                        label: "SVG raw text",
                        rows: 12,
                        maxlength: 20000,
                        expression: "optional",
                        show: function (data) {
                            return data.svg && data.svg.inputMode === 'rawText'
                        }
                    },
                    svgTemplate: {
                        ref: "svg.templateId",
                        label: "Template file",
                        component: "dropdown",
                        type: "string",
                        defaultValue: svgTemplates.defaultTemplateId,
                        options: svgTemplates.templateOptions,
                        show: function (data) {
                            return data.svg && data.svg.inputMode === 'templateFolder'
                        }
                    }
                }

            },
            appearance: {
                uses: "settings"
            }
        }
    }
})
