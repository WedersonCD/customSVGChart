define([
    'jquery',
    './properties',
    'text!./SVG_Template.svg',
    'qlik'
],
    function ($, props, svgTemplate, qlik) {

        async function getSVGTemplate(layout) {
            svgPage = await fetch(layout.svg.url).then(response=>{return response.text()});
            
            return svgPage.slice(svgPage.indexOf('<svg>'),svgPage.indexOf('</svg>'))
        }


        function  getSVGTrated(svgTemplate,fromToList) {
            let svgTrated = svgTemplate;

            fromToList.forEach((fromToObject)=>{
                svgTrated.replace(fromToObject.from, fromToObject.to)

            })

            return svgTrated;

        }

        function getSVGContainerDivID(layout){
            return 'div-svg-container-'+layout.qInfo.qId;
        }

        function getFromToList(layout){
            qHyperCube  = layout.qHyperCube;
            qtdMeasures = qHyperCube.qSize.qcx;

            var fromToList=[]
            for(measureNumber=0;measureNumber<qtdMeasures;measureNumber++){

                fromToObject ={
                    'from':qHyperCube.qMeasureInfo[measureNumber].placeHolder.value,
                    'to':qHyperCube.qGrandTotalRow[measureNumber].qText
                }

                fromToList.push(fromToObject)

            }

            return fromToList

        }

        function getSVGContainerDiv(layout) {
            divId = getSVGContainerDivID(layout);


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

                console.log(layout);
                let svgTemplate     =   await getSVGTemplate(layout);
                console.log(svgTemplate)
                let fromToList      =   getFromToList(layout);
                console.log(fromToList)
                let svgTrated       =   getSVGTrated(svgTemplate,fromToList);
                console.log(svgTrated)
                let $SVGContainerDiv =   getSVGContainerDiv(layout)
                console.log('37')
                $SVGContainerDiv.html(svgTrated);
                console.log('90')
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