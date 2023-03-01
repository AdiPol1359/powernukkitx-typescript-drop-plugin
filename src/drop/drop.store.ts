import { items } from './drop.data.js';

import type { Player } from '../types.js';

interface DisabledDrop {
	readonly uuid: string;
	readonly displayName: string;
}

const disabledDrops: DisabledDrop[] = [];

const enableDrop = (uuid: string, displayName: string) => {
	const index = disabledDrops.findIndex(
		(drop) => drop.uuid === uuid && drop.displayName === displayName
	);

	disabledDrops.splice(index, 1);
};

const disableDrop = (uuid: string, displayName: string) => {
	disabledDrops.push({ uuid, displayName });
};

export const isDropDisabled = (player: Player, displayName: string) =>
	Boolean(
		disabledDrops.find(
			(drop) =>
				drop.uuid === player.getUniqueId().toString() &&
				drop.displayName === displayName
		)
	);

export const toggleDrop = (player: Player, itemId: number) => {
	const { displayName } = items[itemId];
	const uuid = player.getUniqueId().toString();

	if (isDropDisabled(player, displayName)) {
		enableDrop(uuid, displayName);
	} else {
		disableDrop(uuid, displayName);
	}
};
