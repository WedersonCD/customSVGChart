### Custom SVG Chart

Create visualization based in SVG files.

See the changes [here](https://github.com/WedersonCD/customSVGChart/blob/main/CHANGELOG.MD "Changed Log"), updated in 2023-07-09.

### How to use

------------
1) Create a SVG file with hold place labels. 
 - Don't use special characters for the hold placer;
 - The sample bellow was create with Power Point.
    
![](https://github.com/WedersonCD/customSVGChart/blob/main/SVG%20Template%20Samples/Tutorial_Image_Hold_Place.png?raw=true)

2)Add the SVG in the content folder.
 - On Qilk Sense Desktop the folder path is :'Documents\Qlik\Sense\Content\Default'
 - On Qlik Sense Enterprise you can update the file in the QMC.

3)Add the extension into a Qlik sheet.

4)In the SVG section of the extension put the SVG path.
 - You can use extrenal links to load the SVG file.
 - You can refers to the contents file using this path: http://{your_qlik_sense_server}/content/{your_svg_file_name}.svg
 - In Qlik Sense Desktop you can use: http://localhost:4848/content/default/{your_svg_file_name}.svg

![](https://github.com/WedersonCD/customSVGChart/blob/main/SVG%20Template%20Samples/Tutorial_Image_SVG_Link.png?raw=true)

5)Add a new measure on the extension and put the place holder label create before in the 'Place Holder Value' propertie.

![](https://github.com/WedersonCD/customSVGChart/blob/main/SVG%20Template%20Samples/Tutorial_Imagem_ADD_Measure.png?raw=true)

### Samples

------------
![](https://github.com/WedersonCD/customSVGChart/blob/main/SVG%20Template%20Samples/3_sample_image.png?raw=true)
![](https://github.com/WedersonCD/customSVGChart/blob/main/SVG%20Template%20Samples/second_sample_image.png?raw=true)
![](https://github.com/WedersonCD/customSVGChart/blob/main/SVG%20Template%20Samples/first_sample_image.png?raw=true)

### Sugestions or Issues

With you found some bug in the extesion or have some improve tip, pls open a Issues in github or send a e-mail to: wedersoncabral@gmail.com. 