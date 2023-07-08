define([
    'jquery',
    './properties',
    'text!./SVG_Template.svg',
    'qlik'
],
    function ($, props, svgTemplate, qlik) {

        async function getSVGTemplate(layout){
            return await $.get(layout.svg.url);
        }


        async function getSVGTrated(layout){

            svgTemplate = await getSVGTemplate(layout);

            

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
            paint: function async ($element, layout) {
                




                var lista_valores = [];
                var lista_label = ['Meta Fluxo', 'Meta Conversão', 'Meta PA', 'Meta PM', 'Total Meta', 'Real Fluxo', 'Real Conversão', 'Real PA', 'Real PM', 'Total Real', 'Var Fluxo', 'Var Conversao', 'Var PA', 'Var PM', 'Var Total'];

                var default_color_list = [{ color: 'df1c1c', indicador: 10 }, { color: 'cfb54e', indicador: 11 }, { color: '17f62c', indicador: 12 }, { color: 'f47272', indicador: 13 }, { color: '1f34cd', indicador: 14 }]
                var default_color_green = '276e27';
                var default_color_red = 'f93f17';

                console.log(layout)

                lista_valores.push(layout.qHyperCube.qGrandTotalRow[0].qText)
                lista_valores.push(layout.qHyperCube.qGrandTotalRow[1].qText)
                lista_valores.push(layout.qHyperCube.qGrandTotalRow[2].qText)
                lista_valores.push(layout.qHyperCube.qGrandTotalRow[3].qText)
                lista_valores.push(layout.qHyperCube.qGrandTotalRow[4].qText)

                lista_valores.push(layout.qHyperCube.qGrandTotalRow[5].qText)
                lista_valores.push(layout.qHyperCube.qGrandTotalRow[6].qText)
                lista_valores.push(layout.qHyperCube.qGrandTotalRow[7].qText)
                lista_valores.push(layout.qHyperCube.qGrandTotalRow[8].qText)
                lista_valores.push(layout.qHyperCube.qGrandTotalRow[9].qText)

                lista_valores.push(layout.qHyperCube.qGrandTotalRow[10].qText)
                lista_valores.push(layout.qHyperCube.qGrandTotalRow[11].qText)
                lista_valores.push(layout.qHyperCube.qGrandTotalRow[12].qText)
                lista_valores.push(layout.qHyperCube.qGrandTotalRow[13].qText)
                lista_valores.push(layout.qHyperCube.qGrandTotalRow[14].qText)


                var svgContent = svgTemplate; // Carrega o conteúdo do arquivo SVG

                for (x = 0; x < lista_valores.length; x++) {
                    svgContent = svgContent.replace(lista_label[x], lista_valores[x])
                }

                default_color_list.forEach((obj) => {
                    console.log('obj: ',obj)
                    
                    if (layout.qHyperCube.qGrandTotalRow[obj.indicador].qNum > 0) {
                        svgContent = svgContent.replace(obj.color, default_color_green)
                    
                    }else{
                        svgContent = svgContent.replace(obj.color, default_color_red)

                    }
                })



                $svgContainer.html(svgContent);
                
                $element.html($svgContainer);

                // Define a largura e altura do contêiner SVG como 100% para torná-lo responsivo

                // Ajuste o atributo viewBox do SVG para permitir o redimensionamento proporcional

            },
            resize: function ($element) {

                var $svgContainer = $("<div>").addClass("svg-container");
                var svg = $svgContainer.find("svg");
                var svgWidth = svg.attr("width");
                var svgHeight = svg.attr("height");
                svg.attr("viewBox", "0 0 " + svgWidth + " " + svgHeight);

            }
        }


    });