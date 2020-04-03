import Moment from 'moment'

function formatDate(value) {
    if (!value) return ''
    return Moment(value).format("YYYY-MM-DD HH:mm:SS")
};

function formatDateShot(value) {
    if (!value) return ''
    return Moment(value).format("YYYY-MM-DD HH:mm:SS").slice(0, 10)
};

function formatBigNum(value) {
    if (!value) return ''
    if (value > 10000) {
        return (value / 10000).toFixed(2) + '万'
    } else {
        return value
    }
};

function formatPrice(value) {
    if (!value) return ''
    return value / 100
}

export {
    formatDate,
    formatDateShot,
    formatBigNum,
    formatPrice
}
