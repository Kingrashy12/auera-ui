interface RecursiveKeyValuePair<K extends keyof any = string, V = string> {
  [key: string]: V | RecursiveKeyValuePair<K, V>;
}
type CSSRuleObject = RecursiveKeyValuePair<string, null | string | string[]>;

export interface AueraPlugin {
  Tailwind: {
    addVariant(
      name: string,
      definition: string | string[] | (() => string) | (() => string)[]
    ): void;
    addUtilities(
      utilities: CSSRuleObject | CSSRuleObject[],
      options?: Partial<{
        respectPrefix: boolean;
        respectImportant: boolean;
      }>
    ): void;
  };
}
