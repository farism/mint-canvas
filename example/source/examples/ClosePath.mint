component ClosePath {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case canvas {
              Maybe::Just(el) =>
                {
                  el
                  |> Canvas.beginPath()
                  |> Canvas.moveTo(20, 140)
                  |> Canvas.lineTo(120, 10)
                  |> Canvas.lineTo(220, 140)
                  |> Canvas.closePath
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
