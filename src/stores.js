// eslint-disable-next-line
import { writable } from 'svelte/store';
import defaults from './data/defaults.json';

export const width = writable(defaults.width.value);
export const height = writable(defaults.height.value);
export const fontSize = writable(defaults.fontSize.value);
export const maxLength = writable(defaults.maxLength.value);
export const backgroundColor = writable(defaults.backgroundColor.value);
export const fontColor = writable(defaults.fontColor.value);
export const fontFamily = writable(defaults.fontFamily.value);

export const fonts = writable([
  'Arial, Helvetica, sans-serif',
  'Times New Roman, Times, serif',
  'Courier New, Courier, monospace',
]);
export const count = writable(defaults.count.value);

export const isLoading = writable(false);
export const isAllowedToCreateNew = writable(true);
export const showResultsPanel = writable(false);
export const response = writable({});
