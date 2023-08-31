component SetGlobalCompositeOperation {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case Dom.Canvas.fromDomElement(canvas) {
              Maybe::Just(el) =>
                {
                  el
                  |> Canvas.setGlobalCompositeOperation(CanvasGlobalCompositeOperation::Xor)

                  el
                  |> Canvas.setFillStyle(CanvasFillStyle::String("blue"))
                  |> Canvas.fillRect(10, 10, 100, 100)

                  el
                  |> Canvas.setFillStyle(CanvasFillStyle::String("red"))
                  |> Canvas.fillRect(50, 50, 100, 100)

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
