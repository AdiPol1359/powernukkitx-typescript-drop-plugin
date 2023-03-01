import { PowerNukkitX } from ':powernukkitx';
import { EventPriority } from 'cn.nukkit.event.EventPriority';

import {
	dropBlockBreakListenerHandler,
	dropPlayerFormRespondedListenerHandler,
} from './drop/drop.listeners.js';
import { dropCommand } from './drop/drop.command.js';

export function main() {
	PowerNukkitX.listenEvent(
		'cn.nukkit.event.block.BlockBreakEvent',
		EventPriority.NORMAL,
		dropBlockBreakListenerHandler
	);
	PowerNukkitX.listenEvent(
		'cn.nukkit.event.player.PlayerFormRespondedEvent',
		EventPriority.NORMAL,
		dropPlayerFormRespondedListenerHandler
	);

	dropCommand.register();
	console.log('Plugin loaded!');
}
