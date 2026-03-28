define([
    'jquery',
    './properties',
    './svgTemplates',
    'qlik'
],
    function ($, props, svgTemplates, qlik) {

        function getSVGInputMode(layout) {
            if (!layout.svg || !layout.svg.inputMode) {
                return svgTemplates.defaultInputMode
            }

            return layout.svg.inputMode
        }

        function normalizeSVGTemplate(svgText) {
            if (!svgText) {
                return ''
            }

            const svgStart = svgText.indexOf('<svg')
            const svgEnd = svgText.indexOf('</svg>')

            if (svgStart === -1 || svgEnd === -1) {
                return svgText
            }

            return svgText.slice(svgStart, svgEnd) + '</svg>'
        }

        async function getSVGTemplate(layout) {
            const svg = layout.svg || {}
            const inputMode = getSVGInputMode(layout)

            if (inputMode === 'rawText') {
                return normalizeSVGTemplate(svg.rawText)
            }

            if (inputMode === 'templateFolder') {
                const templateId = svg.templateId || svgTemplates.defaultTemplateId
                return normalizeSVGTemplate(svgTemplates.templateById[templateId])
            }

            const response = await fetch(svg.url)
            const svgPage = await response.text()

            return normalizeSVGTemplate(svgPage)
        }


        function  getSVGTrated(svgTemplate,fromToList) {
            let svgTrated = svgTemplate;

            fromToList.forEach((fromToObject)=>{
                svgTrated= svgTrated.replace(fromToObject.from, fromToObject.to)

            })

            return svgTrated;

        }

        function getSVGContainerDivID(layout){
            return 'div-svg-container-'+layout.qInfo.qId;
        }

        function getFromToList(layout){
            var qHyperCube = layout.qHyperCube;
            var qtdMeasures = qHyperCube.qSize.qcx;

            var fromToList=[]
            for(var measureNumber=0;measureNumber<qtdMeasures;measureNumber++){

                var fromToObject ={
                    'from':qHyperCube.qMeasureInfo[measureNumber].placeHolder.value,
                    'to':qHyperCube.qGrandTotalRow[measureNumber].qText
                }

                fromToList.push(fromToObject)

            }

            return fromToList

        }

        function getSVGContainerDiv(layout) {
            var divId = getSVGContainerDivID(layout);


            return $("<div>").addClass(divId).css({
                width: "100%",
                height: "100%"
            });

        }


        return {

            initialProperties: {
                qHyperCubeDef: {
                    qDimensions: [],
                    qMeasures: [],
                    qInitialDataFetch: [{
                        qWidth: 15,
                        qHeight: 950 / 15
                    }]
                }
            },
            definition: props,
            support: { snapshot: true, export: true, exportData: true },
            paint: async function ($element, layout) {

                let svgTemplate     =   await getSVGTemplate(layout);
                let fromToList      =   getFromToList(layout);
                let svgTrated       =   getSVGTrated(svgTemplate,fromToList);
                let $SVGContainerDiv =   getSVGContainerDiv(layout)
                $SVGContainerDiv.html(svgTrated);
                $element.html($SVGContainerDiv);

            },
            resize: function ($element) {

                var $SVGContainerDiv = $("<div>").addClass(getSVGContainerDivID());
                var svg = $SVGContainerDiv.find("svg");
                var svgWidth = svg.attr("width");
                var svgHeight = svg.attr("height");
                svg.attr("viewBox", "0 0 " + svgWidth + " " + svgHeight);

            }
        }


    });
