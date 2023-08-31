component Reset {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case Dom.Canvas.fromDomElement(canvas) {
              Maybe::Just(el) =>
                {
                  el
                  |> Canvas.setFont("25px sans-serif")
                  |> Canvas.fillText("Click reset button to reset", 0, 50)

                  ""
                }

              Maybe::Nothing =>
                ""
            }
          }

        let reset =
          () {
            case Dom.Canvas.fromDomElement(canvas) {
              Maybe::Just(el) =>
                {
                  el
                  |> Canvas.reset

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

        <div>
          <button onClick={(e : Html.Event) { reset() }}>
            "reset"
          </button>

          <canvas as canvas/>
        </div>
      }

    <>
      <div class="demo">
        <{ result }>
      </div>

      <Hljs code={code}/>
    </>
  }
}
