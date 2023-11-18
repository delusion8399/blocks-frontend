export type Block = {
  blockId: string;
  blockName: string;
  isProtected: boolean;
  apiKey?: string;
  userIdentity: string;
  createdAt?: string | undefined;
};
