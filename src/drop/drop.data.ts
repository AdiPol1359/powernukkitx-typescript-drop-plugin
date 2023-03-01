import { Item } from 'cn.nukkit.item.Item';
import { ItemID } from 'cn.nukkit.item.ItemID';

export const items = [
	{
		displayName: 'Diamond',
		chance: 8,
		experience: 10,
		image: 'textures/items/diamond',
		item: Item.get(ItemID.DIAMOND),
	},
	{
		displayName: 'Iron',
		chance: 10,
		experience: 15,
		image: 'textures/items/iron_ingot',
		item: Item.get(ItemID.IRON_INGOT),
	},
	{
		displayName: 'Gold',
		chance: 2,
		experience: 7,
		image: 'textures/items/gold_ingot',
		item: Item.get(ItemID.GOLD_INGOT),
	},
	{
		displayName: 'Emerald',
		chance: 30,
		experience: 15,
		image: 'textures/items/emerald',
		item: Item.get(ItemID.EMERALD),
	},
	{
		displayName: 'Apple',
		chance: 5,
		experience: 25,
		image: 'textures/items/apple',
		item: Item.get(ItemID.APPLE),
	},
];
