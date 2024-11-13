import InteractiveEngine from "@lib/components/Interactive";
import { writable } from "svelte/store";

export const interactiveEngine = writable<InteractiveEngine | null>(null);