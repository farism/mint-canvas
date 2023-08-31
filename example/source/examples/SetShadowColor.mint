component SetShadowColor {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case canvas {
              Maybe::Just(el) =>
                {
                  // Shadow
                  el
                  |> Canvas.setShadowColor("red")
                  |> Canvas.setShadowOffsetX(10)
                  |> Canvas.setShadowOffsetY(10)

                  // Filled rectangle
                  el
                  |> Canvas.fillRect(20, 20, 100, 100)

                  // Stroked rectangle
                  el
                  |> Canvas.setLineWidth(6)
                  |> Canvas.strokeRect(170, 20, 100, 100)

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

        <canvas as canvas/>
      }

    <>
      <div class="demo">
        <{ result }>
      </div>

      <Hljs code={code}/>
    </>
  }
}
