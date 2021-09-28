class PipExport {
  static available = () => "pictureInPictureEnabled" in document;

  static start = async (video: HTMLVideoElement) => {
    if (!PipExport.available())
      throw Error("pictureInPicture not available...");

    if (PipExport.isRunning()) return Promise.reject("already running...");
    return await video.requestPictureInPicture();
  };

  static end = async () => {
    if (!PipExport.isRunning()) return Promise.reject("already end...");
    return await document.exitPictureInPicture();
  };

  static isRunning = () => document.pictureInPictureElement;
}

export default PipExport;
