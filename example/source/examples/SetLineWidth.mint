component SetLineWidth {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case canvas {
              Maybe::Just(el) =>
                {
                  el
                  |> Canvas.setLineWidth(15)
                  |> Canvas.beginPath
                  |> Canvas.moveTo(20, 20)
                  |> Canvas.lineTo(130, 130)
                  |> Canvas.rect(40, 40, 70, 70)
                  |> Canvas.stroke

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
