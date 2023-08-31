component DrawImage {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case canvas {
              Maybe::Just(el) =>
                case image {
                  Maybe::Just(img) =>
                    {
                      let dims =
                        Dom.getDimensions(img)

                      // resize canvas to display full image
                      Dom.setAttribute(el, "width", "#{dims.width}")
                      Dom.setAttribute(el, "height", "#{dims.width}")
                      Dom.setStyle(img, "display", "none")

                      let imageData =
                        CanvasImageSource.fromImage(img)

                      el
                      |> Canvas.drawImage(imageData, 0, 0)

                      ""
                    }

                  =>
                    ""
                }

              =>
                ""
            }
          }

        <>
          <img as image
            src={@asset(../../assets/rhino.jpg)}
            onLoad={draw}/>

          <canvas as canvas/>
        </>
      }

    <>
      <div class="demo">
        <{ result }>
      </div>

      <Hljs code={code}/>
    </>
  }
}
