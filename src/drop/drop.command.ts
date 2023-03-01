import { PowerNukkitX } from ':powernukkitx';
import { Player } from 'cn.nukkit.Player';

import { createDropForm } from './drop.form.js';

export const dropCommand = PowerNukkitX.commandBuilder()
	.setCommandName('drop')
	.setCallback((sender) => {
		if (!(sender instanceof Player)) {
			console.error('You can only use this command as a player!');
			return;
		}

		sender.showFormWindow(createDropForm(sender));
	});
