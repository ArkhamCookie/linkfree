import { Link } from "../lib/mod.js"

import { expect, test } from 'vitest'

test('make basic link', () => {
	const basicLink = new Link("website", "https://example.com");

	expect(basicLink.basicLink()).toBe('<a href="https://example.com" aria-label="website link">website</a>');
})
