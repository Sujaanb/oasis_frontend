export interface GenUIConfig {
  apiKey?: string;
  endpoint?: string;
}

export interface LLMMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: Array<{ type: 'text' | 'image' | 'choice'; value: any }>;
}
