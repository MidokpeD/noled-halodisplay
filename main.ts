let haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
basic.forever(function () {
    haloDisplay.setBrightness(60)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 60; index++) {
            haloDisplay.setZipLedColor(0, kitronik_halo_hd.colors(ZipLedColors.Purple))
            haloDisplay.show()
            haloDisplay.rotate(1)
            basic.pause(10)
        }
        for (let index = 0; index < 60; index++) {
            haloDisplay.setZipLedColor(0, kitronik_halo_hd.colors(ZipLedColors.Blue))
            haloDisplay.show()
            haloDisplay.rotate(-1)
            basic.pause(10)
        }
    }
    if (CODO.potarValue(AnalogPin.P1) <= 200) {
        haloDisplay.showColor(kitronik_halo_hd.colors(ZipLedColors.Red))
        basic.pause(1000)
    } else {
        if (CODO.potarValue(AnalogPin.P1) > 200 && CODO.potarValue(AnalogPin.P1) <= 400) {
            haloDisplay.showColor(kitronik_halo_hd.colors(ZipLedColors.Yellow))
            basic.pause(1000)
        } else {
            haloDisplay.showColor(kitronik_halo_hd.colors(ZipLedColors.Green))
            basic.pause(1000)
        }
    }
})
