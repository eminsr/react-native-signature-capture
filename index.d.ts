import { Component } from 'react';
import { ViewProps } from 'react-native';

export interface SignatureCaptureProps extends ViewProps {
  /**
  * Make this props true, if you want to save the image file in external storage.
  * Warning: Image file will be visible in gallery or any other image browsing app
  *
  * @default false
  */
  saveImageFileInExtStorage?: boolean;

  /**
  * If this props is made to false, it will hide the dashed border (the border is shown on iOS only).
  *
  * @default false
  */
  showBorder?: boolean;

  /**
  * If this props is made to true, it will display the native buttons "Save" and "Reset".
  *
  * @default false
  */
  showNativeButtons?: boolean;

  /**
  * If this props is made to true, it will display the "x_ _ _ _ _ _ _ _ _ _ _" placeholder indicating where to sign.
  *
  * @default false
  */
  showTitleLabel?: boolean;

  /**
  * Change the screen orientation based on boolean value
  * "portrait" or "landscape"
  */
  viewMode?: 'portrait' | 'landscape';

  /**
  * sets the max size of the image maintains aspect ratio,
  *
  * @default 500
  */
  maxSize?: number;  
  
  /**
  * If this props is for set the background color of the canvas.
  *
  * @default null
  */
  canvasBackgroundColor?: string;

  /**
  * Triggered when saveImage() is called, which return Base64 Encoded String and image file path.
  *
  * @param params - the file path and encoded png
  */
  onSaveEvent?(params: SaveEventParams): void;

  /**
  * Triggered when user marks his signature on the canvas.
  * This will not be called when the user does not perform any action on canvas.
  *
  * @param event - the event when a drag is performed
  */
  onDragEvent?(event: any): void;
}

interface SaveEventParams {
  /**
  * The file path name
  */
  pathName: string;

  /**
  * The base64 encoded png
  */
  encoded: string;
}

declare class SignatureCapture extends Component<SignatureCaptureProps> {
  /**
  * When called it will save the image and returns the base 64 encoded string on onSaveEvent() callback
  */
  saveImage(): void;

  /**
  * When called it will clear the image on the canvas
  */
  resetImage(): void;
}

export default SignatureCapture;
