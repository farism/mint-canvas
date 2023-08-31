component DrawFocusIfNeeded {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case canvas {
              Maybe::Just(el) =>
                {
                  ""
                  ""
                }

              =>
                ""
            }
          }

        <canvas as canvas>
          <button id="button1">
            "Continue"
          </button>

          <button id="button2">
            "Quit"
          </button>
        </canvas>
      }

    <>
      <div class="demo">
        <{ result }>
      </div>

      <Hljs code={code}/>
    </>
  }
}
