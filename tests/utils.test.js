import { uppercaseFirstLetter } from "../lib/mod.js";

import { expect, test } from 'vitest'

test('make first letter uppercase', () => {
	let word = uppercaseFirstLetter("github");

	expect(word).toBe("Github");
})
