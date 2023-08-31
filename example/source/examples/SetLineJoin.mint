component SetLineJoin {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case canvas {
              Maybe::Just(el) =>
                {
                  el
                  |> Canvas.setLineWidth(20)
                  |> Canvas.setLineJoin(CanvasLineJoin::Round)
                  |> Canvas.beginPath()
                  |> Canvas.moveTo(20, 20)
                  |> Canvas.lineTo(190, 100)
                  |> Canvas.lineTo(280, 20)
                  |> Canvas.lineTo(280, 150)
                  |> Canvas.stroke()

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
