export type ScreenId =
  | 'home'
  | 'chat'
  | 'avgifter'
  | 'insamling'
  | 'producent'
  | 'kontakt';

export interface ScreenProps {
  navigate: (id: ScreenId) => void;
}
