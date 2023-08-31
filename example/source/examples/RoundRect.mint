component RoundRect {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case Dom.Canvas.fromDomElement(canvas) {
              Maybe::Just(el) =>
                {
                  // Rounded rectangle with zero radius (specified as a number)
                  el
                  |> Canvas.setStrokeStyle(CanvasFillStyle::String("red"))
                  |> Canvas.beginPath
                  |> Canvas.roundRect(10, 20, 150, 100, [0])
                  |> Canvas.stroke

                  // Rounded rectangle with 40px radius (single element list)
                  el
                  |> Canvas.setStrokeStyle(CanvasFillStyle::String("blue"))
                  |> Canvas.beginPath
                  |> Canvas.roundRect(10, 20, 150, 100, [40])
                  |> Canvas.stroke

                  // Rounded rectangle with 2 different radii
                  el
                  |> Canvas.setStrokeStyle(CanvasFillStyle::String("orange"))
                  |> Canvas.beginPath
                  |> Canvas.roundRect(10, 150, 150, 100, [10, 40])
                  |> Canvas.stroke

                  // Rounded rectangle with four different radii
                  el
                  |> Canvas.setStrokeStyle(CanvasFillStyle::String("green"))
                  |> Canvas.beginPath
                  |> Canvas.roundRect(400, 20, 200, 100, [0, 30, 50, 60])
                  |> Canvas.stroke

                  // Same rectangle drawn backwards
                  el
                  |> Canvas.setStrokeStyle(CanvasFillStyle::String("magenta"))
                  |> Canvas.beginPath
                  |> Canvas.roundRect(400, 150, -200, 100, [0, 30, 50, 60])
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

        <canvas as canvas
          width="700"
          height="300"/>
      }

    <>
      <div class="demo">
        <{ result }>
      </div>

      <Hljs code={code}/>
    </>
  }
}
