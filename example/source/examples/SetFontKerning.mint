component SetFontKerning {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case canvas {
              Maybe::Just(el) =>
                {
                  el
                  |> Canvas.setFont("30px serif")

                  // Default (auto)
                  el
                  |> Canvas.fillText("AVA Ta We (default: auto)", 5, 30)

                  // Font kerning: normal
                  el
                  |> Canvas.setFontKerning(CanvasFontKerning::Normal)
                  |> Canvas.fillText("AVA Ta We (normal)", 5, 70)

                  // Font kerning: none
                  el
                  |> Canvas.setFontKerning(CanvasFontKerning::None)
                  |> Canvas.fillText("AVA Ta We none", 5, 110)

                  ""
                }

              Maybe::Nothing =>
                ""
            }
          }

        {
          await Timer.timeout(0)
          draw()
        }

        <canvas as canvas width="400"/>
      }

    <>
      <div class="demo">
        <{ result }>
      </div>

      <Hljs code={code}/>
    </>
  }
}
