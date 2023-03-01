import { BlockID } from 'cn.nukkit.block.BlockID';
import { FormWindowSimple } from 'cn.nukkit.form.window.FormWindowSimple';

import { items } from './drop.data.js';
import { createDropForm } from './drop.form.js';
import { isDropDisabled, toggleDrop } from './drop.store.js';
import { getRandomNumberInRange } from '../utils/math.js';
import { addItem } from '../utils/inventory.js';

import type { EventHandler } from '../types.js';

export const dropBlockBreakListenerHandler: EventHandler<
	'cn.nukkit.event.block.BlockBreakEvent'
> = (event) => {
	if (event.getBlock().getId() !== BlockID.STONE) return;

	const player = event.getPlayer();

	event.setDrops([]);
	items.forEach(({ chance, experience, displayName, item }) => {
		if (
			isDropDisabled(player, displayName) ||
			getRandomNumberInRange(1, 100) >= chance
		)
			return;

		player.addExperience(experience);
		addItem(player, item);
	});
};

export const dropPlayerFormRespondedListenerHandler: EventHandler<
	'cn.nukkit.event.player.PlayerFormRespondedEvent'
> = (event) => {
	const player = event.getPlayer();
	const window = event.getWindow();

	if (!(window instanceof FormWindowSimple) || window.wasClosed()) return;

	toggleDrop(player, event.getResponse().getClickedButtonId());
	player.showFormWindow(createDropForm(player));
};
