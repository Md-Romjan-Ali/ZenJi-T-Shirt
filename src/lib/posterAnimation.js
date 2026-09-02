export function getPosterProgress(index, total, margin) {
    const step = 1 / total;
    const start = index * step;
    const end = (index + 1) * step;
    const transition = Math.min(margin, step / 2);

    return {
        start,
        end,
        fadeInStart: Math.max(0, start - transition),
        fadeInEnd: Math.min(end, start + transition),
        fadeOutStart: Math.max(start, end - transition),
        fadeOutEnd: Math.min(1, end + transition),
    };
}
