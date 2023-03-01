import type { Player, Item } from '../types.js';

export const addItem = (player: Player, item: Item) => {
	const inventory = player.getInventory();

	if (inventory.canAddItem(item)) {
		inventory.addItem([item]);
	} else {
		player.dropItem(item);
	}
};
