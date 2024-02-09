export type SelectType = SelectOptions[];

export interface SelectOptions {
  label: string | JSX.Element | undefined | null;
  value: string | undefined | null;
}
export type changeSelect = (val) => void;
