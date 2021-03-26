$(document).ready(function() {
    $("#form_gen").submit((e) => {
        const param0 = document.getElementById('param0').value;
        const param1 = document.getElementById('param1').value;
        const param2 = document.getElementById('param2').value;
        const param3 = document.getElementById('param3').value;
        const param4 = document.getElementById('param4').value;
        const param5 = document.getElementById('param5').value;
        const param6 = document.getElementById('param6').value;
        const param7 = document.getElementById('param7').value;
        const param8 = document.getElementById('param8').value;
        const param9 = document.getElementById('param9').value;
        const param10 = document.getElementById('param10').value;
        const param11 = document.getElementById('param11').value;
        const param12 = document.getElementById('param12').value;
        const param13 = document.getElementById('param13').value;
        const param14 = document.getElementById('param14').value;

        params = []
        paramsValue = []
        for (let i = 1; i <= 14; i += 1) {
            const param = document.getElementById(`param${i}`).value
            params.push({
                'value': Number(param), // Math.floor(Math.random() * (100)) + 1,
                'text': `param${i}`
            });
        }

        params.sort((obj1, obj2) => {
            return obj2.value - obj1.value;
        });

        const canvas = {
            'width': 2268,
            'height': 1276,
        }
        const ctx = new canvas2pdf.PdfContext(blobStream(), {
            'size': [canvas.width, canvas.height]
        });
        const image = new Image();
        image.crossOrigin = 'Anonymous';
        image.onload = () => {
            ctx.drawImage(image, 0, 0);

            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, 0);
            ctx.lineTo(canvas.width / 2, canvas.height);

            ctx.textAlign = 'center';
            ctx.fillStyle = "#fff";
            ctx.font = "72px Helvetica-Bold";
            ctx.fillText(`${param0}`, canvas.width / 3 + 13, canvas.height / 5 + 30);

            ctx.textAlign = 'center';
            ctx.fillStyle = "#000";
            if (params[0].value > 99) {
              ctx.font = "32px Helvetica-Bold";
            } else {
              ctx.font = "38px Helvetica-Bold";
            }
            ctx.fillText(`${params[0].value}%`, canvas.width / 2 - 968, canvas.height / 2 - 20);
            if (params[1].value > 99) {
              ctx.font = "32px Helvetica-Bold";
            } else {
              ctx.font = "38px Helvetica-Bold";
            }
            ctx.fillText(`${params[1].value}%`, canvas.width / 2 - 872, canvas.height / 2 - 20);
            if (params[2].value > 99) {
              ctx.font = "32px Helvetica-Bold";
            } else {
              ctx.font = "38px Helvetica-Bold";
            }
            ctx.fillText(`${params[2].value}%`, canvas.width / 2 - 775, canvas.height / 2 - 20);
            if (params[3].value > 99) {
              ctx.font = "32px Helvetica-Bold";
            } else {
              ctx.font = "38px Helvetica-Bold";
            }
            ctx.fillText(`${params[3].value}%`, canvas.width / 2 - 678, canvas.height / 2 - 20);
            if (params[4].value > 99) {
              ctx.font = "32px Helvetica-Bold";
            } else {
              ctx.font = "38px Helvetica-Bold";
            }
            ctx.fillText(`${params[4].value}%`, canvas.width / 2 - 580, canvas.height / 2 - 20);
            if (params[5].value > 99) {
              ctx.font = "32px Helvetica-Bold";
            } else {
              ctx.font = "38px Helvetica-Bold";
            }
            ctx.fillText(`${params[5].value}%`, canvas.width / 2 - 486, canvas.height / 2 - 20);
            if (params[6].value > 99) {
              ctx.font = "32px Helvetica-Bold";
            } else {
              ctx.font = "38px Helvetica-Bold";
            }
            ctx.fillText(`${params[6].value}%`, canvas.width / 2 - 390, canvas.height / 2 - 20);
            if (params[7].value > 99) {
              ctx.font = "32px Helvetica-Bold";
            } else {
              ctx.font = "38px Helvetica-Bold";
            }
            ctx.fillText(`${params[7].value}%`, canvas.width / 2 - 292, canvas.height / 2 - 20);
            if (params[8].value > 99) {
              ctx.font = "32px Helvetica-Bold";
            } else {
              ctx.font = "38px Helvetica-Bold";
            }
            ctx.fillText(`${params[8].value}%`, canvas.width / 2 - 194, canvas.height / 2 - 20);
            if (params[9].value > 99) {
              ctx.font = "32px Helvetica-Bold";
            } else {
              ctx.font = "38px Helvetica-Bold";
            }
            ctx.fillText(`${params[9].value}%`, canvas.width / 2 - 98, canvas.height / 2 - 20);
            if (params[10].value > 99) {
              ctx.font = "32px Helvetica-Bold";
            } else {
              ctx.font = "38px Helvetica-Bold";
            }
            ctx.fillText(`${params[10].value}%`, canvas.width / 2 - 2, canvas.height / 2 - 20);
            if (params[11].value > 99) {
              ctx.font = "32px Helvetica-Bold";
            } else {
              ctx.font = "38px Helvetica-Bold";
            }
            ctx.fillText(`${params[11].value}%`, canvas.width / 2 + 94, canvas.height / 2 - 20);
            if (params[12].value > 99) {
              ctx.font = "32px Helvetica-Bold";
            } else {
              ctx.font = "38px Helvetica-Bold";
            }
            ctx.fillText(`${params[12].value}%`, canvas.width / 2 + 192, canvas.height / 2 - 20);
            if (params[13].value > 99) {
              ctx.font = "32px Helvetica-Bold";
            } else {
              ctx.font = "38px Helvetica-Bold";
            }
            ctx.fillText(`${params[13].value}%`, canvas.width / 2 + 288, canvas.height / 2 - 20);

            const imageParam1 = new Image();
            imageParam1.crossOrigin = 'Anonymous';
            imageParam1.onload = () => {
                ctx.drawImage(imageParam1, canvas.width / 2 - 1010, canvas.height - 500);

                const imageParam2 = new Image();
                imageParam2.crossOrigin = 'Anonymous';
                imageParam2.onload = () => {
                    ctx.drawImage(imageParam2, canvas.width / 2 - 910, canvas.height - 500);

                    const imageParam3 = new Image();
                    imageParam3.crossOrigin = 'Anonymous';
                    imageParam3.onload = () => {
                        ctx.drawImage(imageParam3, canvas.width / 2 - 815, canvas.height - 500);

                        const imageParam4 = new Image();
                        imageParam4.crossOrigin = 'Anonymous';
                        imageParam4.onload = () => {
                            ctx.drawImage(imageParam4, canvas.width / 2 - 720, canvas.height - 500);

                            const imageParam5 = new Image();
                            imageParam5.crossOrigin = 'Anonymous';
                            imageParam5.onload = () => {
                                ctx.drawImage(imageParam5, canvas.width / 2 - 622, canvas.height - 500);

                                const imageParam6 = new Image();
                                imageParam6.crossOrigin = 'Anonymous';
                                imageParam6.onload = () => {
                                    ctx.drawImage(imageParam6, canvas.width / 2 - 524, canvas.height - 500);

                                    const imageParam7 = new Image();
                                    imageParam7.crossOrigin = 'Anonymous';
                                    imageParam7.onload = () => {
                                        ctx.drawImage(imageParam7, canvas.width / 2 - 428, canvas.height - 500);

                                        const imageParam8 = new Image();
                                        imageParam8.crossOrigin = 'Anonymous';
                                        imageParam8.onload = () => {
                                            ctx.drawImage(imageParam8, canvas.width / 2 - 332, canvas.height - 500);

                                            const imageParam9 = new Image();
                                            imageParam9.crossOrigin = 'Anonymous';
                                            imageParam9.onload = () => {
                                                ctx.drawImage(imageParam9, canvas.width / 2 - 236, canvas.height - 500);

                                                const imageParam10 = new Image();
                                                imageParam10.crossOrigin = 'Anonymous';
                                                imageParam10.onload = () => {
                                                    ctx.drawImage(imageParam10, canvas.width / 2 - 136, canvas.height - 500);

                                                    const imageParam11 = new Image();
                                                    imageParam11.crossOrigin = 'Anonymous';
                                                    imageParam11.onload = () => {
                                                        ctx.drawImage(imageParam11, canvas.width / 2 - 40, canvas.height - 500);

                                                        const imageParam12 = new Image();
                                                        imageParam12.crossOrigin = 'Anonymous';
                                                        imageParam12.onload = () => {
                                                            ctx.drawImage(imageParam12, canvas.width / 2 + 54, canvas.height - 500);

                                                            const imageParam13 = new Image();
                                                            imageParam13.crossOrigin = 'Anonymous';
                                                            imageParam13.onload = () => {
                                                                ctx.drawImage(imageParam13, canvas.width / 2 + 150, canvas.height - 500);

                                                                const imageParam14 = new Image();
                                                                imageParam14.crossOrigin = 'Anonymous';
                                                                imageParam14.onload = () => {
                                                                    ctx.drawImage(imageParam14, canvas.width / 2 + 250, canvas.height - 500);

                                                                    ctx.stream.on('finish', function() {
                                                                        const iframe = document.querySelector('iframe');
                                                                        iframe.src = ctx.stream.toBlobURL('application/pdf');
                                                                    });
                                                                    ctx.end();
                                                                };
                                                                imageParam14.src = `./img/params/${params[13].text}.png`;
                                                            };
                                                            imageParam13.src = `./img/params/${params[12].text}.png`;
                                                        };
                                                        imageParam12.src = `./img/params/${params[11].text}.png`;
                                                    };
                                                    imageParam11.src = `./img/params/${params[10].text}.png`;
                                                };
                                                imageParam10.src = `./img/params/${params[9].text}.png`;
                                            };
                                            imageParam9.src = `./img/params/${params[8].text}.png`;
                                        };
                                        imageParam8.src = `./img/params/${params[7].text}.png`;
                                    };
                                    imageParam7.src = `./img/params/${params[6].text}.png`;
                                };
                                imageParam6.src = `./img/params/${params[5].text}.png`;
                            };
                            imageParam5.src = `./img/params/${params[4].text}.png`;
                        };
                        imageParam4.src = `./img/params/${params[3].text}.png`;
                    };
                    imageParam3.src = `./img/params/${params[2].text}.png`;
                };
                imageParam2.src = `./img/params/${params[1].text}.png`;
            };
            imageParam1.src = `./img/params/${params[0].text}.png`;
        };
        image.src = './img/draft.png';

        return false;
    });
});
