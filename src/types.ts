import type { Player as NukkitPlayer } from 'cn.nukkit.Player';
import type { Item as NukkitItem } from 'cn.nukkit.item.Item';
import type { PowerNukkitXEvents } from ':powernukkitx';

export type Player = InstanceType<typeof NukkitPlayer>;
export type Item = InstanceType<typeof NukkitItem>;

export type EventHandler<T extends keyof PowerNukkitXEvents> = (
	event: PowerNukkitXEvents[T]
) => void;
