### Custom SVG Chart

Create visualization based in SVG files.

See the changes [here](https://github.com/WedersonCD/customSVGChart/blob/main/CHANGELOG.MD "Changed Log"), updated in 2026-03-28.

### SVG input modes

------------
The extension now supports 3 ways to provide the SVG template:

1) `SVG Public URL`
 - Keep the current behavior and load a SVG from a public URL.
 - You can use external links.
 - You can also refer to the Qlik content folder using this path: `http://{your_qlik_sense_server}/content/{your_svg_file_name}.svg`
 - In Qlik Sense Desktop you can use: `http://localhost:4848/content/default/{your_svg_file_name}.svg`

2) `SVG RAW TEXT`
 - Paste the SVG markup directly in the property panel.
 - The field also accepts expressions, so you can generate the SVG text dynamically if needed.

3) `From Template folder`
 - Select one of the bundled SVG templates available inside the extension `SVG Template Samples` folder.
 - This is useful when you want to test or reuse the packaged samples without hosting the SVG somewhere else.

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

4)In the SVG section of the extension choose the input mode that you want to use.
 - Use `SVG Public URL` to load a file from a public URL.
 - Use `SVG RAW TEXT` to paste the `<svg>` markup or an expression that returns it.
 - Use `From Template folder` to choose one of the bundled SVG templates.

![](https://github.com/WedersonCD/customSVGChart/blob/main/SVG%20Template%20Samples/Tutorial_Image_SVG_Link.png?raw=true)

5)Add a new measure on the extension and put the place holder label create before in the 'Place Holder Value' propertie.

![](https://github.com/WedersonCD/customSVGChart/blob/main/SVG%20Template%20Samples/Tutorial_Imagem_ADD_Measure.png?raw=true)

### Samples

------------
![](https://github.com/WedersonCD/customSVGChart/blob/main/SVG%20Template%20Samples/3_sample_image.png?raw=true)
![](https://github.com/WedersonCD/customSVGChart/blob/main/SVG%20Template%20Samples/second_sample_image.png?raw=true)
![](https://github.com/WedersonCD/customSVGChart/blob/main/SVG%20Template%20Samples/first_sample_image.png?raw=true)

### Sugestions or Issues

If you found some bug in the extesion or have some improve tip, pls open a Issues in github or send a e-mail to: wedersoncabral@gmail.com. 
