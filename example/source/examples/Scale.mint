component Scale {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case Dom.Canvas.fromDomElement(canvas) {
              Maybe::Just(el) =>
                {
                  // Scaled rectangle
                  el
                  |> Canvas.scale(9, 3)
                  |> Canvas.setFillStyle(CanvasFillStyle::String("red"))
                  |> Canvas.fillRect(10, 10, 8, 20)

                  // Reset current transformation matrix to the identity matrix
                  el
                  |> Canvas.setTransform(1, 0, 0, 1, 0, 0)

                  // Non-scaled rectangle
                  el
                  |> Canvas.setFillStyle(CanvasFillStyle::String("gray"))
                  |> Canvas.fillRect(10, 10, 8, 20)

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
