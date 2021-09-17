"use strict";

parserFactory.register("vipnovel.com", () => new VipNovelParser());

class VipNovelParser extends Parser{
    constructor() {
        super();
    }

    async getChapterUrls(dom) {
        return [...dom.querySelectorAll("li.wp-manga-chapter a")]
            .map(a => util.hyperLinkToChapter(a))
            .reverse();
    }

    findContent(dom) {
        return dom.querySelector("div.reading-content");
    }

    extractTitleImpl(dom) {
        return dom.querySelector("div.post-title h1");
    }

    extractAuthor(dom) {
        let authorLabel = dom.querySelector("div.author-content a");
        return (authorLabel === null) ? super.extractAuthor(dom) : authorLabel.textContent;
    }

    findCoverImageUrl(dom) {
        return util.getFirstImgSrc(dom, "div.summary_image");
    }

    getInformationEpubItemChildNodes(dom) {
        return [...dom.querySelectorAll("div.summary_content, div.summary__content")];
    }

    cleanInformationNode(node) {
        util.removeChildElementsMatchingCss(node, "#init-links");
    }
}
