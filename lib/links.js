import { uppercaseFirstLetter } from "./mod.js";

import * as icons from 'simple-icons'

class Link {
	constructor(name, link, icon) {
		this.name = name;
		this.link = link;

		if (icon) {
			this.icon = uppercaseFirstLetter(icon);
		} else {
			this.icon = false;
		}
	}

	get() {
		const siIcon = icons["si" + this.icon];

		if (siIcon) {
			return `<a class="link" href="${this.link}" aria-label="${this.name} link">
	<div class="link">
		<i class="icon">
			<svg role="img" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
				<title>${this.name}</title>
				<path d="${siIcon.path}">
			</svg>
		</i>
		${this.name}
	</div>
</a>`;
		}
		return `<a class="link" href="${this.link}" aria-label="${this.name} link">${this.name}</a>`;
	}
}

export {
	Link,
}
