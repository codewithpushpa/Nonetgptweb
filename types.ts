export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
