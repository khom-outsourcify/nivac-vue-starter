export const LANGUAGES = [{ iso: "en", label: "English" }, { iso: "fr", label: "French" }];

export const SUPPORTED_LANGUAGES = LANGUAGES.map(l => l.iso);
export const DEFAULT_LANGUAGE = SUPPORTED_LANGUAGES[0];
export const FALLBACK_LANGUAGE = SUPPORTED_LANGUAGES[0];
