component MoveTo {
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
                  |> Canvas.moveTo(50, 50)
                  |> Canvas.lineTo(200, 50)
                  |> Canvas.moveTo(50, 90)
                  |> Canvas.lineTo(280, 120)
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
