export interface SupportedDeviceType {
  type: string;
  model: string;
}

export interface SupportedDeviceResponseType {
  data: SupportedDeviceType[];
}

export interface SupportedDeviceReturnType {
  data: SupportedDeviceType[];
}

export interface CheckImeiResponseType {
  status: boolean;
}

export interface CheckImeiReturnType {
  status: boolean;
  message: string;
}
