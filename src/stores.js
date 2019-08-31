import { writable } from 'svelte/store';
import defaults from './data/defaults.json';

export const width = writable(defaults.width);
export const height = writable(defaults.height);
export const fontSize = writable(defaults.fontSize);
export const maxLength = writable(defaults.maxLength);
export const backgroundColor = writable(defaults.backgroundColor);
export const fontColor = writable(defaults.fontColor);
export const fontFamily = writable(defaults.fontFamily);

export const fonts = writable([
  'Arial, Helvetica, sans-serif',
  'Times New Roman, Times, serif',
  'Courier New, Courier, monospace'
]);
export const count = writable(defaults.count);

export const isLoading = writable(false);
export const isAllowedToCreateNew = writable(true);
export const showResultsPanel = writable(false);
export const response = writable({});
