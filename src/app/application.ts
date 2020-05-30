import { Scene, Camera, PerspectiveCamera, WebGLRenderer } from 'three';

export class Application {
  private scene: Scene;
  private camera: Camera;
  private renderer: WebGLRenderer;

  constructor() {
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
  }
}
