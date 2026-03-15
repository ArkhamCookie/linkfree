class Link {
	constructor(name, link) {
		this.name = name;
		this.link = link;
	}

	basicLink() {
		return `<a href="${this.link}" aria-label="${this.name} link">${this.name}</a>`;
	}
}

export {
	Link,
}
