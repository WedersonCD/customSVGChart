define([
    'text!./SVG Template Samples/Convite_Template.svg',
    'text!./SVG Template Samples/layout_praia.svg',
    'text!./SVG Template Samples/PInk_Template_1.svg'
], function (
    conviteTemplate,
    layoutPraiaTemplate,
    pinkTemplate1
) {

    return {
        defaultInputMode: 'publicUrl',
        defaultTemplateId: 'conviteTemplate',
        inputModeOptions: [
            {
                value: 'publicUrl',
                label: 'SVG Public URL'
            },
            {
                value: 'rawText',
                label: 'SVG RAW TEXT'
            },
            {
                value: 'templateFolder',
                label: 'From Template folder'
            }
        ],
        templateOptions: [
            {
                value: 'conviteTemplate',
                label: 'Convite_Template.svg'
            },
            {
                value: 'layoutPraia',
                label: 'layout_praia.svg'
            },
            {
                value: 'pinkTemplate1',
                label: 'PInk_Template_1.svg'
            }
        ],
        templateById: {
            conviteTemplate: conviteTemplate,
            layoutPraia: layoutPraiaTemplate,
            pinkTemplate1: pinkTemplate1
        }
    }
})
