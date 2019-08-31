import { writable } from 'svelte/store';

export const width = writable(200);
export const height = writable(50);
export const fontSize = writable(36);
export const maxLength = writable(7);
export const backgroundColor = writable('#181818');
export const fontColor = writable('#6ca45c');
export const fontFamily = writable('Courier New, Courier, monospace');

export const fonts = writable([
  'Arial, Helvetica, sans-serif',
  'Times New Roman, Times, serif',
  'Courier New, Courier, monospace'
]);
export const count = writable(1);

export const isLoading = writable(false);
export const isAllowedToCreateNew = writable(true);
export const showResultsPanel = writable(false);
export const response = writable({});
