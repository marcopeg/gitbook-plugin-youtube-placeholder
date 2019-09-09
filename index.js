module.exports = {
    blocks: {
        youtube: (block) =>
            `<div style="position: relative;width: 100%;height: 0;padding-bottom: 56.25%;">
                <iframe
                    src="//www.youtube.com/embed/${block.kwargs.embed}"
                    style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>`,
    },
}
