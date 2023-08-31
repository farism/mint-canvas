component SetWordSpacing {
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

                  // Default word spacing
                  el
                  |> Canvas.fillText("Hello world (default: 0px)", 10, 40)

                  // Custom word spacing: 10px
                  el
                  |> Canvas.setWordSpacing(10)
                  |> Canvas.fillText("Hello world (10px)", 10, 90)

                  // Custom word spacing: 30px
                  el
                  |> Canvas.setWordSpacing(30)
                  |> Canvas.fillText("Hello world (30px)", 10, 140)

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
