import { zoom, zoomIdentity } from 'd3'

export default (config) => {
    let {
        timeScale,
        view,
        draw,
    } = config

    return zoom()
        //.translateExtent([[ -1200, -700 ], [ 800, 800 ]])
        .on('zoom', (e) => {
            let { k, x, y } = e.transform

            let scale = zoomIdentity
                .translate(x, y)
                .scale(k)
                .rescaleX(timeScale)

            view.call(draw(scale))
        })
}