import { Link } from "../lib/mod.js"

import { expect, test } from 'vitest'

test('make link with no icon', () => {
	const link = new Link("website", "https://example.com");

	expect(link.basicLink()).toBe('<a href="https://example.com" aria-label="website link">website</a>');
})
