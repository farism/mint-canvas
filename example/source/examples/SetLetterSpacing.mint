component SetLetterSpacing {
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

                  // Default letter spacing
                  el
                  |> Canvas.fillText("Hello world (default: 0px)", 10, 40)

                  // Custom letter spacing: 10px
                  el
                  |> Canvas.setLetterSpacing(10)
                  |> Canvas.fillText("Hello world (10px)", 10, 90)

                  // Custom letter spacing: 20px
                  el
                  |> Canvas.setLetterSpacing(20)
                  |> Canvas.fillText("Hello world (20px)", 10, 140)

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

        <canvas as canvas width="700"/>
      }

    <>
      <div class="demo">
        <{ result }>
      </div>

      <Hljs code={code}/>
    </>
  }
}
