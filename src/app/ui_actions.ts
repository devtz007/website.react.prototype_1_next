'use server';

import { revalidateTag } from 'next/cache';

// Initialize a store to track the state of different buttons
const store = new Map<string, boolean>();

/**
 * Updates the store with new information and revalidates the cache for the specified button.
 *
 * @param updateInfo - An object containing the validatorTag (button's unique identifier) as the key,
 *                     and the newInfo (boolean value) as the value.
 */
export async function UiActionStore(updateInfo: { [key: string]: boolean }) {
  // Loop through the object to set the store for each tag and its new info value
  for (const [validatorTag, newInfo] of Object.entries(updateInfo)) {
    store.set(validatorTag, newInfo);
    revalidateTag(validatorTag); // purge cache for the specific tag
  }
  console.log(updateInfo);
}

/**
 * Retrieves the current value of 'info' for a given button.
 *
 * @param validatorTag - The unique identifier for the button.
 * @returns A promise that resolves to the current boolean value of the button.
 */
export default async function GetUiActionInfo(
  validatorTag: string,
): Promise<boolean> {
  return store.get(validatorTag) ?? false; // Default to false if not found
}
