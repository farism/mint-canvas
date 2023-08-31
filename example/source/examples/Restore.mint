component Restore {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case Dom.Canvas.fromDomElement(canvas) {
              Maybe::Just(el) =>
                {
                  // Save the current state
                  el
                  |> Canvas.save()

                  // Set the fill style and draw a rect
                  el
                  |> Canvas.setFillStyle(CanvasFillStyle::String("green"))
                  |> Canvas.fillRect(10, 10, 100, 100)

                  // Restore to the state saved by the most recent call to save()
                  el
                  |> Canvas.restore()
                  |> Canvas.fillRect(150, 40, 100, 100)

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
