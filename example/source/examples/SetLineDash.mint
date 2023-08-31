component SetLineDash {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case canvas {
              Maybe::Just(el) =>
                {
                  // Dashed line
                  el
                  |> Canvas.beginPath()
                  |> Canvas.setLineDash([5, 15])
                  |> Canvas.moveTo(0, 50)
                  |> Canvas.lineTo(300, 50)
                  |> Canvas.stroke()

                  // Solid line
                  el
                  |> Canvas.beginPath()
                  |> Canvas.setLineDash([])
                  |> Canvas.moveTo(0, 100)
                  |> Canvas.lineTo(300, 100)
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
