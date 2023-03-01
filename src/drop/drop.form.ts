import { ElementButton } from 'cn.nukkit.form.element.ElementButton';
import { ElementButtonImageData } from 'cn.nukkit.form.element.ElementButtonImageData';
import { FormWindowSimple } from 'cn.nukkit.form.window.FormWindowSimple';

import { items } from './drop.data.js';
import { isDropDisabled } from './drop.store.js';

import type { Player } from '../types.js';

export const createDropForm = (player: Player) => {
	const dropForm = new FormWindowSimple('§l§5DROP', '');

	items.forEach(({ displayName, chance, image }) => {
		const disabled = isDropDisabled(player, displayName);
		const text = [
			displayName,
			`Chance: §5${chance}%% §8| [§l§${disabled ? 'cOFF' : 'aON'}§r§8]`,
		].join('\n');
		const button = new ElementButton(text);

		button.addImage(new ElementButtonImageData('path', image));
		dropForm.addButton(button);
	});

	return dropForm;
};
