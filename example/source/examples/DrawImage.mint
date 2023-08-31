component DrawImage {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case Dom.Canvas.fromDomElement(canvas) {
              Maybe::Just(el) =>
                case image {
                  Maybe::Just(img) =>
                    {
                      let dims =
                        Dom.getDimensions(img)

                      // resize canvas to display full image
                      Dom.setStyle(img, "display", "none")

                      el
                      |> Dom.Canvas.toDomElement
                      |> Dom.setAttribute("width", "#{dims.width}")
                      |> Dom.setAttribute("height", "#{dims.width}")

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
