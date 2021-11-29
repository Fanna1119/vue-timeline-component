import { timeFormat, axisBottom, timeDay, timeMonth, timeYear } from 'd3'

function format(date) {
    if (timeDay(date) < date) {
        return timeFormat('%I:%M')(date)
    }

    if (timeMonth(date) < date) {
        return timeFormat('%b %d')(date)
    }

    if (timeYear(date) < date) {
        return timeFormat('%B')(date)
    }

    return timeFormat('%Y')(date)
}

export default (config) => selection => {
    let {
        timeScale,
        height,
    } = config

    let axe = selection.selectAll('.axe').data(d => d)

    let ay = axisBottom()
        .scale(timeScale)
        .tickFormat(d => format(d))

    axe.enter()
        .append('g')
        .attr('transform', `translate(0, ${height + 5})`)
        .classed('axe', true)
        .call(ay)

    axe.call(ay)
}