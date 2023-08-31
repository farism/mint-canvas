component SetShadowOffsetX {
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
                  |> Canvas.setShadowOffsetX(25)
                  |> Canvas.setShadowBlur(10)

                  // Rectangle
                  el
                  |> Canvas.setFillStyle(CanvasFillStyle::String("blue"))
                  |> Canvas.fillRect(20, 20, 150, 100)

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