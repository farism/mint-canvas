component CreateImageData {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case canvas {
              Maybe::Just(el) =>
                {
                  let imageData =
                    Canvas.createImageData(el, 100, 100)

                  Array.range(0, 100 * 100 - 1)
                  |> Array.mapWithIndex(
                    (val : Number, index : Number) {
                      ImageData.set(imageData, index * 4, 190)
                      ImageData.set(imageData, index * 4 + 1, 0)
                      ImageData.set(imageData, index * 4 + 2, 210)
                      ImageData.set(imageData, index * 4 + 3, 255)
                      val
                    })

                  el
                  |> Canvas.putImageData(imageData, 20, 20)

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
