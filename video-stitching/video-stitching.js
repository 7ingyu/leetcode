/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function(clips, time) {
    let event = new Array(time).fill(0);
    let filled = 0;
    clips.sort((a, b) => a[0] - b[0]);
    let index = 0;

    while (filled < time && index < clips.length) {
        let clip = clips[index];
        let start = clip[0] < time ? clip[0]: time;
        let end = clip[1] < time ? clip[1]: time;
        let before = event[start - 1] || 0;
        if (start !== 0 && before === 0) {
            return -1;
        }
        for (let i = Math.max(start, filled); i < end; i++) {
            event[i] = !event[i] ? before + 1: event[i];
            filled = Math.max(filled, i + 1);
        }
        index ++;
    }
    return !event[time - 1] ? -1 : event[time - 1];
};